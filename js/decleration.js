let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori", "Zugdidi", "Poti", "Khashuri", "Samtredia", "Senaki"];
let cityH = document.getElementById("Selected_City");

let tempH = document.getElementById("temperature");
let humH = document.getElementById("humidity");
let presH = document.getElementById("pressure");
let windH = document.getElementById("wind");
let img = document.getElementById("main_img");

//slideShow
let pages;

let divsOnOnePage = 3;
let mainSelected = 0;
let currentPage = 0;

let slides = [];
let slidesShown = [];
let slideShownIndex = [];
let citiesWithoutMain = [];