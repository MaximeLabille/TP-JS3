//table
const t1_1 = document.getElementById("t1-1");
const t1_2 = document.getElementById("t1-2");
const t1_3 = document.getElementById("t1-3");
const t1_4 = document.getElementById("t1-4");

const t2_1 = document.getElementById("t2-1");
const t2_2 = document.getElementById("t2-2");
const t2_3 = document.getElementById("t2-3");
const t2_4 = document.getElementById("t2-4");

const t3_1 = document.getElementById("t3-1");
const t3_2 = document.getElementById("t3-2");
const t3_3 = document.getElementById("t3-3");
const t3_4 = document.getElementById("t3-4");

const t_total = document.getElementById("t-total");
//bouttons
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

function addition() {
    result.innerText = "Résultat: "+(Number(num1.value)+Number(num2.value)).toString();
};

function soustraction() {
    result.innerText = "Résultat: "+(Number(num1.value)-Number(num2.value)).toString();
};

function division() {
    result.innerText = "Résultat: "+(Number(num1.value)/Number(num2.value)).toString();
};

function multiplication() {
    result.innerText = "Résultat: "+(Number(num1.value)*Number(num2.value)).toString();
};

function calc() {
    var t1_prix = (Number(t1_2.value)*Number(t1_3.value));
    var t2_prix = (Number(t2_2.value)*Number(t2_3.value));
    var t3_prix = (Number(t2_2.value)*Number(t3_3.value));

    var t_prix = (t1_prix+t2_prix+t3_prix);

    t1_4.value = t1_prix
    t2_4.value = t2_prix
    t3_4.value = t3_prix

    t_total.value = t_prix;
};

function resetinputs() {
    t1_1.value = "";
    t1_2.value = 0;
    t1_3.value = 0;


    t2_1.value = "";
    t2_2.value = 0;
    t2_3.value = 0;


    t3_1.value = "";
    t3_2.value = 0;
    t3_3.value = 0;

    calc();
};

submit.addEventListener("click", calc);
reset.addEventListener("click", resetinputs);