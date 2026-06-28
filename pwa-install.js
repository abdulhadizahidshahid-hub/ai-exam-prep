(function(){
  let deferredPrompt = null;

  function createInstallButton(){
    if(document.getElementById("prepAiInstallBtn")) return;

    const btn = document.createElement("button");
    btn.id = "prepAiInstallBtn";
    btn.textContent = "Install Prep AI";
    btn.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:99999;border:0;border-radius:999px;padding:12px 18px;background:#2563eb;color:white;font-weight:900;box-shadow:0 12px 28px rgba(37,99,235,.35);cursor:pointer;display:none;";

    btn.addEventListener("click", async function(){
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      btn.style.display = "none";
    });

    document.body.appendChild(btn);
  }

  window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault();
    deferredPrompt = e;
    createInstallButton();
    const btn = document.getElementById("prepAiInstallBtn");
    if(btn) btn.style.display = "block";
  });

  window.addEventListener("appinstalled", function(){
    const btn = document.getElementById("prepAiInstallBtn");
    if(btn) btn.style.display = "none";
  });

  if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("/service-worker.js").catch(console.error);
    });
  }
})();
