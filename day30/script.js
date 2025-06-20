const quotes = [
     {
          text: "Life is what happens when you're busy making other plans.",
          author: "John Lennon",
     },
     { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
     { text: "Get busy living or get busy dying.", author: "Stephen King" },
     {
          text: "You only live once, but if you do it right, once is enough.",
          author: "Mae West",
     },
     {
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
     },
     {
          text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston Churchill",
     },
     {
          text: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
     },
     {
          text: "Don't watch the clock; do what it does. Keep going.",
          author: "Sam Levenson",
     },
     {
          text: "Your time is limited, don’t waste it living someone else’s life.",
          author: "Steve Jobs",
     },
     {
          text: "Opportunities don't happen. You create them.",
          author: "Chris Grosser",
     },
     {
          text: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius",
     },
     {
          text: "I am not a product of my circumstances. I am a product of my decisions.",
          author: "Stephen R. Covey",
     },
     {
          text: "Everything you’ve ever wanted is on the other side of fear.",
          author: "George Addair",
     },
];

const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const button = document.querySelector("#next-quote");

function showRandomQuote() {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const quote = quotes[randomIndex];
     quoteEl.innerText = `"${quote.text}"`;
     authorEl.innerText = `— ${quote.author}`;
}

button.addEventListener("click", showRandomQuote);
