const reader = new FileReader();

reader.onload = function(event){
    const csvData = event.target.result;
    arr = csvToArr(csvData);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0].id;
        document.getElementById("progressBar").style.display = "block";
        document.getElementById("progressBar").value = 0;
        chrome.tabs.sendMessage(tabId, { action: "startConnecting", message: arr});
    });
};

document.getElementById("csv").addEventListener("change", (event) => {
  const file = event.target.files[0];
  reader.readAsText(file);
});

function parseCSVLine(line) {
  const pattern = new RegExp(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
  return line.match(pattern).map(value => {
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.substr(1, value.length - 2);
    }
    return value.trim();
  });
}

function csvToArr(csvData){
    return csvData
    .trim()
    .split("\r\n")
    .map((item) => parseCSVLine(item));
}

