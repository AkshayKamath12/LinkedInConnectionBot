function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}
async function check(url){
    await new Promise((resolve) => setTimeout(resolve, 750));
    try {
        const checkUrl = new URL(url);
        return true;
    }catch (err) {
        return false;
    }   
}

async function access(url){
    
        
    console.log(valid);
}

async function startConnecting(connectionsArray) {
    const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));    
    
    total = connectionsArray.length
    console.log(total);
    for(i = 0; i < total; i++){
        
        connection = connectionsArray[i];
        console.log(connection);
        openWindow = window.open(connection[0], 'test' + i);
        await sleep(5000);
        let btn = document.querySelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.pvs-profile-actions__action");
        if(btn !== null){
           console.log("found button");
           await btn.click();
           await sleep(5000);
           //let connectWithPerson = document.querySelector('[aria-label="Send without a note"');
           //await connectWithPerson.click()
        }else{
           console.log("error");
        }
        openWindow.close();
        /*
        if(connection.length === 0){
            console.log("error: empty row in csv");
            continue;
        }
        let url = connection[0];
        location.href = url;
        //await access(url);
        await sleep(5000);
        await sendProgressPercentage(Math.round((i+1) / total) * 100);
        */
        
    }
    
}


