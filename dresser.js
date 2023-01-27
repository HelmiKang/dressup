let hair = document.querySelector(".avatar-hair");
let color = document.querySelector(".color");


let hairButtons = document.querySelectorAll(".hair-button");
let selectedHairButton = hairButtons[0];

hairButtons.forEach((hairButton) => {
    hairButton.addEventListener("click", () => {
        hair.setAttribute("src", hairButton.getAttribute("data-image"));
        selectedHairButton.classList.toggle("selected");
        hairButton.classList.toggle("selected");
        selectedHairButton = hairButton;
        color.classList.add("active");
    })
});

let shirt = document.querySelector(".avatar-shirt");

let shirtButtons = document.querySelectorAll(".shirt-button");
let selectedShirtButton = shirtButtons[0];

shirtButtons.forEach((shirtButton) => {
    shirtButton.addEventListener("click", () => {
        shirt.setAttribute("src", shirtButton.getAttribute("data-image"));
        selectedShirtButton.classList.toggle("selected");
        shirtButton.classList.toggle("selected");
        selectedShirtButton = shirtButton;
    })
});


let pants = document.querySelector(".pants-shirt");

let pantsButtons = document.querySelectorAll(".pants-button");
let selectedPantsButton = pantsButtons[0];

pantsButtons.forEach((pantsButton) => {
    pantsButton.addEventListener("click", () => {
        pants.setAttribute("src", pantsButton.getAttribute("data-image"));
        selectedPantsButton.classList.toggle("selected");
        pantsButton.classList.toggle("selected");
        selectedPantsButton = pantsButton;
    })
});
