// DOM 
// All the elements needs to be wrapper in a jquery wrapper
// using '$' or 'jQuery'
// 1. Elements selection

const heading = $('.heading')
const h1 = $('<h1></h1>')



// 2. CRUD on Text
// heading.text()->Value dega, GETTER
// heading.text("NEW CONTENT")->Value UPDATE KR DEGA, SETTER

console.log(heading.text()) 
heading.text("Coding blocks")


// 3. Creating Elements
// ading element throught tag and adding css to that element

const li = $('<li></li>').text("endgame") 
const movieList = $('.movie-list').append(li)


// 4. Events

movieList.click((event)=>{
    console.log(event.target)
})
