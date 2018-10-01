// var someNumber = 123;// veseles skaitlis ir integer
// var someDecimal = 3.14; // float, decimāls cipars
// var someWord = 'Hello wrold!!'; // string  - teksts,var rakstīt parastajās pēdīņās, bet var izmantot dubultās, var vēl izmantot '' "" `` 
// var someTrue = true; // boolean ( tautā saka bool) raksta true vai falss 
// var someNothing = null; // null mainīgajam nav vērtības


// var someArray = ['vaz', 'zaz', 'gaz', 'maz', 'bmw', 1, 3.14, true,]; //array, vienā masīvā tiek saliktas vairākas vērtības, pēdējai vērtībai var likt komatu var nelikt
// var i = 1
// console.log(someArray[i]); //(typeof someArray) pierakstām, lai pārbaudītu mainīgā tipu, ja vajag dabūt kokrēto objektu, tad [] iekavās ierakstām lementa skaitu, skaitās no 0 līdz 9
// var johnny = {
//     name: 'Johnny',
//     surname: 'Doe',
//     fullName: 'Johnny Doe',
//     age: '21',
// } // objekts - tiek definēta atslēga 'name' un vērtība 'Johnny' 

// console.log(johnny.name); // ja gribam precizēt objektu, tad liekam punktu

// // mainīgais ar nosaukumu var būt tikai viens, bet vērtību jebkurā brīdī var mainīt

// // var i = 1;
// // console.log(i);
// // i = 2;
// // console.log(i);
// // i = 'foo'
// // console.log(i);

// // var a = 'foo';
// // console.log(a);
// // a = 'bar';
// // console.log(a);
// // a = 'baz';
// // console.log(a);
// // a = '1';
// // console.log(a);
// // a = '2';
// // console.log(a);
// // a = '3';
// // console.log(a);

// // pieejami
// // +
// // -
// // *
// // /
// // % 

// // var number1 = 2;
// // var number2 = 4;
// // console.log(1 + 1);
// // console.log(2 + 2 * 2);
// // // izvadīt skaitļu summu 
// // console.log(number1 + number2); // var mainīgo saskaitīt ar skaitli ( number1+3)

// // var number3 = number1 - number2;
// // console.log(number3);
// // console.log((2 + 2) * 2); // rezultāts 8

// // number1 = number1 + 1;
// // // vai 
// // number1 += 1;
// // // vai
// // number1++;
// // // vai
// // number1--;
// // console.log(number1);


// // // console.log(5 % 2);

// // console.log('foo ' + 'bar');
// // console.log(1 + '1');
// // console.log('1' + 1);  // ja tekstu saskaita ar ciparu, tad skaitli pārvērš par tekstu un summāri sanāk 11


// // šeit tiek rakstītas == vienādības zīmes
// // != nav vienāds ( ar ! mainīgā vērtību var mainīt)
// // <
// // >
// // <=
// // >=
// // ===   saucas strict comparison (eaqual)   salīdzina ne tikai mainīgā vērtību, bet arī mainīgā tipu
// // !==   saucas strict comparison (not eaqual)


// // if (true) {
// //     console.log('was true');

// // } else {
// //     console.log('was not true');
// // }

// //----------------------------------------------------------------------------------------------------------------------------------------------------
// // var name = 'Kārlis';
// // if (name =='Anna') {
// //     console.log('Čau Anna');
// // }
// // else if(name =='Jānis') {
// //     console.log ('Wats up Jānis')
// // } else {
// //     console.log ('Nepazīstu Tevi')
// // }
// // Anna => Čau Anna, Jānis =>Whats up Jānis, anything else => Nepazīstu tevi

// // var a = 1;
// // var b = 2;
// // var c = 3;
// // // && -> un
// // //||  -> or
// // if (a = 2 && b == 3 || c == 3) {
// // // ( fals)      ( true)
// // } 

// // lai nostrādātu fails cmd nospiest node un faila adresi
// //---------------------------------------------------------------------------------------------------------------------------------------------------
// var name = 'Jānis';
// var name = 'Kārlis';
// var name = 'Zane';

// if (name == 'Jānis'
//     || name == 'Kārlis'
//     || name= 'Zane') {
//     colsole.log('Čau zināmais cilvēk')
// }
// else {
//     console.log('Nepazīstu tevi')
// }
// //--------------------------------------------------------------------------------------------------------------------------------------------------


// switch (name) {
//     case 'Jānis':
//         console.log('Čau zināmais cilvēk');
//         break;
//     case 'Kārlis':
//         console.log('Čau zināmais cilvēk');
//         break;
//     case 'Zane':
//         console.log('Čau zināmais cilvēk');
//         break;
//     default:
//         console.log('Nepazīsut Tevi');
// }

// vai
// switch (name) {
//     case 'Jānis':
//     case 'Kārlis':
//     case 'Zane':
//         console.log('Čau zināmais cilvēk');
//         break;
//     default:
//         console.log('Nepazīsut Tevi');
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------
// kā attēlot ciklus // control + C var apturēt skriptu terminālā, ja dators ir uzkāries

// var i = 0;
// while (i < 10) {
//     if (i < 5) {
//         console.log(i);
//     }

//     i++;
// }
// console.log(i);

//-------------------------------------------------------------------------------------------------------------------------------------------------

// var i = 1;
// while (i < 20) {
//     if (i % 2 == 0) {

//         console.log(i);
//     }
//     i++;
// }
// //---------------------------------------------------------------------

// while (1 < 0) {
//     console.log(i);
//     i += 2;
// }
// //---------------------------------------------------------------------
// var i3 = 20;
// while (i3 >= 0) {

//    console.log(i3); 
//    i3--;
// }
//------------------------------------------------------------------------
// pārtaukt ciklu pie 5
// var i = 0;
// while (i < 20) {
//     if (i == 5) {
// break;
//     }
//     console.log(i);
//     i++;
// }
//-------------------------------------------------------------------------
//continue turpina šo ciklu no jauna 
// var i = 0;
// while (i < 20) {
//     i++;
//     if (i == 5) {
// continue;
//     }
//     console.log(i);

// }
// console.log(i);
//-------------------------------------------------------------------------
// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 20);
// //-------------------------------------------------------------------------
// var i = 20;
// do {
//     console.log(i);
//     i++;
// } while (i < 20);
// pārbauda, ka i = 20 un izdrukā, pēc tam pieskaita un salīdzina, ka 21 ir vairāk

//-------------------------------------------------------------------------

// for (var i = 0; i < 20; i++) {
//     console.log(i);
// }
// pasakām i vēr'tibu, pēc tam cik ilgi meklējam  i<20 un beigās pieliekam klār i++

//--------------------------------------------------------------------------

// for (var i = 20; i > 0; i--) {
//     console.log(i);
// }

//----------------------------------------------------------------------------
// for loop izmanto, lai interētu car masīviem
// var cars =['vaz', 'gaz','maz', 'zaz','uaz','bmw'];
// for (var index = 0; index < cars.length; index++) {

//     console.log(index);
// }

// var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     console.log[car];
// }
// 
// // izvadīt vienu mašīn un otrs uzdevums izvadīt visus izņemot to vienu
// var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index == 2) {
//         console.log(car);
//     }

// }
// // ! norāda, ka nav vienāds
// var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index != 2) {
//         console.log(car);
//     }

// }
//---------------------------------------------------------------------------------------------------------------------------------------------------
// addTwo Numbers izvēlamies nosakumu paši
function addTwoNumbers(number1, number2, ) {
    return number1 + number2;
}
console.log(addTwoNumbers(2, 3));
// izdrukās 5
//----------------------------------------------------------
// funkcija, kas paņem divus parametrsu, cilvēka vārdu un vecumu un atgriež
// ja tu esi Kārlis un tev ir 50
// tad atgriež Čau Kārli, Tec ir 50 gadi!

function addName(name, age, ) {
    console.log('Čau ' + name + 'Tev ir ' + age + 'gadi!');

}
addName('Kārlis, 20 ');


//ar ciklu izsaitīt līdz 30 
// izmantojam % vai dalās ar divai vai trīs, izmantot ar trīs ifiem un būs vajadzīgs mainīgais, var izmantot arī funkcijas.

for (var i = 0; i < 30; i++) {
    var output = '';
    if (i % 2 === 0) {
        output = 'Fizz';
    }
    if (i % 3 == 0) {
        output += 'Bazz';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}


