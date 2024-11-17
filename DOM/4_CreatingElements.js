let list = document.querySelector('.movie-list');
console.log(list)
list.innerHTML+=`<li>Venom the last dance</li>`

let listItem = document.createElement('li')

listItem.innerText="Hulk";
listItem.classList.add('movie-item')

setTimeout(()=>{
    list.appendChild(listItem)
},2000)

