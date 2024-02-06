const btnGenQuote = document.getElementById('buttonGenQuote');
const labelOutput = document.getElementById('labelOutput');
const apiUrl = "https://api.quotable.io/random";

async function getQuote(url){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  labelOutput.innerHTML=data.content;
}

btnGenQuote.addEventListener('click',()=>{getQuote(apiUrl);});
