(function(){
  const CONFIG_BUTTON_ID = "prepAiConfigAfterLoginBtn";
  const CONFIG_SCREEN_ID = "prepAiConfigFullScreen";

  function textOf(el){
    return String(el?.innerText || el?.textContent || el?.value || "").trim().toLowerCase();
  }

  function isVisible(el){
    if(!el) return false;
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0;
  }

  function isAuthPage(){
    const hasPassword = Array.from(document.querySelectorAll('input[type="password"]')).some(isVisible);
    const bodyText = textOf(document.body);

    const hasAuthWords =
      bodyText.includes("login") &&
      bodyText.includes("register") &&
      bodyText.includes("password");

    const hasStudyWords =
      bodyText.includes("dashboard") ||
      bodyText.includes("subject") ||
      bodyText.includes("chapter") ||
      bodyText.includes("digital book") ||
      bodyText.includes("progress") ||
      bodyText.includes("logout");

    return hasPassword && hasAuthWords && !hasStudyWords;
  }

  function removeConfigureFromLogin(){
    if(!isAuthPage()) return;

    document.querySelectorAll("button,a,[role='button'],input[type='button'],input[type='submit']").forEach(function(el){
      const t = textOf(el);

      if(
        t.includes("configure ai") ||
        t.includes("ai settings") ||
        t.includes("api key") ||
        t.includes("openai")
      ){
        el.remove();
      }
    });

    const floating = document.getElementById(CONFIG_BUTTON_ID);
    if(floating) floating.remove();

    const screen = document.getElementById(CONFIG_SCREEN_ID);
    if(screen) screen.remove();
  }

  function getUserKey(){
    const possible = [
      "prep_ai_current_user",
      "currentUser",
      "loggedInUser",
      "prepAiUser",
      "user"
    ];

    for(const k of possible){
      const v = localStorage.getItem(k);
      if(!v) continue;

      try{
        const obj = JSON.parse(v);
        return obj.username || obj.fullName || obj.name || "local_user";
      }catch(e){
        return v;
      }
    }

    return "local_user";
  }

  function apiKeyStorageName(){
    return "prep_ai_user_api_key_" + String(getUserKey()).replace(/[^a-z0-9_-]/gi,"_");
  }

  function getApiKey(){
    return localStorage.getItem(apiKeyStorageName()) ||
           localStorage.getItem("prep_ai_api_key") ||
           "";
  }

  function saveApiKey(key){
    key = String(key || "").trim();
    localStorage.setItem(apiKeyStorageName(), key);
    localStorage.setItem("prep_ai_api_key", key);
    window.PREP_AI_API_KEY = key;
  }

  function getAiModel(){
    return localStorage.getItem("prep_ai_model") || "gpt-4o-mini";
  }

  function saveAiModel(model){
    localStorage.setItem("prep_ai_model", String(model || "gpt-4o-mini").trim());
  }

  function openAiSettingsScreen(){
    if(document.getElementById(CONFIG_SCREEN_ID)) return;

    const screen = document.createElement("div");
    screen.id = CONFIG_SCREEN_ID;
    screen.innerHTML = `
      <div class="prep-ai-settings-bg"></div>
      <div class="prep-ai-settings-page">
        <div class="prep-ai-settings-top">
          <div>
            <h1>Configure AI</h1>
            <p>Set the AI key after login. This key will be used across the whole Prep AI app.</p>
          </div>
          <button id="prepAiSettingsClose" type="button">×</button>
        </div>

        <div class="prep-ai-settings-content">
          <label>OpenAI API Key</label>
          <input id="prepAiApiKeyInput" type="password" placeholder="Paste your API key here" value="${getApiKey().replace(/"/g,"&quot;")}">

          <label>AI Model</label>
          <input id="prepAiModelInput" type="text" placeholder="gpt-4o-mini" value="${getAiModel().replace(/"/g,"&quot;")}">

          <div class="prep-ai-settings-box">
            This screen is only available after login/register. The login screen will not show Configure AI anymore.
          </div>
        </div>

        <div class="prep-ai-settings-actions">
          <button id="prepAiSaveSettings" type="button">Save Settings</button>
          <button id="prepAiClearSettings" type="button">Clear API Key</button>
        </div>
      </div>
    `;

    document.body.appendChild(screen);

    document.getElementById("prepAiSettingsClose").onclick = function(){
      screen.remove();
    };

    document.getElementById("prepAiSaveSettings").onclick = function(){
      saveApiKey(document.getElementById("prepAiApiKeyInput").value);
      saveAiModel(document.getElementById("prepAiModelInput").value);
      alert("AI settings saved.");
      screen.remove();
    };

    document.getElementById("prepAiClearSettings").onclick = function(){
      saveApiKey("");
      alert("AI key cleared.");
      screen.remove();
    };
  }

  function addConfigureAfterLogin(){
    if(isAuthPage()) return;

    if(document.getElementById(CONFIG_BUTTON_ID)) return;

    const btn = document.createElement("button");
    btn.id = CONFIG_BUTTON_ID;
    btn.type = "button";
    btn.textContent = "⚙ Configure AI";
    btn.onclick = openAiSettingsScreen;

    document.body.appendChild(btn);
  }

  function patchAiFetch(){
    if(window.__prepAiFetchConfiguredScreenPatch) return;
    window.__prepAiFetchConfiguredScreenPatch = true;

    const originalFetch = window.fetch.bind(window);

    window.fetch = function(input, init){
      const key = getApiKey();
      const model = getAiModel();

      if(key){
        init = init || {};
        const headers = new Headers(init.headers || {});
        headers.set("x-prep-ai-key", key);
        headers.set("x-openai-api-key", key);
        headers.set("x-prep-ai-model", model);
        init.headers = headers;
      }

      return originalFetch(input, init);
    };
  }

  function renameApp(){
    document.title = "Prep AI";
    document.querySelectorAll("h1,h2,h3").forEach(function(el){
      if(String(el.innerText || "").trim() === "AI Exam Prep"){
        el.innerText = "Prep AI";
      }
    });
  }

  function run(){
    renameApp();
    removeConfigureFromLogin();

    if(!isAuthPage()){
      addConfigureAfterLogin();
    }
  }

  patchAiFetch();

  document.addEventListener("click", function(e){
    const target = e.target.closest("button,a,[role='button']");
    if(!target) return;

    const t = textOf(target);

    if(isAuthPage() && (t.includes("configure ai") || t.includes("api key") || t.includes("ai settings"))){
      e.preventDefault();
      e.stopImmediatePropagation();
      target.remove();
      return false;
    }
  }, true);

  new MutationObserver(run).observe(document.documentElement, {
    childList:true,
    subtree:true,
    characterData:true
  });

  window.addEventListener("load", run);
  window.addEventListener("hashchange", run);
  setInterval(run, 500);
  run();
})();
