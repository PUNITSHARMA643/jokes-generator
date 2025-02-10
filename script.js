const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

async function getJokes() {
    const response = await fetch('jokes.json');
    const data = await response.json();
    return data;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getJoke() {
    console.log("Button clicked! Fetching joke...");
    try {
        const jokes = await getJokes();
        console.log("Fetched jokes:", jokes); // Log the fetched jokes
        const randomJoke = jokes[getRandomInt(jokes.length)];
        console.log("Random joke:", randomJoke); // Log the selected joke
        jokeEl.innerText = randomJoke.joke; // Update joke element
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeEl.innerText = "Failed to fetch a joke. Please try again.";
    }
}

btnEl.addEventListener("click", getJoke);