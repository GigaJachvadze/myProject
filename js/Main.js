function main()
{
    //get DATA!
    (async() =>
    {
        for (let i = 0; i < cities.length; i++)
        {
            let d = await GET_DATA(cities[i]);

            Data.push(d);
        }

        pageCalc();
        slidesUpdate();
        drawMain();
        drawSlides();
    })();
}

function pageCalc()
{
    //calculating how many pages there should be
    if ((cities.length - 1) % maxslidesInOnePage != 0)
    {
        let a = (cities.length - 1) % maxslidesInOnePage;
        maxPage = ((cities.length - 1 - a) / maxslidesInOnePage) + 1;
    }
    else
    {
        maxPage = (cities.length - 1) / maxslidesInOnePage;
    }
}

function slidesUpdate()
{
   //populate slides
   for (let i = 0; i < cities.length; i++)
    {
        let d = Data[i];

        let currentTemperature = d.main.feels_like;
        let currentHumidity = d.main.humidity;
        let currentPressure = d.main.pressure;
        let currentWindspeed = d.wind.speed;

        let img_Id = d.weather[0].icon;

        let x = document.createElement("div");

        let imgd = img.cloneNode(img);
        let name = cityH.cloneNode(cityH);
        let temp = tempH.cloneNode(tempH);

        temp.removeAttribute("class");
        temp.classList.add("text")

        name.classList.remove("text_main");
        name.classList.add("text");

        x.appendChild(name);
        x.appendChild(imgd);
        x.appendChild(temp);

        carousel_main.appendChild(x);

        x.classList.add("carousel_item");

        imgd.src = "http://openweathermap.org/img/wn/"+ img_Id +"@2x.png";
        temp.innerHTML = "ტემპერატურა: " + Math.round(currentTemperature) + "°";

        x.style.display = "none";

        switch(cities[i])
        {
            case 'Tbilisi': name.innerHTML = "თბილისი";
            break;
            case 'Batumi': name.innerHTML = "ბათუმი";
            break;
            case 'Kutaisi': name.innerHTML = "ქუთაისი";
            break;
            case 'Rustavi': name.innerHTML = "რუსთავი";
            break;
            case 'Gori': name.innerHTML = "გორი";
            break;
            case 'Zugdidi': name.innerHTML = "ზუგდიდი";
            break;
            case 'Poti': name.innerHTML = "ფოთი";
            break;
            case 'Khashuri': name.innerHTML = "ხაშური";
            break;
            case 'Samtredia': name.innerHTML = "სამტრედია";
            break;
            case 'Senaki': name.innerHTML = "სენაკი";
            break;
        }

        let s =
        {
            div: x,
            name: name,
            img: imgd,
            temp: temp
        };

        slides.push(s);
    }

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].div.addEventListener("click", function(){selectMain(i)});
    }

}

function drawMain()
{
    //draw selected div
    let d = Data[selected];

    let currentTemperature = d.main.feels_like;
    let currentHumidity = d.main.humidity;
    let currentPressure = d.main.pressure;
    let currentWindspeed = d.wind.speed;

    let img_Id = d.weather[0].icon;

    tempH.innerHTML = "ტემპერატურა: " + Math.round(currentTemperature) + "°";
    humH.innerHTML = "ტენიანობა: " + currentHumidity + "%";
    presH.innerHTML = "წნევა: " + currentPressure + "hPa";
    windH.innerHTML = "ქარის სიჩქარე: " + currentWindspeed + "m/s";

    img.src = "http://openweathermap.org/img/wn/"+ img_Id +"@2x.png";

    switch(cities[selected])
    {
        case 'Tbilisi': cityH.innerHTML = "თბილისი";
        break;
        case 'Batumi': cityH.innerHTML = "ბათუმი";
        break;
        case 'Kutaisi': cityH.innerHTML = "ქუთაისი";
        break;
        case 'Rustavi': cityH.innerHTML = "რუსთავი";
        break;
        case 'Gori': cityH.innerHTML = "გორი";
        break;
        case 'Zugdidi': cityH.innerHTML = "ზუგდიდი";
        break;
        case 'Poti': cityH.innerHTML = "ფოთი";
        break;
        case 'Khashuri': cityH.innerHTML = "ხაშური";
        break;
        case 'Samtredia': cityH.innerHTML = "სამტრედია";
        break;
        case 'Senaki': cityH.innerHTML = "სენაკი";
        break;
    }

}

function drawSlides()
{
    slidesOnPage = [];
    citiesWithoutMain = [];

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].div.style.display = "none";
    }

    for (let i = 0; i < slides.length; i++)
    {
        if(i != selected)
        {
            citiesWithoutMain.push(slides[i]);
        }
    }

    for (let i = 0 + currentPage * maxslidesInOnePage; i < maxslidesInOnePage + currentPage * maxslidesInOnePage; i++)
    {
        slidesOnPage.push(citiesWithoutMain[i]);
    }

    for (let i = 0; i < slidesOnPage.length; i++)
    {
        slidesOnPage[i].div.style.display = "block";
    }
}

function pageChange(pageIndex)
{
    currentPage += pageIndex;

    if (currentPage >= maxPage)
    {
        currentPage = 0;
    }
    else if (currentPage < 0)
    {
        currentPage = maxPage - 1;
    }

    drawSlides();
}

function selectMain(divIndex)
{
    selected = divIndex;

    drawMain();
    drawSlides();
}