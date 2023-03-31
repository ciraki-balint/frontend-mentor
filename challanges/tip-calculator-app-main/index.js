let bill = document.getElementById("bill");
let person = document.getElementById("person");
let errorLabel = document.getElementById("errorLabel");
let button5 = document.getElementById("button5");
let button10 = document.getElementById("button10");
let button15 = document.getElementById("button15");
let button25 = document.getElementById("button25");
let button50 = document.getElementById("button50");
let buttonC = document.getElementById("buttonC");

let percentButtons = document.querySelectorAll(".percent-button");
console.log(percentButtons);

function toggleActive(button){
    percentButtons.forEach(function(item){
        if (item != button){
            if (item.classList.contains("active")){
                item.classList.remove("active");
            } else {
                button.classList.add("active");
            }
        } else if (item == button && item.classList.contains("active")){
            button.classList.remove("active");
        }

    })
    //TODO
}

function calcTip(bill,percent,person){
    if(person != undefined && percent != "0" && bill == "0"){
        //TODO
    }
}

function calcTotal(bill,percent,person){
    if(person != undefined && percent != "0" && bill == "0"){
        //TODO
    }
}
person.addEventListener("change",function(){
    if (person.value == "0" || person.value == ""){
        person.style.border = "2px solid red";
        errorLabel.removeAttribute("hidden");
    } else {
        errorLabel.setAttribute("hidden",true);
        person.style.border = "none";
    }
})

