var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.opera-bg'),
    decimal = document.getElementById('decimal'),
    c = document.getElementById('delete'),
    resultBtn = document.getElementById('eqn-bg'),
    display = document.getElementById('screen'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};


for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        operation();
    });
};

decimal.addEventListener('click', decimal);
c.addEventListener('click', clear);
resultBtn.addEventListener('click', result);

function numberPress(number) {
    if (MemoryNewNumber){
        display.innerText = number;
        MemoryNewNumber = false;
    } else {
if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    };
};

function operation(op) {
   var localOperationMemory = display.innerText;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.innerText = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        display.innerText = MemoryCurrentNumber;
        MemoryPendingOperation = op
    };
    console.log('On click operation '+ op +'!');
};
function c(number) 
{
    console.log ('On Click btn '+ id +'!');
};

