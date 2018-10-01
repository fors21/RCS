function btn1(number){
    var el = document.getElementById ('result')
    el.value = parseInt (el.value) + number
}
// btn1 ir svarīgi, lai funkcijas nosaukums sakristu ar Html failā
// norādīto, Html failā nosaukuma beigās mēs ieliekam mainīgo ciprau, kurš
// tālāk tiks pieskaitīts vai atņemts, GetelemntId mēs norādām
// kur tas tiks izvadīts un attiecīgi ar parsetIn(el.value) mēs
//nodefinējam funkcijas darbību, kur norādām ar number, ka jāpieskaita mainīgais (Number). 
// Ir svarīgi norādīt mainīgo, lai funkcija saprastu kur likt skaitli. 
function btn3(number){
    var el = document.getElementById ('result')
    el.value = parseInt (el.value) + number

}



