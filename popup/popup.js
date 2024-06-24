const reader = new FileReader();

reader.onload = function(event){
    const csvData = event.target.result;
    arr = csvToArr(csvData);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: "startConnecting", message: arr});
    });
};

document.getElementById("csv").addEventListener("change", (event) => {
  const file = event.target.files[0];
  reader.readAsText(file);
});

function csvToArr(csvData){
    return csvData
    .trim()
    .split("\n")
    .map((item) => item.split(','));
}


