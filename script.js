document.addEventListener("DOMContentLoaded", () => {

    // Setting the option for a user to change from light mode to dark mode

    const lightMode = document.getElementById("light-link");
    const darkMode = document.getElementById("dark-link");
    var popSound = new Audio("sounds/pop-sound.mp3");
    const pageBackground = document.getElementById("background-one");

    pageBackground.style.backgroundImage = "url('imgs/background-img.png')";
    pageBackground.style.backgroundSize = "cover";
    pageBackground.style.backgroundRepeat = "no-repeat";
    pageBackground.style.backgroundAttachment = "fixed";
    pageBackground.style.backgroundPosition = "center";
    pageBackground.style.padding = "2rem 2rem 2rem 2rem";

    darkMode.onclick = function() {
        pageBackground.style.backgroundImage = "url('imgs/background-img-alt.png')";
        pageBackground.style.transition = "all 0.3s ease";
        popSound.play();
        popSound.currentTime = 0;
    }

    lightMode.onclick = function() {
        pageBackground.style.backgroundImage = "url('imgs/background-img.png')";
        pageBackground.style.transition = "all 0.3s ease";
        popSound.play();
        popSound.currentTime = 0;
    }

    // Setting the JavaScript to change the text and set pop-sound effect on hover

    // const primaryTitle = document.getElementById("primary-title");
    const additionEmblem = document.getElementById("addition-link");
    const subtractionEmblem = document.getElementById("subtraction-link");
    const multiplicationEmblem = document.getElementById("multiplication-link")
    const divisionEmblem = document.getElementById("division-link");

    // Setting the addition emblem

    additionEmblem.onmouseenter = function() {
        // primaryTitle.innerHTML = "Play Addition";
        additionEmblem.style.marginBottom = "3rem";
        additionEmblem.style.transition = "all 0.3s ease";
    }

    additionEmblem.onmouseout = function() {
        // primaryTitle.innerHTML = "";
        additionEmblem.style.marginBottom = "0";
        additionEmblem.style.transition = "all 0.3s ease";
    }

    additionEmblem.onclick = function() {
        popSound.play();
        popSound.currentTime = 0;
    }

    // Setting the subtraction emblem

    subtractionEmblem.onmouseenter = function() {
        subtractionEmblem.style.marginBottom = "3rem";
        subtractionEmblem.style.transition = "all 0.3s ease";
    }

    subtractionEmblem.onmouseout = function() {
        subtractionEmblem.style.marginBottom = "0";
        subtractionEmblem.style.transition = "all 0.3s ease";
    }

    subtractionEmblem.onclick = function() {
        popSound.play();
        popSound.currentTime = 0;
    }

    // Setting the multiplication emblem 

    multiplicationEmblem.onmouseenter = function() {
        multiplicationEmblem.style.marginBottom = "3rem";
        multiplicationEmblem.style.transition = "all 0.3s ease";
    }

    multiplicationEmblem.onmouseout = function() {
        multiplicationEmblem.style.marginBottom = "0";
        multiplicationEmblem.style.transition = "all 0.3s ease";
    }

    multiplicationEmblem.onclick = function() {
        popSound.play();
        popSound.currentTime = 0;
    }

    // Setting the divison emblem 

    divisionEmblem.onmouseenter = function() {
        divisionEmblem.style.marginBottom = "3rem";
        divisionEmblem.style.transition = "all 0.3s ease";
    }

    divisionEmblem.onmouseout = function() {
        divisionEmblem.style.marginBottom = "0";
        divisionEmblem.style.transition = "all 0.3s ease";
    }

    divisionEmblem.onclick = function() {
        popSound.play();
        popSound.currentTime = 0;
    }
});