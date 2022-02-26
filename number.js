// Part 1
// 1.
let favoriteNumber = 8;
let URL = "http://numbersapi.com";

$.getJSON(`${URL}/${favoriteNumber}?json`)
.then(res => {console.log(res);});

// 2.
let favoriteNumbers = [2, 4, 5, 11];
$.getJSON(`${URL}/${favoriteNumbers}?json`)
.then(res => {console.log(res);});

// 3.
Promise.all(Array.from({length:4}, () => {return $.getJSON(`${URL}/${favoriteNumber}?json`);}))
.then(facts => {facts.forEach(fact => {
  $("body").append(`<h1>${fact.text}</h1>`)});
})
