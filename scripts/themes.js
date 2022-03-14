let themeOptionOn = false;

function toggleThemes() {
    if (!themeOptionOn) {
        themesDropdown.classList.add("header-option-dropdown-on");
    } else {
        themesDropdown.classList.remove("header-option-dropdown-on");
    }
    themeOptionOn = !themeOptionOn;
}

function changeTheme(baseColor, mainColor, secondaryColor, accentColor, mainTextColor, secondaryTextColor, accentTextColor, defaultText, invertAmount) {
    document.documentElement.style.setProperty("--base-color", baseColor);
    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
    document.documentElement.style.setProperty("--accent-color", accentColor);
    document.documentElement.style.setProperty("--main-text-color", mainTextColor);
    document.documentElement.style.setProperty("--secondary-text-color", secondaryTextColor);
    document.documentElement.style.setProperty("--accent-text-color", accentTextColor);
    document.documentElement.style.setProperty("--default-text", defaultText);
    document.documentElement.style.setProperty("--invert-amount", invertAmount);

    toggleThemes();
}

theme1Button.addEventListener("click", () => {
    changeTheme(
        "white",
        "#666",
        "#333",
        "#9B9B9B",
        "black",
        "white",
        "#EEE",
        "#333",
        "invert(0)"
    );
});

theme2Button.addEventListener("click", () => {
    changeTheme(
        "#222",
        "#3D5A80",
        "#98C1D9",
        "#EE6C4D",
        "#E5E5E5",
        "#E0FBFC",
        "#293241",
        "#CCC",
        "invert(100%)"
    );
});

theme3Button.addEventListener("click", () => {
    changeTheme(
        "#555",
        "#52796F",
        "#84A98C",
        "#2F3E46",
        "#CAD2C5",
        "#1A2729",
        "#CAD2C5",
        "#DDD",
        "invert(100%)"
    );
});

theme4Button.addEventListener("click", () => {
    changeTheme(
        "#12122A",
        "#4A4E69",
        "#22223B",
        "#9A8C98",
        "#C9ADA7",
        "#F2E9E4",
        "#F2E9E4",
        "#AAA",
        "invert(100%)"
    );
});

theme5Button.addEventListener("click", () => {
    changeTheme(
        "#14213D",
        "#FCA311",
        "#14213D",
        "#000000",
        "#E5E5E5",
        "#FFFFFF",
        "#FCA311",
        "#AAA",
        "invert(100%)"
    );
});

theme6Button.addEventListener("click", () => {
    changeTheme(
        "#121212",
        "#403D39",
        "#252422",
        "#EB5E28",
        "#FFFCF2",
        "#CCC5B9",
        "#FFFCF2",
        "#DDD",
        "invert(100%)"
    );
});