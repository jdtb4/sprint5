const printJokes = document.getElementById("jokePrint");
let jokes = {};
async function getDadJokes(){
    const jokeData =  await fetch ('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokes = jokeObj

    console.log("Exercise 1: " + jokeObj.joke); // Exercise 1.
    printJokes.innerHTML = jokeObj.joke; // Exercise 2.
    return jokeObj;
}
getDadJokes(); 

const reportJokes = []; // Exercise 3.
let score = 0;
function vote(value){
    const currentDate = new Date();
    let dateISO = currentDate.toISOString();
    reportJokes.push({joke: jokes.joke, date: dateISO, score: value});

    console.log(reportJokes);
    return score;
}

const printWeather = document.getElementById("temperature"); // Exercise 4.
const printConditions = document.getElementById("conditions")
async function getWeather(){
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=d8ec460060f73b8a21776452facfeeec&lang=es&units=metric');
    const resWeatherData = await weatherData.json();
    
    let icons = "http://openweathermap.org/img/wn/" + resWeatherData.weather[0].icon + "@2x.png";
    let temperature = Math.round(resWeatherData.main.temp);
    printConditions.innerHTML= `<img src="${icons}">`;
    printWeather.innerHTML = `${temperature} ºC`;

    console.log("Current Temperatures: " + resWeatherData.main.temp);
}
getWeather();

const getChuckJokes = async() =>{ // Exercise 5.
    try{
        const chuckData = await fetch('https://api.chucknorris.io/jokes/random');
        const chuckObj= await chuckData.json();

        console.log("Chuck Norris joke: " + chuckObj.value);
        printJokes.innerHTML = chuckObj.value;
    }catch(error){
        console.log(error);
    }
    
}
getChuckJokes();

function randomFunction(){
    let apisJokes = [getDadJokes, getChuckJokes];
    let randomJokes= Math.floor(Math.random() * apisJokes.length);
    apisJokes[randomJokes]();
}
