var count = 0;
var spend = 0;
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
    spend++;
    document
        .getElementById('spending')
        .innerText = spend;
};
 
var upgrade1x = 0;
var price1x = 10;
console.log(price1x);
function firstUpgrade() {
    var money = document.getElementById('spending');
    var currentValue = parseInt(money.innerText)
    if (currentValue >= price1x) {
        setInterval(addCount, 1000);
        upgrade1x++;
        document
            .getElementById('1xUp')
            .innerText = upgrade1x;
        spend = currentValue - price1x;
        document
            .getElementById('spending')
            .innerText = spend;
        price1x++;
        // percent = price1x * 0.1;
        document
            .getElementById('price-value1')
            .innerText = price1x;
    } else if (money.innerText > price1x) {
        // alert('Hands off this button, not enough clicks!')
        document.getElementById('btn1').disabled = true;
    }
    console.log(price1x);};
 
function priceGoesUp(a) {
    var element = document.getElementById('#price-value1')
    a * 0.1;
    element.inner.text = a
};
 
var upgrade10x = 0;
var price10x = 90;
function scndUpgrade() {
    var money = document.getElementById('spending');
    var currentValue = parseInt(money.innerText)
    if (currentValue >= price10x) {
        setInterval(addCount, 100);
        upgrade10x++;
        document
            .getElementById('10xUp')
            .innerText = upgrade10x;
        spend = currentValue - price10x;
        document
            .getElementById('spending')
            .innerText = spend;
        price10x++;
        // percent = document.getElementById('priceValue2');
        document
            .getElementById('price-value2')
            .innerText = price10x;
    } else if (money.innerText > price10x) {
        document.getElementById('btn2').disabled = true;
    }
}





















// function btn1(number){
//     var el = document.getElementById ('result')
//     el.value = parseInt (el.value) + number
// }
// // btn1 ir svarīgi, lai funkcijas nosaukums sakristu ar Html failā
// // norādīto, Html failā nosaukuma beigās mēs ieliekam mainīgo ciprau, kurš
// // tālāk tiks pieskaitīts vai atņemts, GetelemntId mēs norādām
// // kur tas tiks izvadīts un attiecīgi ar parsetIn(el.value) mēs
// //nodefinējam funkcijas darbību, kur norādām ar number, ka jāpieskaita mainīgais (Number). 
// // Ir svarīgi norādīt mainīgo, lai funkcija saprastu kur likt skaitli. 
// function btn3(number){
//     var el = document.getElementById ('result')
//     el.value = parseInt (el.value) + number

// }



