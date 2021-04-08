const quotes = [

{quote:"When a needle falls into a deep well\, many people will look into the well\, but few will be ready to go down after it.", 
author: "-African Proverb"},
{quote:"To try and to fail is not laziness.", author:"-African Proverb"},
{quote:"All business is personal\.\.\. Make your friends before you need them.", author:"-Robert L. Johnson"},
{quote:"I always make sure I hire people smarter than me.", author:"-Aliko Dangote"},
{quote:"The battles that count aren\'t the ones for gold medals. The struggles within yourself\—the invisible, inevitable battles inside all of us\—that\'s where it\'s at", author:"-Jesse Owens"},
{quote:"I had to make my own living and my own opportunity. But I made it\! Don\’t sit down and wait for the opportunities to come. Get up and make them.", author:"-Madam C.J. Walker"},


]

const quoteButton = document.getElementById("button-quote");
const quote = document.querySelector(".quote-body .quote");
const author = document.querySelector(".quote-body .author");

quoteButton.addEventListener("click", ()=>{
	let ranNum = Math.floor(Math.random()*quotes.length);
	quote.innerHTML = quotes[ranNum].quote;
	author.innerHTML = quotes[ranNum].author;
})