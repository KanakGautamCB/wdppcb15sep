let element = document.querySelector('.movie-list')
//console.log(element)

let children = element.children;
console.log(children)

for(let i=0;i<children.length;i++){
    console.log(children[i])
}

let listItem1 = document.querySelector('.movie-item1')

element.remove()