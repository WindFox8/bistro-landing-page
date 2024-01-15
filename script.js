function dateElement() {
  const nowInfo = document.querySelector(".nowInfo");
  const openInfo = document.querySelector(".openInfo");
  const dateInfo = document.querySelector(".dateInfo");
  const date = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayWeek = daysOfWeek[date.getDay()];

  let dayOfMonth = date.getDate();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = months[date.getMonth()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let dateContent = `<p>${dayWeek}, ${dayOfMonth} ${month} - ${hours}:${minutes}</p>`;

  dateInfo.innerHTML = dateContent;

  if (dayWeek !== "Monday" && hours >= 18){
    let nowInfoContent = '<p>Opened Now</p>';
    let openInfoContent = '<p>Closes at 00:00</p>';

    nowInfo.innerHTML = nowInfoContent;  
    openInfo.innerHTML = openInfoContent;
    
  } else {

    if (dayWeek === "Monday"){

      let nowInfoContent = '<p>Closed Now</p>';
      let openInfoContent = '<p>Opens tomorrow at 18:00</p>';

      nowInfo.innerHTML = nowInfoContent;  
      openInfo.innerHTML = openInfoContent;
    }

    else{
      let nowInfoContent = '<p>Closed Now</p>';
      let openInfoContent = '<p>Opens today at 18:00</p>';

      nowInfo.innerHTML = nowInfoContent;  
      openInfo.innerHTML = openInfoContent;
    }
  }
}

dateElement();
setInterval(dateElement, 1000);

function showMenuCard(element) {
  const menuCards = document.querySelectorAll(".menuCard > div");

  for (const menuCard of menuCards) {
      menuCard.classList.remove("show");
      menuCard.classList.add("hide");
  }

  const currentCard = document.querySelector('.' + element);

  currentCard.classList.remove("hide");
  currentCard.classList.add("show");
}
