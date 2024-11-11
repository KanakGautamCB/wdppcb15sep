let API_key = 'ba6e36018320238e19a37bcff3a49adb'

let geoCodingUrl = (city_name, API_key)=> `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`

let weatherAPI = (lat,lon,API_key)=>`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`


function getLatAndLon(api){

    return new Promise((resolve, reject)=>{
        fetch(api)
        .then(data=>data.json())
        .then(data=>{
            console.log(data[0].lat, data[0].lon)
            resolve({
                "lat":data[0].lat,
                "lon":data[0].lon
            })
        })
        .catch(err=>{
            reject(err)
        })
    })

}

function getWeatherData(data){
    let lat = data.lat
    let lon= data.lon
    return new Promise((resolve,reject)=>{
        fetch(weatherAPI(lat,lon,API_key))
        .then(data=>data.json())
        .then(data=>{
            resolve(data)
        })
        .catch(err=>{
            reject(err)
        })
    })
    
}

getLatAndLon(geoCodingUrl("Delhi",API_key))
.then(getWeatherData)
.then((data)=>{
    console.log(data)
})
.catch(err=>{
    console.error(err)
})