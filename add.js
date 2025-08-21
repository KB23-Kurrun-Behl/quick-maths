document.addEventListener("DOMContentLoaded", () => {

    // Setting the option for a user to change from light mode to dark mode

    const lightMode = document.getElementById("light-link");
    const darkMode = document.getElementById("dark-link");
    var popSound = new Audio("sounds/pop-sound.mp3");
    const pageBackground = document.getElementById("background-two");

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

    // Setting the JavaScript for the random number questions and checking if the provided answer is correct or incorrect

    let operation = document.getElementById("operation-box");
    operation.innerHTML = "+";

    let randomNum1 = document.getElementById("random-num-one");
    randomNum1.innerHTML = Math.floor((Math.random() * 10) + 1);

    let randomNum2 = document.getElementById("random-num-two");
    randomNum2.innerHTML = Math.floor((Math.random() * 10) + 1);

    let equal = document.getElementById("equal-box");
    equal.innerHTML = "=";

    // Settng the JavaScript for the refresh button to reload the page for a new question

    let refreshButton = document.getElementById("refresh-link");

    refreshButton.onclick = function() {
        window.location.reload();
    }

    // Setting the JavaScript for the enter button to submit the answer and check if the sum is correct or incorrect 

    const enterButton = document.getElementById("enter-link");
    const answer = document.getElementById("answer-box");
    const total = parseInt(randomNum1.innerHTML) + parseInt(randomNum2.innerHTML);
    const heading = document.getElementById("heading-box");

    answer.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            checkSum();
        }
    });

    // enterButton.addEventListener("click", function() {
    //     checkSum();
    // });

    function checkSum() {
        if (parseInt(answer.value) == total) {
            pageBackground.style.backgroundImage = "url('imgs/background-img-correct.png')";
            heading.innerHTML = "Correct! Well Done!";
            heading.style.color = "#4EE962FF";
            heading.style.textShadow = "none";
        } else {
            pageBackground.style.backgroundImage = "url('imgs/background-img-incorrect.png')";
            heading.innerHTML = "Incorrect. Try Again.";
            heading.style.color = "#DF1919FF";
            heading.style.textShadow = "none";
        }
    } 
});