// document.getElementById("myButton").onclick = function(){
//     let myName = document.getElementById("myText").value;
//     console.log("Hi",myName);
// }


class Tamagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

// $("#restart").hide();

function startGame() {
    grow();
}

function grow() {
    if (myTamagotchi.age < 1) {
        appear();
    }
}