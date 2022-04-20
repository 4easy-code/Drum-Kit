// when calling addEventListener("stimuli", "function call") -> in function call just name of function is
// written without parenthesis ... eg. add, or we can use anonymous function function() {}

/*
var employee = {
    name : "Mayank",
    salary : 1000000,
    isGoodLooking : true,
    language : ["Hindi", "English", "Maithli"]
}
console.log(employee.name);


javaScript Constructor

function BellBoy(name, age, hasWorkPermit, yarsOfExpericence) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.yearOfExperience = yearsOfExperience;
    this.moveSuiteCase = function () {
        alert("I am picking your suitecase !");
    }
}
var bellBoy1 = new BellBoy("Maish", 22, true, 3);

*/

function checkAndPlay(buttonPressed) {
    if (buttonPressed === 'w') {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else if (buttonPressed === 'a') {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (buttonPressed === 's') {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else if (buttonPressed === 'd') {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (buttonPressed === 'j') {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (buttonPressed === 'k') {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (buttonPressed === 'l') {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonPressed = this.textContent;
        checkAndPlay(buttonPressed);
        buttonAnimation(buttonPressed);

    })
}

// var audio = Audio("xxx.mp3");
// audio.play();


document.addEventListener("keypress", function(event) {
    var buttonPressed = event.key;
    checkAndPlay(buttonPressed);
    buttonAnimation(buttonPressed);
})


function buttonAnimation(buttonPressed) {
    var currDrum = document.querySelector("." + buttonPressed);
    currDrum.classList.add("pressed");
    setTimeout(() => {
        currDrum.classList.remove("pressed");
    }, 100);

}