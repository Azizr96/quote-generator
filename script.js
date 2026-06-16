const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authortext = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

/*
//generate quote locally

function newQuote (){
 const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

 console.log(quote)

} 

newQuote()
*/

//This is if you want to get from API
//Show new Quote
function newQuote (){
 const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

 // check if author field is blank and replac with unknown

 if(!quote.author){
    authortext.textContent = 'Unknown';
 } else {
  authortext.textContent = quote.author;
 };
 // check quote length to determine styligng

 if ( quote.text.length > 50){
  quoteText.classList.add('long-quote')
 } else {
  quoteText.classList.remove('long-quote')
 }

 quoteText.textContent = quote.text;

} ;

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const response = await fetch(apiUrl);

    apiQuotes = await response.json();
    newQuote();

  } catch(error){
    // Catch Error here

  };
};

//load on page open
getQuotes();

// tweet quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authortext.textContent}`;
  window.open(twitterUrl, '_blank');
};

//Event Listerns

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)