// let p = Promise.reject("error")

// p
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })



function getLatAndLon(){

    let API_key = 'ba6e36018320238e19a37bcff3a49adb'
    let city_name ="Delhi"

    let geoCodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch(geoCodingUrl)
            .then(data=>data.json())
            .then(data=>{
                resolve({
                    "lat":data[0].lat,
                    "lon":data[0].lon
                })
            })
            .catch(err=>{
                reject(err)
            })
        },3000)
        
    })

}

function getFacts(){
    let url = `https://dog.ceo/api/breeds/image/random`

    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(data=>data.json())
        .then(data=>{
            resolve(data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}
// Promise.allSettled([getLatAndLon(), getFacts()])
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.error(err);
// })

Promise.race([getLatAndLon(), getFacts()])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err);
}).finally(()=>{
    console.log("finally Settled")
})


