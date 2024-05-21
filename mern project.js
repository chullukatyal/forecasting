// script.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';
    const city = 'London';
    const country = 'uk';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.location').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.temperature').textContent = `${data.main.temp}°C`;
            document.querySelector('.description').textContent = data.weather[0].description;
            document.querySelector('.weather-details .detail:nth-child(1) span:last-child').textContent = `${data.main.humidity}%`;
            document.querySelector('.weather-details .detail:nth-child(2) span:last-child').textContent = `${data.wind.speed} km/h`;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
