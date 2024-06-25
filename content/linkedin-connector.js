

function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}

function connect(url){
    
    window.location.href = url;
    
}


async function startConnecting(connectionsArray) {
    total = connectionsArray.length
    console.log(total);
    for(i = 0; i < connectionsArray.length; i++){
        connection = connectionsArray[i];
        if(connection.length === 0){
            console.log("error: empty row in csv");
            continue;
        }
        url = connection[0];
        var elem = document.createElement('a');
        elem.setAttribute("type", "hidden");
        elem.click();
        sendProgressPercentage(Math.round((i / total) * 100));
    }
}


