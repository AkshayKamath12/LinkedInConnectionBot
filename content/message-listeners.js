chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startConnecting") {
    arr = message.message;
    startConnecting(message);
  }
});




