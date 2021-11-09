const add = function() {

    let x = arguments[0];
    let y = arguments[1];

    return x + y;
};

const subtract = function() {

    let x = arguments[0];
    let y = arguments[1];

    return x - y;
};

const multiply = function() {

    let x = arguments[0];
    let y = arguments[1];

    return x * y;
};

const divide = function() {

    let x = arguments[0];
    let y = arguments[1];

    return x / y;
};

const operate = function() {

    let x = arguments[0];
    let y = arguments[1];
    const operation = arguments[2];

    return operation(x,y);
}

let result = '0';

const displayDiv = document.querySelector('#display');
displayDiv.innerText=result;

const digitButtons = document.querySelectorAll('.num');

digitButtons.forEach(btn => {
    let value = btn.innerHTML;
    addEventListener('onclick', btn);
    displayDiv.innerText=result;
});
