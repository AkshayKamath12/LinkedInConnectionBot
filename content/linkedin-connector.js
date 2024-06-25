function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}
function connect(url){
    
    window.location.href = url;
    
}

function connect(url){
    window.location.href = url;   
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
        var elem = document.createElement('a');
        elem.href = url;
        elem.setAttribute("type", "hidden");
        await new Promise((resolve) => setTimeout(resolve, 750));
        if(isValidUrl(url)){
            await elem.click();
        }
        sendProgressPercentage(Math.round((i+1) / total) * 100);
    }
}


function isValidUrl(url){
    try { 
      	return Boolean(new URL(urlString)); 
      }
      catch(e){ 
      	return false; 
      }
}
