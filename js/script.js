
var quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969,
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013",
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
	},
];

function getRandomQuote(array) {
  var quoteIndex = Math.floor( Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
  var randomQuote = array[quoteIndex];
}
return randomQuote;
}



function printQuote() {
  var message = "";  
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}

printQuote(); 





document.getElementById('loadQuote').addEventListener("click", printQuote, false);
