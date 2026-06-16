
let apiQuotes = [];







//This is if you want to get from API
//Show new Quote
function newQuote (){
 const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

 console.log(quote)

} 
/
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

getQuotes();
