const cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori", "Zugdidi", "Poti", "Khashuri", "Samtredia", "Senaki"];
const cityH = document.getElementById("Selected_City");

const tempH = document.getElementById("temperature");
const humH = document.getElementById("humidity");
const presH = document.getElementById("pressure");
const windH = document.getElementById("wind");
const img = document.getElementById("main_img");

//for main
let Data = [];
let slides = [];
let slidesOnPage = [];
let citiesWithoutMain = [];

let currentPage = 0;
let selected = 0;
const maxslidesInOnePage = 3;

let maxPage;