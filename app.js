const printJokes = document.getElementById("jokePrint");
let jokes = {};
async function callAPI(){
    const jokeData =  await fetch ('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokes = jokeObj
    
    console.log(jokeObj); // Exercise 1.
    printJokes.innerHTML = jokeObj.joke; // Exercise 2.
    return jokeObj;
}
callAPI();

const reportJokes = [];
let score = 0;
function vote(value){
    const currentDate = new Date();
    let dateISO = currentDate.toISOString();
    reportJokes.push({joke: jokes.joke, date: dateISO, score: value});
    console.log(reportJokes);
    return score;
}



async function getWeather(){
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=d8ec460060f73b8a21776452facfeeec&lang=ca&units=metric');
    let resWeatherData = await weatherData.json();
}