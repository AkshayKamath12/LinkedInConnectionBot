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


async function startConnecting(connectionsArray) {
    const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));    
    
    total = connectionsArray.length
    console.log(total);
    for(i = 0; i < total; i++){       
        connection = connectionsArray[i];
        console.log(connection);
        if(connection.length === 0){
            continue;
        }
        let valid = await check(connection[0]);
        if(valid === false){
            console.log("error: invalid url");
        }
        
        openWindow = window.open(connection[0], 'test' + i);
        await sleep(5000);
        let buttons = openWindow.document.querySelectorAll('.artdeco-button--primary');
        if(buttons !== null){
           let btn = buttons[1];
           console.log("found button");
           await btn.click();
           await sleep(5000);
           let connectWithPerson = openWindow.document.querySelector('[aria-label="Send without a note"]');
           if(connectWithPerson === null){
               openWindow.close();
               continue;
           }
           if(connection.length === 1 || connection[1].length === 0){
               await connectWithPerson.click();
               await sleep(3000);
           }else{
               let message = connection[1];
               let sendNote = openWindow.document.querySelector('[aria-label="Add a note"]');
               if(sendNote !== null){
                  await sendNote.click();
                  await sleep(5000);
                  let textBox = openWindow.document.querySelector('.connect-button-send-invite__custom-message');
                  if(textBox !== null){
                       textBox.value = message;
                       textBox.focus();
                       
                       var e = new KeyboardEvent('keydown'); 
                       e.which = e.keyCode = 32; // 32 is the keycode for the space bar 
                       textBox.dispatchEvent(e);
                       
                       await sleep(5000);
                       let connectWithMessage = openWindow.document.querySelector('[aria-label="Send invitation"]');
                       
                       await connectWithMessage.click();
                  }else{
                       console.log("error: text box did not appear after clicking connect");
                  }
               }
           }
        }else{
           console.log("error: URL is not a valid LinkedIn profile");
        }
        openWindow.close();
        
    }
    
}


