

function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}


async function startConnecting(connectionsArray) {
  for(i = 0; i < connectionsArray.length; i++){
    console.log(connectionsArray[i]);
  }

}


