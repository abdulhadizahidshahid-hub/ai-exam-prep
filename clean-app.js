(function(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister())).catch(()=>{});
  }
  if(window.caches){
    caches.keys().then(keys => keys.forEach(k => caches.delete(k))).catch(()=>{});
  }

  const app = document.getElementById("app");

  const subjects = [
    { id:"physics", name:"Physics", icon:"⚡", status:"Added" },
    { id:"chemistry", name:"Chemistry", icon:"🧪", status:"Added" },
    { id:"biology", name:"Biology", icon:"🧬", status:"Next" },
    { id:"math", name:"Mathematics", icon:"📐", status:"Next" },
    { id:"computer", name:"Computer Science", icon:"💻", status:"Next" },
    { id:"english", name:"English", icon:"📘", status:"Next" }
  ];

  function getUsers(){
    try{ return JSON.parse(localStorage.getItem("prep_ai_users") || "[]"); }
    catch(e){ return []; }
  }

  function saveUsers(users){
    localStorage.setItem("prep_ai_users", JSON.stringify(users));
  }

  function currentUser(){
    try{ return JSON.parse(localStorage.getItem("prep_ai_current_user") || "null"); }
    catch(e){ return null; }
  }

  function setCurrentUser(user){
    localStorage.setItem("prep_ai_current_user", JSON.stringify(user));
  }

  function logout(){
    localStorage.removeItem("prep_ai_current_user");
    renderAuth("login");
  }

  function getApiKey(){
    return localStorage.getItem("prep_ai_api_key") || "";
  }

  function getModel(){
    return localStorage.getItem("prep_ai_model") || "gpt-4o-mini";
  }

  function saveAiSettings(){
    localStorage.setItem("prep_ai_api_key", document.getElementById("apiKey").value.trim());
    localStorage.setItem("prep_ai_model", document.getElementById("aiModel").value.trim() || "gpt-4o-mini");
    alert("AI settings saved.");
    renderDashboard();
  }

  function renderAuth(mode){
    app.innerHTML = `
      <main class="auth-page">
        <section class="auth-card">
          <div class="auth-head">
            <h1>Prep AI</h1>
            <p>Login or create your account to start studying with AI.</p>
          </div>

          <div class="auth-body">
            <div class="tabs">
              <button class="${mode === "login" ? "active" : ""}" id="loginTab">Login</button>
              <button class="${mode === "register" ? "active" : ""}" id="registerTab">Register</button>
            </div>

            ${mode === "register" ? `
              <label>Full Name</label>
              <input id="fullName" placeholder="Enter your name">
            ` : ""}

            <label>Username</label>
            <input id="username" placeholder="Enter username">

            <label>Password</label>
            <input id="password" type="password" placeholder="Enter password">

            <button class="primary" id="authSubmit">${mode === "login" ? "Login" : "Create Account"}</button>

            <p class="small-note">Local account for this computer only.</p>
          </div>
        </section>
      </main>
    `;

    document.getElementById("loginTab").onclick = () => renderAuth("login");
    document.getElementById("registerTab").onclick = () => renderAuth("register");

    document.getElementById("authSubmit").onclick = function(){
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if(!username || !password){
        alert("Enter username and password.");
        return;
      }

      const users = getUsers();

      if(mode === "register"){
        const fullName = document.getElementById("fullName").value.trim() || username;
        if(users.some(u => u.username === username)){
          alert("Username already exists.");
          return;
        }

        const user = { username, password, fullName };
        users.push(user);
        saveUsers(users);
        setCurrentUser({ username, fullName });
        renderDashboard();
        return;
      }

      const found = users.find(u => u.username === username && u.password === password);
      if(!found){
        alert("Invalid login. Register first if this is a new account.");
        return;
      }

      setCurrentUser({ username:found.username, fullName:found.fullName || found.username });
      renderDashboard();
    };
  }

  function renderDashboard(){
    const user = currentUser();
    if(!user){
      renderAuth("login");
      return;
    }

    app.innerHTML = `
      <main class="dashboard">
        <header class="topbar">
          <div>
            <h1>Prep AI</h1>
            <p>Welcome, ${user.fullName || user.username}</p>
          </div>
          <div class="top-actions">
            <button id="configureAiBtn">⚙ Configure AI</button>
            <button id="logoutBtn">Logout</button>
          </div>
        </header>

        <section class="hero">
          <h2>Study Dashboard</h2>
          <p>Fast clean version loaded. Now we can add subjects, classes, checklist, charts and Android app support properly.</p>
        </section>

        <section class="grid">
          <div class="panel">
            <h3>Classes</h3>
            <div class="class-list">
              <button>Class 9</button>
              <button class="active">Class 10</button>
              <button>Class 11</button>
              <button>Class 12</button>
            </div>
          </div>

          <div class="panel">
            <h3>Progress</h3>
            <div class="progress-box">
              <div><span>Overall</span><b>0%</b></div>
              <div class="bar"><i style="width:0%"></i></div>
            </div>
          </div>
        </section>

        <section class="panel">
          <h3>Subjects</h3>
          <div class="subject-grid">
            ${subjects.map(s => `
              <button class="subject-card">
                <span>${s.icon}</span>
                <b>${s.name}</b>
                <small>${s.status}</small>
              </button>
            `).join("")}
          </div>
        </section>

        <section class="grid">
          <div class="panel">
            <h3>Checklist</h3>
            <label class="check"><input type="checkbox"> Finish Physics content cleanup</label>
            <label class="check"><input type="checkbox"> Add all subjects</label>
            <label class="check"><input type="checkbox"> Add progress charts</label>
            <label class="check"><input type="checkbox"> Build Android install version</label>
          </div>

          <div class="panel">
            <h3>Next Build Tasks</h3>
            <ol>
              <li>Add clean subject data files.</li>
              <li>Add progress tracking.</li>
              <li>Add charts.</li>
              <li>Add AI question generator.</li>
              <li>Package as Android app.</li>
            </ol>
          </div>
        </section>
      </main>
    `;

    document.getElementById("logoutBtn").onclick = logout;
    document.getElementById("configureAiBtn").onclick = renderAiSettings;
  }

  function renderAiSettings(){
    const user = currentUser();
    if(!user){
      renderAuth("login");
      return;
    }

    app.innerHTML = `
      <main class="settings-page">
        <section class="settings-card">
          <div class="auth-head">
            <h1>Configure AI</h1>
            <p>Set AI settings for the whole Prep AI app.</p>
          </div>

          <div class="auth-body">
            <label>OpenAI API Key</label>
            <input id="apiKey" type="password" placeholder="Paste API key" value="${getApiKey().replace(/"/g,"&quot;")}">

            <label>AI Model</label>
            <input id="aiModel" placeholder="gpt-4o-mini" value="${getModel().replace(/"/g,"&quot;")}">

            <button class="primary" id="saveAiBtn">Save AI Settings</button>
            <button class="secondary" id="backBtn">Back to Dashboard</button>
          </div>
        </section>
      </main>
    `;

    document.getElementById("saveAiBtn").onclick = saveAiSettings;
    document.getElementById("backBtn").onclick = renderDashboard;
  }

  window.addEventListener("load", function(){
    if(currentUser()) renderDashboard();
    else renderAuth("login");
  });
})();
