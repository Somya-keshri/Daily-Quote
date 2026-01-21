const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://quoteslate.vercel.app/api/quotes/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getquote(api_url);

function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  -- by " + author.innerHTML, "Tweet Window", "width=700,height=450");
}