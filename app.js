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