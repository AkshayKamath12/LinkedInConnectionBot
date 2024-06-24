chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startConnecting") {
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("progressBar").value = 0;
    arr = message.message;
    startConnecting(message);
  }
});




