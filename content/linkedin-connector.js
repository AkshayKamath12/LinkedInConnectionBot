function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}
async function check(url){
    try {
        new URL(string);
        return true;
    }catch (err) {
        return false;
    }   
}

async function startConnecting(connectionsArray) {
    total = connectionsArray.length
    console.log(total);
    for(i = 0; i < connectionsArray.length; i++){
        connection = connectionsArray[i];
        console.log(connection);
        if(connection.length === 0){
            console.log("error: empty row in csv");
            continue;
        }
        url = connection[0];
        let valid = await check(url);
        var elem = await document.createElement('a');
        elem.href = url;
        elem.setAttribute("type", "hidden");
        await new Promise((resolve) => setTimeout(resolve, 750));
        if(valid === true){
            await elem.click();
        }
        console.log(valid);
        sendProgressPercentage(Math.round((i+1) / total) * 100);
    }
}


