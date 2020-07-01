let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori", "Zugdidi", "Poti", "Khashuri", "Samtredia", "Senaki"];
let cityH = document.getElementById("Selected_City");
let selector = document.getElementById("Selector");

//selector list updater!
selectorUpdate();

function selectorUpdate()
{
    for (let i = 0; i < cities.length; i++) 
    {
        let opt = document.createElement("option");
        opt.text = cities[i];
        selector.add(opt);
    }

    cityH.innerHTML = 'თბილისი'
}

//selected item

function selectorChanged()
{
    update();
    switch(selector.value)
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

    // if (selector.value == 'Tbilisi') 
    // {
        
    // }
    // else if(selector.value == 'Batumi')
    // {

    // }
    // else if(selector.value == 'Kutaisi')
    // {

    // }
    // else if(selector.value == 'Rustavi')
    // {

    // }
    // else if(selector.value == 'Gori')
    // {

    // }
    // else if(selector.value == 'Zugdidi')
    // {

    // }
    // else if(selector.value == 'Poti')
    // {

    // }
    // else if(selector.value == 'Khashuri')
    // {

    // }
    // else if(selector.value == 'Samtredia')
    // {

    // }
    // else if(selector.value == 'Senaki')
    // {

    // }
}