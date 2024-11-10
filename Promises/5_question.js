function getWeatherData(cb) {
    // returns const data = {
    //     city: city,
    //     temperature: 25,
    //     condition: "Sunny",
    //     forecast: [23, 24, 26, 25, 24],
    //     aqi: 50
    // }; after 2 second
}

function storeInDB() {
    // takes 2 seconds to store in db and then goes to generate report
}

function generateReport() {
    // returns const report = `Weather Report for ${data.city}:
    // Temperature: ${data.temperature}°C
    // Condition: ${data.condition}
    // 5-Day Forecast: ${data.forecast.join(', ')}°C
    // Air Quality Index: ${data.aqi}`;
    // After 2 second
}

getWeatherData();