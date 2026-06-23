const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, data){
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(data));
}

function readBody(req){
  return new Promise(resolve => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try { resolve(JSON.parse(body || "{}")); }
      catch { resolve({}); }
    });
  });
}

async function askOpenAI(question, context, aiConfig){
  const apiKey = process.env.OPENAI_API_KEY || aiConfig?.apiKey || "";
  const model = process.env.OPENAI_MODEL || aiConfig?.model || "gpt-4o-mini";

  if(!apiKey) return null;

  const prompt = `You are an AI Exam Tutor. Explain simply and help the student prepare for exams.

Selected lesson/context:
${context || "No selected lesson context."}

Student question:
${question || "No question."}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You are a helpful exam preparation tutor." },
        { role: "user", content: prompt }
      ],
      temperature: 0.4
    })
  });

  const raw = await response.text();
  if(!response.ok) throw new Error(raw);

  const data = JSON.parse(raw);
  return data?.choices?.[0]?.message?.content || null;
}

function smartFallback(question, context){
  const q = (question || "").trim();
  const ctx = (context || "").trim();

  if(!ctx){
    return `AI Tutor is connected ✅

Your question: ${q || "No question typed."}

Select a chapter/topic first, then ask again. I will use that lesson content to help you.`;
  }

  if(/mcq|mcqs|quiz|question/i.test(q)){
    return `AI Tutor is connected ✅

Here are quick practice questions from the selected topic:

1. What is the main idea of this topic?
2. Define the most important term from this topic.
3. Write one short answer question from this topic.
4. Give one example related to this topic.
5. What point from this topic is most likely to come in exams?

For full AI-generated MCQs, add an OpenAI API key in Render environment variables.`;
  }

  if(/summary|summarize|notes|explain/i.test(q)){
    return `AI Tutor is connected ✅

Quick exam notes from your selected topic:

${ctx.slice(0, 900)}

Focus on:
- Definitions
- Key terms
- Examples
- Important reactions/formulas if present
- Short question answers

For full AI answers, add an OpenAI API key in Render environment variables.`;
  }

  return `AI Tutor is connected ✅

Your question: ${q}

I can see the selected lesson context. For full AI answers, add an OpenAI API key in Render environment variables.

For now, try asking:
- explain this topic simply
- make MCQs
- make short questions
- summarize this chapter`;
}

const server = http.createServer(async (req, res) => {
  try{
    const urlPath = decodeURIComponent(req.url.split("?")[0]);

    if(req.method === "GET" && urlPath === "/api/health"){
      return sendJson(res, 200, { ok: true, status: "running" });
    }

    if(req.method === "POST" && urlPath === "/api/ask"){
      const body = await readBody(req);

      const question = body.question || body.message || body.prompt || body.q || "";
      const context = body.context || body.lesson || body.content || body.chapterText || body.selectedText || "";
      const aiConfig = body.aiConfig || {};

      try{
        const answer = await askOpenAI(question, context, aiConfig);
        if(answer){
          return sendJson(res, 200, { answer, response: answer });
        }
      }catch(err){
        return sendJson(res, 200, {
          answer: "AI Tutor connected, but OpenAI returned an error:\n\n" + err.message,
          response: "AI Tutor connected, but OpenAI returned an error:\n\n" + err.message
        });
      }

      const fallback = smartFallback(question, context);
      return sendJson(res, 200, { answer: fallback, response: fallback });
    }

    let filePath = urlPath === "/" ? "/index.html" : urlPath;
    filePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, "");
    const fullPath = path.join(__dirname, filePath);

    if(!fullPath.startsWith(__dirname)){
      res.writeHead(403);
      return res.end("Forbidden");
    }

    fs.readFile(fullPath, (err, data) => {
      if(err){
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Not found");
      }

      const ext = path.extname(fullPath).toLowerCase();
      res.writeHead(200, {
        "Content-Type": mime[ext] || "application/octet-stream",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
      });
      res.end(data);
    });
  }catch(err){
    return sendJson(res, 500, { answer: "Server error: " + err.message, response: "Server error: " + err.message });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("AI Exam Prep running on port " + PORT);
});
