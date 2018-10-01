// // alert('Hello wrold');
// confirm('Hello wrold');

// console.log(window);
// console.log(document.childNodes); // ar childNodes mēs varam redzēt, kas ir failā ( bērni)
// function buttonClick(){
//     alert('button was click')
// }

// function buttonClick() {
//     var element = document.getElementById('some-paragraph')
//     // console.log(element.innerHTML);
//     // console.log(element.innerText);
//  if(element.innerText == 'foo'){
//      element.innerText ='bar';
//  } else {
//      element.innerText ='foo'
//  }
//  setTimeout(buttonClick, 2000);
//vai 
//  setInterval(buttonClick,500);
//funkcija notiek nepārtrauki
// }
// fukcija tiek izpildīta vienu reizi
//--------------------------------------------------------------

function buttonClick() {
    var element = document
        .querySelector('#some-paragraph')

    if
    (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }

}
// console.log(document.querySelectorAll ('.other-paragraph'));
//---------------------------------------------------
function checkParagraphContent() {
    // alert(1);
    var elements = document.querySelectorAll('.other-paragraph');
    // console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var number = i + 1;
        // console.log(element);
        if
        (element.innerText == 'foo' + number) {
            element.innerText = 'bar' + number;
        } else {
            element.innerText = 'foo' + number;
        }
    }
}


function add(number) {
    var element = document
        .getElementById('number');
    var currentValue = parseInt(element.innerText);
    element.innerText = currentValue + number;
}

var count = 0;
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
}


//----------------------MD-------------
// -------------------- ANOGRAMMA----------------

function isAnagram(str1, str2) {
    str1 = str1.replace('', '').split('').sort().join('');
    str2 = str2.replace('', '').split('').sort().join('');
    return str1 == str2;
}

console.log(' sula ' + isAnagram('sula', 'alus'));
console.log(' aaa ' + isAnagram('aaa', 'aba'));
console.log(' aab ' + isAnagram('aab', 'aba'));

