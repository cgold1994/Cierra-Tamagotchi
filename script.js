class Tamagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

// $("#restart").hide();

// function startGame() {
//     grow();
// }



let count = 0;
let myCounter = null;


const sleepCount = document.getElementById("countSleep")
const hungerCount = document.getElementById("countHunger")
const boredomCount = document.getElementById("countBoredom")

const buttonSleep = document.getElementById("sleepBtn")
const buttonHunger = document.getElementById("feedBtn")
const buttonBoredom = document.getElementById("playBtn")




const element = document.getElementById("myButton");
      element.addEventListener("click", myFunction);
      
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hey! I'm so happy that you're here to<br> keep me company.<br>In order to keep me happy and alive, try to keep my action levels at 10.";
        myCounter = setInterval(function(){
            count++;
            stopCount()
            sleepCount.innerText = "Sleepiness " + count;
            hungerCount.innerText = "Hunger" + count;
            boredomCount.innerText = "Boredom" + count;
          }, 1000);
        }

function gotosleep () {

}

function icecream () {

}

function catnip () {

}

function stopCount() {
    if (count >= 10){
      clearInterval(myCounter)
    }
    else {
        return
    }
  }





buttonSleep.addEventListener("click", gotosleep);
buttonHunger.addEventListener("click", icecream);
buttonBoredom.addEventListener("click", catnip);


