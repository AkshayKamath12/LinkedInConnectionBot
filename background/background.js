chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "redirect") {
    chrome.tabs.query({currentWindow: true, active:true}, function (tab) {
      chrome.tabs.update(tab.id, {url: message.url});
    });
  }
});
