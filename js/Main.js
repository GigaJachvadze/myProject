function update()
{
    //dataFetcher
    (async() =>
    {
        let data = await GET_Data(cities[mainSelected]);

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

        switch(cities[mainSelected])
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
    })()

    slidesUpdate();
}

function slidesUpdate()
{
    slides = [];

    //determining how many pages there should be
    if((cities.length - 1) % divsOnOnePage === 0)
    {
        pages = (cities.length - 1) / divsOnOnePage;
    }
    else
    {
        pages = ((cities.length - 1) - ((cities.length - 1) % divsOnOnePage)) / divsOnOnePage + ((cities.length - 1) % divsOnOnePage);
    }

    //generating divs
    let carousel_main = document.getElementById("carousel_main");

    for (let i = 0; i < cities.length; i++)
    {
        if(i != mainSelected)
        {
            let x = document.createElement("div");

            let imgd = img.cloneNode(img);
            let name = cityH.cloneNode(cityH);
            let temp = tempH.cloneNode(tempH);

            name.classList.remove("text_main");
            name.classList.add("text");

            x.appendChild(name);
            x.appendChild(imgd);
            x.appendChild(temp);

            carousel_main.appendChild(x);

            x.classList.add("carousel_item");

            //this did not work i do not know why!
            //x.addEventListener("click", selectMain(i));

            let s =
            {
                div: x,
                name: name,
                img: imgd,
                temp: temp
            };

            slides.push(s);
        }
        else
        {
            continue;
        }
    }

    //chosing main
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].div.addEventListener("click", function(){selectMain(i)});
    }

    //this did not work as well
    // for (let i = 0; i < slides.length; i++)
    // {
    //     slides[i].div.addEventListener("click", selectMain(i));
    // }

    //styling divs
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].div.style.display = "none";
        // slides[i].div.style.width = "calc(100% / 3)";
        slides[i].div.style.width = "25%";
        slides[i].div.style.height = "10%";
    }

    showSlides();
}

function draw(pageIndex)
{
    //page checks!
    if (pageIndex == String)
    {
        pageIndex = 0;
    }else
    if (pageIndex == null)
    {
        pageIndex = 0;
    }else
    if (pageIndex > 1)
    {
        pageIndex = 1;
    }else
    if (pageIndex < -1)
    {
        pageIndex = -1;
    }

    currentPage += pageIndex;

    if(currentPage >= pages)
    {
        currentPage = 0
    }
    else if(currentPage < 0)
    {
        currentPage = pages - 1;
    }

    let selectedIndex;

    //selected city check
    if(selectedIndex === null)
    {
        mainSelected = 0;
    }
    else if(selectedIndex != String)
    {
        mainSelected = selectedIndex;
    }

    //determining wich divs to show
    slidesShown = [];
    slideShownIndex = [];

    for (let i = 0 + currentPage * divsOnOnePage; i < divsOnOnePage + currentPage * divsOnOnePage; i++)
    {
        slidesShown.push(citiesWithoutMain[i]);
    }

    for (let i = 0; i < slidesShown.length; i++)
    {
        let index = citiesWithoutMain.findIndex(el => el === slidesShown[i]);

        slideShownIndex.push(index);
    }

    for (let i = 0; i < citiesWithoutMain.length; i++)
    {
        for (let z = 0; z < slideShownIndex.length; z++)
        {
            if (i != slideShownIndex[z])
            {
                slides[i].div.style.display = "none";
            }
            else
            {
                slides[i].div.style.display = "block";
                break;
            }
        }
    }

        //debug!!!
        // console.log(slideShownIndex);
        // console.log(currentPage);
        // console.log(pages);
        // console.log(slides);
        // console.log(citiesWithoutMain);
        // console.log(cities);
        // console.log(slidesShown);
}

function showSlides()
{
    citiesWithoutMain = [];

    //creating cities without chosen city
    for (let j = 0; j < cities.length; j++)
    {
        let a = cities[j];

        if (j != mainSelected)
        {
            citiesWithoutMain.push(a);
        }
    }

    //aplying data on 3 divs shwoing in slideshow
    (async() =>
    {
        for (let i = 0; i < citiesWithoutMain.length; i++)
        {
            let data = await GET_Data(citiesWithoutMain[i])

            let imgId = data.weather[0].icon;
            let temp = data.main.feels_like;
            //updating div styles
            slides[i].div.style.display = "none";
            //updating names
            switch(citiesWithoutMain[i])
            {
                case 'Tbilisi': slides[i].name.innerHTML = "თბილისი";
                break;
                case 'Batumi': slides[i].name.innerHTML = "ბათუმი";
                break;
                case 'Kutaisi': slides[i].name.innerHTML = "ქუთაისი";
                break;
                case 'Rustavi': slides[i].name.innerHTML = "რუსთავი";
                break;
                case 'Gori': slides[i].name.innerHTML = "გორი";
                break;
                case 'Zugdidi': slides[i].name.innerHTML = "ზუგდიდი";
                break;
                case 'Poti': slides[i].name.innerHTML = "ფოთი";
                break;
                case 'Khashuri': slides[i].name.innerHTML = "ხაშური";
                break;
                case 'Samtredia': slides[i].name.innerHTML = "სამტრედია";
                break;
                case 'Senaki': slides[i].name.innerHTML = "სენაკი";
                break;
            }
            //updating images
            slides[i].img.src = "http://openweathermap.org/img/wn/"+ imgId +"@2x.png";
            //updating temperature
            slides[i].temp.innerHTML = Math.round(temp) + "°";
        }

        draw(0);
    })()
}

function selectMain(index)
{
    mainSelected = index + 1;

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].div.style.display = "none";
    }

    update();
    showSlides();
}