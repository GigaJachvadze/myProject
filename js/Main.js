let tempH = document.getElementById("temperature");
let humH = document.getElementById("humidity");
let presH = document.getElementById("pressure");
let windH = document.getElementById("wind");
let img = document.getElementById("main_img");

let data;

function update()
{
    //dataFetcher
    (async() =>
    {
        data = await GET_Data(selector.value);
        console.log(await data);

        let currentTemperature = data.main.feels_like;
        let currentHumidity = data.main.humidity;
        let currentPressure = data.main.pressure;
        let currentWindspeed = data.wind.speed;
    
        let img_Id = data.weather[0].icon;
    
        tempH.innerHTML = "ტემპერატურა: " + Math.round(currentTemperature) + "°";
        humH.innerHTML = "ტენიანობა: " + currentHumidity + "%";
        presH.innerHTML = "წნევა: " + currentPressure + "hPa";
        windH.innerHTML = "ქარის სიჩქარე: " + currentWindspeed + "m/s";
    
        img.src = "http://openweathermap.org/img/wn/"+ img_Id +"@2x.png";
    })()
}
