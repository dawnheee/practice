const quotes = [
    {
        quotes: "나는 짱이다",
        author: "나",
    },
    {
        quotes: "나는 진짜 짱이다",
        author: "나",
    },
    {
        quotes: "나는 멋지다",
        author: "나",
    },
    {
        quotes: "나는 최고다",
        author: "나",
    },
    {
        quotes: "나는 혼자서도 잘할 수 있다",
        author: "나",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;

