// let heading = document.getElementById('heading')
// console.log(heading)


// let items = document.getElementsByClassName('movie-item')
// console.log(items)

// let para = document.getElementsByTagName('p')
// console.log(para)

let heading=document.querySelector('h1')

heading.classList.add('heading')


setTimeout(()=>{
    heading.classList.remove('heading')
},5000)


console.log(heading)
