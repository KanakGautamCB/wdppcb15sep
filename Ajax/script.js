// set up of the request
let xhr = new XMLHttpRequest()

const url = 'https://potterapi-fedeperin.vercel.app' ;

// onload stores a function that would execute when the request is successfully finished
xhr.onload = function(data){
    console.log("data",JSON.parse(data.target.response))
}


//onerror stores a function that would execute when an error is received
xhr.onerror = function(err){
    console.log(err)
}

xhr.open("GET",url)

xhr.send()





