var category = 'inspirational';
let url = 'https://api.api-ninjas.com/v1/quotes?category=';
let currentQuote = "";

let categorySelect = () =>{
    let rand = Math.floor(Math.random() * 4);
    if(rand == 0){
        category = 'fear';
    }
    else if(rand == 1){
        category = 'inspirational'
    }
    else if(rand == 2){
        category = 'freedom'
    }
    else{
        category = 'forgiveness'
    }
}

let fetchingQuote = async()=>{
    dispBar.innerHTML = '"Loading..."'
    authBar.innerHTML = '"Loading..."'
    categorySelect();
    console.log(category)
let response = await fetch(`${url}${category}`, {
    method: 'GET',
    headers: { 'X-Api-Key': 'xkm119ZPKVIytdmNUAPbBQ==Yy6KAD71vEZ0TKqh' },
})
    let data = await response.json();
    let quote = data[0].quote;
    let author = data[0].author
    display(quote, author);
}

let dispBar = document.getElementById("mainQuote");
let authBar = document.getElementById("author");

let display = (quote, author) =>{
    dispBar.innerHTML = `"${quote}"`;
    authBar.innerHTML = author;
    currentQuote = quote;
}

let newQuote = document.getElementById('newQuote');
newQuote.addEventListener('click', ()=>{
    fetchingQuote();
})

let link = "https://twitter.com/intent/tweet?text=";
let tweet = document.getElementById('tweet');
tweet.addEventListener('click', ()=>{
    window.open(link+currentQuote);
})

fetchingQuote();