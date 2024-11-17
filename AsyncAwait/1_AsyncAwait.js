let API_key = 'ba6e36018320238e19a37bcff3a49adb'

let geoCodingUrl = (city_name, API_key)=> `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`

let weatherAPI = (lat,lon,API_key)=>`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`


function getLatAndLon(api){

    return new Promise(async (resolve, reject)=>{

        try {
            let response = await fetch(api)
            let data =  await response.json()
            resolve({
                "lat":data[0].lat,
                "lon":data[0].lon
            })

        } catch (error) {
            reject(error)
        }        
        
    })

}

function getWeatherData(data){
    let lat = data.lat
    let lon= data.lon
    return new Promise(async (resolve,reject)=>{

        try {

            let response = await fetch(weatherAPI(lat,lon,API_key))
            let data = await response.json()
            resolve(data)
            
        } catch (error) {

            reject(error)
        }

        
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