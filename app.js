const printJokes = document.getElementById("jokePrint");

async function callAPI(){
    const jokeData =  await fetch ('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();

    
    console.log(jokeObj); // Exercise 1.
    printJokes.innerHTML = jokeObj.joke; // Exercise 2.
}
callAPI();

const reportJokes = [];
let score = 0;
let joke = callAPI()
function vote(value){
    const currentDate = new Date();
    let dateISO = currentDate.toISOString();
    if (value === 1){
        score = 1
    }
    if (value === 2){
        score = 2
    }
    if (value === 3){
        score = 3
    }
    reportJokes.push({joke: joke.joke, date: dateISO, score: score.score})
    console.log(reportJokes);
    return score;
}



async function getWeather(){
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=d8ec460060f73b8a21776452facfeeec&lang=ca&units=metric');
    let resWeatherData = await weatherData.json();
}