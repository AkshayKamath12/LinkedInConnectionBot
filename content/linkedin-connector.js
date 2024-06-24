

function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}


async function startConnecting(connectionsArray) {
  console.log(connectionsArray.length);

}


