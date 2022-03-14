let modalContainer = $(".modal-container");
let modalBackground = $(".modal-background");
let cs50modalCaller = $(".modal-caller");
let showingModalContent = "";

modalContainer.addEventListener("click", () => {
    hideModal();
    hideModalContent();
})

cs50modalCaller.addEventListener("click", () => {
    showModal();
    showModalContent("#cs50cert");
})

function showModal() {
    modalContainer.style.display = "block";
    modalBackground.style.display = "block";
}

function showModalContent(selector) {
    $(selector).style.display = "block";
    showingModalContent = selector;
}

function hideModalContent() {
    $(showingModalContent).style.display = "none";
    showingModalContent = "";
}

function hideModal() {
    modalContainer.style.display = "none";
    modalBackground.style.display = "none";
}