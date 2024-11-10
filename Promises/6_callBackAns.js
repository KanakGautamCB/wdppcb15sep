function getWeatherData(cb) {
    console.log("Start to get Data")
    let data = {
        city: "Delhi",
        temperature: 25,
        condition: "Sunny",
        forecast: [23, 24, 26, 25, 24],
        aqi: 50
    };
    setTimeout(()=>{
        console.log("Data Fetched")
        cb(data)
    },2000)
}

function storeInDB(data,cb) {
    console.log("Storing in db starts")
    setTimeout(()=>{
        console.log("Data Stored")
        cb(data)
    },2000)
}

function generateReport(data,cb) {
    console.log("Report Generation starts")
    setTimeout(()=>{
        console.log("Report Generated")
        const report = `Weather Report for ${data.city}:
        Temperature: ${data.temperature}°C
        Condition: ${data.condition}
        5-Day Forecast: ${data.forecast.join(', ')}°C
        Air Quality Index: ${data.aqi}`;
        cb(report)
    },2000)
}

getWeatherData((data)=>{
    storeInDB(data,(data)=>{
        generateReport(data,(report)=>{
            console.log(report)
        })
    })
});