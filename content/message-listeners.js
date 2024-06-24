const reader = new FileReader();

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startConnecting") {
    const file = document.getElementById('csv').files[0];
    reader.readAsText(file);
  }
});

reader.onload = function(event){
    const csvData = event.target.result;
    arr = csvToArr(csvData);
    startConnecting(arr)
      .then((data) => {})
      .catch((err) => {
        console.error(err);
      });
};

function csvToArr(csvData){
    return csvData
    .trim()
    .split("\n")
    .map((item) => item.split(','));
}
