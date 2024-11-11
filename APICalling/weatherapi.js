let API_key = 'ba6e36018320238e19a37bcff3a49adb'

let city_name="Delhi"

let geoCodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`


function getWeather(data){
    let lat = data.lat
    let lon= data.lon
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    fetch(weatherAPI)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
    })
}

fetch(geoCodingAPI)
.then(data=>data.json())
.then(data=>{
    console.log(data[0].lat, data[0].lon)
    return{
        "lat":data[0].lat,
        "lon":data[0].lon
    }
})
.then(getWeather)
.catch(err=>{
    console.error(err)
})

