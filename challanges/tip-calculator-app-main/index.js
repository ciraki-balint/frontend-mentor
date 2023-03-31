let bill = document.getElementById("bill");
let person = document.getElementById("person");
let errorLabel = document.getElementById("errorLabel");
let button5 = document.getElementById("button5");
let button10 = document.getElementById("button10");
let button15 = document.getElementById("button15");
let button25 = document.getElementById("button25");
let button50 = document.getElementById("button50");
let buttonC = document.getElementById("buttonC");

let percentButtons = document.getElementsByClassName("percent-button");

console.log(percentButtons);

person.addEventListener("change",function(){
    if (person.value == "0" || person.value == ""){
        person.style.border = "2px solid red";
        errorLabel.removeAttribute("hidden");
    } else {
        errorLabel.setAttribute("hidden",true);
        person.style.border = "none";
    }
})

button5.addEventListener("click",function(){
    if (percentButtons.classList.contains("active")){
        percentButtons.forEach(function() {
            this.classList.remove("active");
        });
        percentButtons.classList.remove("active");
    }
    this.classList.add("active");
})

function toggelActive(){
    
}






console.log(bill);
console.log(person);