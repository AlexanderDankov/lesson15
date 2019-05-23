function calc() {

let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    inputValue = document.querySelectorAll(".counter-block-input"),
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    inputValue.forEach(function (elem, i, item) {
        item[i].addEventListener("change", function () {
            item[i].value = item[i].value.replace(/\D/ig, "");
        });
    });

    persons.addEventListener("change", function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(restDays.value =="" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener("change", function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
 
        if(persons.value =="" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0){
             totalValue.innerHTML = 0;
        } else {
             totalValue.innerHTML = total;
        }
    });

    place.addEventListener("change", function() {
        if(restDays.value =="" || persons.value =="" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0) {
                totalValue.innerHTML = 0;
        } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;