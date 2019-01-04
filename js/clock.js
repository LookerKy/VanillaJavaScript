const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

const getTime = () =>{
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${second < 10 ? `0${second}`: second}`;
}

const clockInit = () =>{
    getTime();
    setInterval(getTime, 900);
};

clockInit();

