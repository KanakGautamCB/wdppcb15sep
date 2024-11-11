function getWeatherData() {
    console.log("Fetching Data")
    const data = {
        city: "Delhi",
        temperature: 25,
        condition: "Sunny",
        forecast: [23, 24, 26, 25, 24],
        aqi: 50
    }; 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
                resolve(data)
            }else{
                reject("Data not fetched")
            }
        },2000)
    })
}

function storeInDB(data) {
    console.log("Storing in db");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dataStored=true
            if(dataStored){
                resolve(data)
            }else{
                reject("Data not stored")
            }
        },2000)
    })
}

function generateReport(data) {
    console.log("Generating report");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const report = `Weather Report for ${data.city}:
            Temperature: ${data.temperature}°C
            Condition: ${data.condition}
            5-Day Forecast: ${data.forecast.join(', ')}°C
            Air Quality Index: ${data.aqi}`;
            let dataStored=true
            if(report){
                resolve(report)
            }else{
                reject("Report not generated")
            }
        },2000)
    })

}

getWeatherData()
.then(storeInDB)
.then(generateReport)
.then((report)=>{
    console.log(report);
})
.catch((errMsg)=>{
    throw Error(errMsg);
})
