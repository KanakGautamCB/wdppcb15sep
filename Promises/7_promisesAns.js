function getWeatherData() {
    console.log("Start to get Data")
    let data = {
        city: "Delhi",
        temperature: 25,
        condition: "Sunny",
        forecast: [23, 24, 26, 25, 24],
        aqi: 50
    };
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data Fetched")
            resolve(data)
        },2000)
    })
    
}

function storeInDB(data) {
    console.log("Storing in db starts")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data Stored")
            resolve(data)
        },2000)
    })
    
}

function generateReport(data) {
    console.log("Report Generation starts")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Report Generated")
            const report = `Weather Report for ${data.city}:
            Temperature: ${data.temperature}°C
            Condition: ${data.condition}
            5-Day Forecast: ${data.forecast.join(', ')}°C
            Air Quality Index: ${data.aqi}`;
            resolve(report)
        },2000)
    })
    
}

getWeatherData()
.then(storeInDB)
.then(generateReport)
.then((report)=>{
    console.log(report)
}).catch(err=>{
    console.log(err)
})