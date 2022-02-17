let themeOptionOn = false;

function toggleThemes(){
  if(!themeOptionOn){
    themesDropdown.classList.add("header-option-dropdown-on");
  } else {
    themesDropdown.classList.remove("header-option-dropdown-on");
  }
  themeOptionOn = !themeOptionOn;
}

function changeTheme(baseColor, mainColor, secondaryColor, accentColor, mainTextColor, secondaryTextColor, accentTextColor, defaultText){
  document.documentElement.style.setProperty("--base-color", baseColor);
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--secondary-color", secondaryColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);
  document.documentElement.style.setProperty("--main-text-color", mainTextColor);
  document.documentElement.style.setProperty("--secondary-text-color", secondaryTextColor);
  document.documentElement.style.setProperty("--accent-text-color", accentTextColor);
  document.documentElement.style.setProperty("--default-text", defaultText);

  toggleThemes();
}

theme1Button.addEventListener("click",() => { 
  changeTheme(
    "white",
    "#666",
    "#333",
    "lightgray",
    "black",
    "white",
    "#333",
    "#333"
  ); 
});

theme2Button.addEventListener("click",() => { 
  changeTheme(
    "#222",
    "#3D5A80",
    "#98C1D9",
    "#EE6C4D",
    "#E5E5E5",
    "#E0FBFC",
    "#293241",
    "#CCC"
  ); 
});

theme3Button.addEventListener("click",() => { 
  changeTheme(
    "#555",
    "#52796F",
    "#84A98C",
    "#2F3E46",
    "#CAD2C5",
    "#1A2729",
    "#CAD2C5",
    "#DDD"
  ); 
});

theme4Button.addEventListener("click",() => { 
  changeTheme(
    "#12122A",
    "#4A4E69",
    "#22223B",
    "#9A8C98",
    "#C9ADA7",
    "#F2E9E4",
    "#F2E9E4",
    "#AAA"
  ); 
});

theme5Button.addEventListener("click",() => { 
  changeTheme(
    "#14213D",
    "#FCA311",
    "#14213D",
    "#000000",
    "#E5E5E5",
    "#FFFFFF",
    "#FCA311",
    "#AAA"
  ); 
});

theme6Button.addEventListener("click",() => { 
  changeTheme(
    "#121212",
    "#403D39",
    "#252422",
    "#EB5E28",
    "#FFFCF2",
    "#CCC5B9",
    "#FFFCF2",
    "#DDD"
  ); 
});
