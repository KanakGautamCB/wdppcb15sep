let url = `https://dog.ceo/api/breeds/image/random`

fetch(url)
.then(data=>data.json())
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})