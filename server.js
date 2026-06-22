const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DEFAULT_OLLAMA_URL = "http://localhost:11434/api/generate";
const DEFAULT_MODEL = "llama3.2";

const mime = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function send(res, code, data, type = "application/json") {
  res.writeHead(code, {
    "Content-Type": type,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(type === "application/json" ? JSON.stringify(data) : data);
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => resolve(body));
  });
}

async function askAI(prompt, cfg) {
  const provider = (cfg.provider || "ollama").toLowerCase();
  const model = cfg.model || DEFAULT_MODEL;
  const apiUrl = cfg.apiUrl || DEFAULT_OLLAMA_URL;
  const apiKey = cfg.apiKey || "";

  if (provider === "openai") {
    const response = await fetch(apiUrl || "https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "OpenAI request failed");
    return data.choices?.[0]?.message?.content || "AI did not return an answer.";
  }

  if (provider === "custom") {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { "Authorization": "Bearer " + apiKey } : {})
      },
      body: JSON.stringify({ model, prompt, question: prompt })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Custom AI request failed");
    return data.answer || data.response || data.message || data.text || JSON.stringify(data);
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt,
      stream: false
    })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Ollama request failed");
  return data.response || data.answer || "AI did not return an answer.";
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "OPTIONS") {
      return send(res, 204, {});
    }

    if (req.url === "/api/health") {
      return send(res, 200, { ok: true, app: "AI Exam Prep" });
    }

    if (req.url === "/api/ask" && req.method === "POST") {
      const raw = await readBody(req);
      const body = JSON.parse(raw || "{}");

      const prompt = body.prompt || body.question || body.message || "";
      const cfg = body.aiConfig || {};

      if (!prompt.trim()) {
        return send(res, 400, { error: "Question is required" });
      }

      try {
        const answer = await askAI(prompt, cfg);
        return send(res, 200, { answer });
      } catch (err) {
        return send(res, 200, {
          answer:
            "AI configuration is connected, but the selected AI provider did not answer.\n\nProvider: " +
            (cfg.provider || "ollama") +
            "\nModel: " +
            (cfg.model || DEFAULT_MODEL) +
            "\nError: " +
            err.message
        });
      }
    }

    let filePath = req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
    filePath = path.join(__dirname, filePath);

    if (!filePath.startsWith(__dirname)) return send(res, 403, "Forbidden", "text/plain");
    if (!fs.existsSync(filePath)) return send(res, 404, "Not found", "text/plain");

    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": type });
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    send(res, 500, { error: err.message });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("AI Exam Prep running at http://localhost:" + PORT);
  console.log("Configure AI is now connected to /api/ask");
});
