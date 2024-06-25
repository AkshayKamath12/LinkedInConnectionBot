

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
        await new Promise((resolve) => setTimeout(resolve, 500));
        connect(connection[i]);
        await new Promise((resolve) => setTimeout(resolve, 500));
        sendProgressPercentage(Math.round((i / total) * 100));
    }
}


