
/* Displaying a background image and its author on the dashboard */

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => {
    if(!res.ok) {
        throw Error("Something went wrong")
    }
    else {
        return res.json()
    }
})
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('author').textContent = `Image by: ${data.user.name}`
})
.catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
	document.getElementById("author").textContent = `By: Dodi Achmad`
})

/* Displaying the dogeCoin data on the dashboard */

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
.then(res => {
    if(!res.ok) {
        throw Error("Could not get response from CoinGecko API")
    }
    else {
        return res.json()
    }
})
.then(data => {
    document.getElementById('crypto-top').innerHTML = `<img src="${data.image.small}" class="crypto-img" alt=""/><h1>${data.name}</h1>`
    document.getElementById('crypto').innerHTML += `<p>Current Price : ${data.market_data.current_price.usd} USD</p>
    <p>24H Market High : ${data.market_data.high_24h.usd} USD</p><p>24H Market Low: ${data.market_data.low_24h.usd} USD</p>`
    })
.catch(err => console.error(err))

/* Displaying the time on the dashboard */

function getCurrentTime() {
    const date = new Date();
    document.querySelector('.time').textContent = date.toLocaleString('en-us', {timeStyle: "medium"})
}

getCurrentTime()
setInterval(getCurrentTime ,1000)

/* Getting the weather information based on location */

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
        if(!res.ok) {
            throw Error("Error : ", res.status)
        }
        else {
            return res.json()
        }
    })
    .then(data => {
        let temp = data.main.temp;
        let newTemp = Math.round(temp);
        document.getElementById('weather').innerHTML = `
        <div class="weather-detail">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="weather-img" />
            <p>${newTemp}°F</p>
        </div>
        <p class="city-name">${data.name}</p>
       `
    })
    .catch(err => console.error(err))
})

 