// Mouse Events

// document.querySelector('body').addEventListener('click',(event)=>{
//     let target = event.target
//     target.style.color='green'
// })

// document.querySelector('body').addEventListener('dblclick',(event)=>{
//     let target = event.target
//     target.style.color='yellow'
// })

// document.querySelector('p').addEventListener('mouseover',(event)=>{
//     alert('You are on paragraph')
// })

// document.querySelector('h1').addEventListener('mouseout',(event)=>{
//     alert('Outside my heading')
// })

// document.querySelector('body').addEventListener('mousemove',(event)=>{
//     console.log(event.target)
// })

// document.querySelector('body').addEventListener('mouseup',(event)=>{
//     console.log('Mouse is going up')
// })

//Keyboard Events

// document.querySelector('body').addEventListener('keydown',(event)=>{
//     console.log(event)
// })

// document.querySelector('body').addEventListener('keyup',(event)=>{
//     console.log(event)
// })

// document.querySelector('body').addEventListener('keypress',(event)=>{
//     console.log(event)
// })

// Window events

let body = document.querySelector('body')

window.addEventListener('scroll', (event)=>{
    let xPosition = window.scrollX
    let yPosition = window.scrollY;

    if(yPosition>window.innerHeight){
        body.classList.toggle('dark')
    }
    
    
})