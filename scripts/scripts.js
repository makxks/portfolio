
// Scripts for Portfolio page
function $(selector){ return document.querySelector(selector) };
function $all(selector){ return document.querySelectorAll(selector) };

let title = $("#header-title");
let body = $("body");
let container = $(".content");
let header = $("header");
let meButton = $("#me-button");
let techButton = $("#tech-button");
let projectsButton = $("#projects-button");
let otherButton = $("#other-button");
let meButtonLeft = $("#me-button-left");
let techButtonLeft = $("#tech-button-left");
let projectsButtonLeft = $("#projects-button-left");
let otherButtonLeft = $("#other-button-left");
let arrow = $(".arrow");
let nav = $(".nav-container");
let navLeft = $(".nav-left");
let fader = $(".nav-fader");
let themes = $(".header-option");
let themesDropdown = $(".header-option-dropdown");
let theme1Button = $("#theme-bw");
let theme2Button = $("#theme-1");
let theme3Button = $("#theme-2");
let theme4Button = $("#theme-3");
let theme5Button = $("#theme-4");
let theme6Button = $("#theme-5");
let ctCard = $("#card-classtracker");
let fpCard = $("#card-familyphoto");
let jsaCard = $("#card-jsapps");
let gamesCard = $("#card-games");
let ctDetails = $("#project-classtracker");
let fpDetails = $("#project-familyphoto");
let jsaDetails = $("#project-jsapps");
let gamesDetails = $("#project-games");

let projectCards = [ctCard, fpCard, jsaCard, gamesCard];

meButton.addEventListener("click", () => { scrollToElement("#content-me-marker", 400); });
techButton.addEventListener("click", () => { scrollToElement("#content-tech", 400, 50); });
projectsButton.addEventListener("click", () => { scrollToElement("#content-projects-marker", 400); });
otherButton.addEventListener("click", () => { scrollToElement("#content-other", 400, 50); });
meButtonLeft.addEventListener("click", () => { scrollToElement("#content-me-marker", 400); });
techButtonLeft.addEventListener("click", () => { scrollToElement("#content-tech", 400, 50); });
projectsButtonLeft.addEventListener("click", () => { scrollToElement("#content-projects-marker", 400); });
otherButtonLeft.addEventListener("click", () => { scrollToElement("#content-other", 400, 50); });
arrow.addEventListener("click", () => { scrollToElement("#arrow-target", 400, 60); });

themes.addEventListener("click", () => { toggleThemes(); })

ctCard.addEventListener("click", () => { toggleProjectDetails(ctCard, ctDetails, projectCards); });
fpCard.addEventListener("click", () => { toggleProjectDetails(fpCard, fpDetails, projectCards); });
jsaCard.addEventListener("click", () => { toggleProjectDetails(jsaCard, jsaDetails, projectCards); });
gamesCard.addEventListener("click", () => { toggleProjectDetails(gamesCard, gamesDetails, projectCards); });

navLeft.addEventListener("mouseover", () => {
  fader.style.top = "0";
  fader.style.opacity = "0.6";
  fader.style.zIndex = "6";
});
navLeft.addEventListener("mouseout", () => {
  fader.style.opacity = "0";
  fader.style.zIndex = "0";
});
fader.addEventListener("transitionend", (e) => {
  if(e.propertyName == "opacity" && fader.style.opacity == "0"){
    fader.style.top = "5000px";
  }
})
