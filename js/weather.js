const weather = document.querySelector(".js-weather");

const API_KEY = "4d0373dffbd3a6fc596c176468e53377";
const COORDS = "coords";

const getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((response)=>{
        return response.json();
    })
    .then((json) => {
        const temperature = json.main.temp;
        const national = json.sys.country;
        weather.innerText = `${temperature} 도 @ ${national}`;
    });
};

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSucess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const handleGeoError = (position) => {
    console.log("fail to get geo location");
};

const askForCoords = () =>{
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError );
};

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }  
};

const weatherInit = () => {
    loadCoords();
};

weatherInit();