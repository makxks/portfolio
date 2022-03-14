let textEl = $(".tour-content-text-heading");

function setText(text) {
    textEl.innerHTML = text;
}

function showHideText(opacity) {
    textEl.style.opacity = opacity;
}