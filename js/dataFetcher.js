let apiKey = "e5a5658899eeb74364a64621ced3af51";
let unit = "units=metric";

let mainJson;

function GET_DATA(cityName)
{
    let Client = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&" + unit + "&appid=" + apiKey;

    return aFetch(Client)
}

async function aFetch(url)
{
    const data = await fetch(url);

    if (data.ok) 
    {
        return await data.json();
    }
    else
    {
        console.error("data did not return " + data.status);
    }
}
