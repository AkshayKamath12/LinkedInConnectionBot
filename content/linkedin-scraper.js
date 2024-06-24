

function sendProgressPercentage(progressPercentage) {
  chrome.runtime.sendMessage({
    action: "progressPercentage",
    message: progressPercentage,
  });
}


async function startConnecting(connectionsArray) {
  const page = document.querySelector("a[href='/mynetwork/invite-connect/connections/'");
  const connectionsBtn = page.click();
  await new Promise((resolve) => setTimeout(resolve, 3000));


  const cards = document.querySelectorAll(".mn-connection-card__picture");
  const cardCount = cards.length;
  console.log(cardCount);
  const names = document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold");
  const descriptions = document.getElementsByClassName("mn-connection-card__occupation t-14 t-black--light t-normal");
  for (let cardIndex = 0; cardIndex < cardCount; cardIndex++) {
      const personName = names[cardIndex].innerText;
      const descr = descriptions[cardIndex].innerText;
      console.log(personName);
      console.log(descr);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      sendPerson({personName, descr});
      const cardProgressPercentage = Math.round(((cardIndex + 1) / cardCount) * 100);
      sendProgressPercentage(cardProgressPercentage);
  }


