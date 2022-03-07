// class created for tamagotchi pet
class Tamagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}


let count = 0;
let myCounter = null;

// Dom elements
const sleepCount = document.getElementById("countSleep")
const hungerCount = document.getElementById("countHunger")
const boredomCount = document.getElementById("countBoredom")

const buttonSleep = document.getElementById("sleepBtn")
const buttonHunger = document.getElementById("feedBtn")
const buttonBoredom = document.getElementById("playBtn")


// functions to start game and decrease levels

const element = document.getElementById("myButton");
      element.addEventListener("click", myFunction);
      
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hey! I'm so happy that you're here! <br>In order to keep me happy and alive, try to keep my levels below 10.";
        myCounter = setInterval(function(){
            count++;
            stopCount()
            sleepCount.innerText = "Sleepiness " + count;
            hungerCount.innerText = "Hunger" + count;
            boredomCount.innerText = "Boredom" + count;
          }, 1000);
        }

// decrement the value of actions when buttons are pressed         
function gotosleep () {
    if (count >1 ){
        count--
      sleepCount.innerText= ("Sleepiness:" + count);
      sleepCount.innerText ="Are you furreal? Blue poofed away";
      // if (hunger ==10 || boredom ==10 || sleep == 10)
   }
}

function icecream () {
    if (count >1 ){
        count--
      hungerCount.innerText= ("Hunger:" + count);
     }
}

function catnip () {
    if (count >1 ){
        count--
      boredomCount.innerText= ("Boredom: " + count);
     }
}

function stopCount() {
    if (count >= 10){
      clearInterval(myCounter)
    }
    else {
        return
    }
}


// onclick functions to elements
buttonSleep.addEventListener("click", gotosleep);
buttonHunger.addEventListener("click", icecream);
buttonBoredom.addEventListener("click", catnip);


