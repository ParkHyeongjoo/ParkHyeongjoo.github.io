const API_KEY = ""

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        console.log(data.weather[0].main)
        // 계속 추가!!
        if(data.weather[0].main === "Rain"){
            data.weather[0].main = "<img src='./icon/rainy.png'></img> / "
        }else if(data.weather[0].main === "mist"){
            data.weather[0].main = "<img src='./icon/mist.png'></img> / "
        }else if(data.weather[0].main === "scattered clouds"){
            data.weather[0].main = "<img src='./icon/cloudy.png'></img> / "
        }else if(data.weather[0].main === "few clouds"){
            data.weather[0].main = "<img src='./icon/sun-cloudy.png'></img> / "
        }else if(data.weather[0].main === "Clouds"){
            data.weather[0].main = "<img src='./icon/sun-cloudy.png'></img> / "
        }else if(data.weather[0].main === "Thunderstorm"){
            data.weather[0].main = "<img src='./icon/thunderstorms.png'></img> / "
        }else if(data.weather[0].main === "snow"){
            data.weather[0].main = "<img src='./icon/snowy.png'></img> / "
        }else if(data.weather[0].main === "fog"){
            data.weather[0].main = "<img src='./icon/foggy.png'></img> / "
        }else if(data.weather[0].main === "windy"){
            data.weather[0].main = "<img src='./icon/windy.png'></img> / "
        }else if(data.weather[0].main === "light thunderstorm"){
            data.weather[0].main = "<img src='./icon/flashlight.png'></img> / "
        }else{
            data.weather[0].main = "<img src='./icon/sun.png'></img> / "
        }
        weather.innerHTML = data.weather[0].main + data.main.temp + "<img src='./icon/celsius.png'></img>"
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
