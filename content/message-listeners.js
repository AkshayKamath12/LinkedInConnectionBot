const reader = new FileReader();

reader.onload = function(event){
    const csvData = event.target.result;
    csvToArray(csvData);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startConnecting") {
    scrapeLinkedIn()
      .then((data) => {})
      .catch((err) => {
        console.error(err);
      });
  }
});
