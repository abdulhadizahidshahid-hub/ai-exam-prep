(function(){
  const BTN_ID = "prepAiFastConfigBtn";
  const SCREEN_ID = "prepAiFastConfigScreen";

  function text(el){
    return String(el?.innerText || el?.textContent || "").trim().toLowerCase();
  }

  function visible(el){
    if(!el) return false;
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0;
  }

  function isAuthPage(){
    const hasPassword = Array.from(document.querySelectorAll('input[type="password"]')).some(visible);
    const body = text(document.body);
    const auth = body.includes("login") && body.includes("register") && body.includes("password");
    const insideApp = body.includes("dashboard") || body.includes("subjects") || body.includes("chapters") || body.includes("logout") || body.includes("digital book");
    return hasPassword && auth && !insideApp;
  }

  function removeLoginConfigure(){
    if(!isAuthPage()) return;

    document.querySelectorAll("button,a,[role='button']").forEach(el => {
      const t = text(el);
      if(t.includes("configure ai") || t.includes("api key") || t.includes("ai settings")){
        el.remove();
      }
    });

    const btn = document.getElementById(BTN_ID);
    if(btn) btn.remove();
  }

  function getKey(){
    return localStorage.getItem("prep_ai_api_key") || "";
  }

  function saveKey(v){
    localStorage.setItem("prep_ai_api_key", String(v || "").trim());
  }

  function getModel(){
    return localStorage.getItem("prep_ai_model") || "gpt-4o-mini";
  }

  function saveModel(v){
    localStorage.setItem("prep_ai_model", String(v || "gpt-4o-mini").trim());
  }

  function openConfig(){
    if(document.getElementById(SCREEN_ID)) return;

    const div = document.createElement("div");
    div.id = SCREEN_ID;
    div.innerHTML = `
      <div class="prep-fast-bg"></div>
      <div class="prep-fast-panel">
        <div class="prep-fast-head">
          <div>
            <h2>Configure AI</h2>
            <p>AI settings for the whole Prep AI app.</p>
          </div>
          <button id="prepFastClose" type="button">×</button>
        </div>

        <div class="prep-fast-body">
          <label>OpenAI API Key</label>
          <input id="prepFastKey" type="password" placeholder="Paste API key" value="${getKey().replace(/"/g,"&quot;")}">

          <label>Model</label>
          <input id="prepFastModel" type="text" value="${getModel().replace(/"/g,"&quot;")}">
        </div>

        <div class="prep-fast-actions">
          <button id="prepFastSave" type="button">Save Settings</button>
          <button id="prepFastClear" type="button">Clear Key</button>
        </div>
      </div>
    `;

    document.body.appendChild(div);

    document.getElementById("prepFastClose").onclick = () => div.remove();

    document.getElementById("prepFastSave").onclick = () => {
      saveKey(document.getElementById("prepFastKey").value);
      saveModel(document.getElementById("prepFastModel").value);
      alert("AI settings saved.");
      div.remove();
    };

    document.getElementById("prepFastClear").onclick = () => {
      saveKey("");
      alert("AI key cleared.");
      div.remove();
    };
  }

  function addAfterLoginButton(){
    if(isAuthPage()) return;
    if(document.getElementById(BTN_ID)) return;

    const btn = document.createElement("button");
    btn.id = BTN_ID;
    btn.type = "button";
    btn.textContent = "⚙ Configure AI";
    btn.onclick = openConfig;
    document.body.appendChild(btn);
  }

  function rename(){
    document.title = "Prep AI";
    document.querySelectorAll("h1,h2").forEach(el => {
      if(String(el.innerText || "").trim() === "AI Exam Prep"){
        el.innerText = "Prep AI";
      }
    });
  }

  function run(){
    rename();
    removeLoginConfigure();
    addAfterLoginButton();
  }

  if("serviceWorker" in navigator){
    navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister())).catch(()=>{});
  }

  if(window.caches){
    caches.keys().then(keys => keys.forEach(k => caches.delete(k))).catch(()=>{});
  }

  document.addEventListener("click", function(e){
    const el = e.target.closest("button,a,[role='button']");
    if(!el) return;
    const t = text(el);

    if(isAuthPage() && (t.includes("configure ai") || t.includes("api key") || t.includes("ai settings"))){
      e.preventDefault();
      e.stopImmediatePropagation();
      el.remove();
      return false;
    }
  }, true);

  window.addEventListener("load", run);
  setTimeout(run, 50);
  setTimeout(run, 200);
  setTimeout(run, 700);
  setTimeout(run, 1500);
})();
