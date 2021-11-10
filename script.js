const add = function() {

    let x = arguments[0];
    let y = arguments[1];

    return (x + y).toPrecision(10)/1;
};

const subtract = function() {

    let x = arguments[0];
    let y = arguments[1];

    return (x - y).toPrecision(10)/1;
};

const multiply = function() {

    let x = arguments[0];
    let y = arguments[1];

    return (x * y).toPrecision(10)/1;
};

const divide = function() {

    let x = arguments[0];
    let y = arguments[1];

    return (x / y).toPrecision(10)/1;
};

// const operate = function() {

//     let x = arguments[0];
//     let y = arguments[1];
//     const operation = arguments[2];

//     return operation(x,y);
// }

let result = '0';
let x = '';
let y = '';

const displayDiv = document.querySelector('#display');
displayDiv.innerText=result;

const resetBtn = document.querySelector('#reset');
const signBtn = document.querySelector('#plus-minus');
const percentage = document.querySelector('#percentage');
const dot = document.querySelector('#dot');

const digitButtons = document.querySelectorAll('.num');
const operandButtons = document.querySelectorAll('.right');

let operator = '';

digitButtons.forEach(btn => {
    let value = btn.innerText;
    btn.addEventListener('click', () => {

        operandButtons.forEach(btn => {
            if (btn.style.backgroundColor === 'whitesmoke') {
                btn.style.backgroundColor = 'orangered';
                btn.style.color = 'whitesmoke';
                displayDiv.innerText = '';
            }
        });


        if (displayDiv.innerText === '0'){
            console.log(displayDiv.innerText);
            if (value !== '0') {
                displayDiv.innerText = value;
                resetBtn.innerText = 'C';
            }
            
        }

        else if (displayDiv.innerText === '-0') {

            if (value !== '0') {
                displayDiv.innerText = '-' + value;
                resetBtn.innerText = 'C';
            }
        }

        // else if (operator !== '') {
        //     if (displayDiv.innerText === '0.' || displayDiv.innerText === '-0.') {
        //         displayDiv.innerText += value;
        //     }
        //     else {
        //         displayDiv.innerText = value;
        //     }

        // }

        else {

            if (displayDiv.innerText.length < 10) {
                displayDiv.innerText += value;
                resetBtn.innerText = 'C';
            }
        }
    });
});

resetBtn.addEventListener('click', () => {
    if (resetBtn.innerText === 'C') {
        displayDiv.innerText = '0';
        resetBtn.innerText = 'AC';
        x = '';
        y = '';
        operator = '';
    }
})

signBtn.addEventListener('click', () => {


    if (displayDiv.innerText[0] !== '-') {
        displayDiv.innerText = '-' + displayDiv.innerText;
    }
    
    else {
        displayDiv.innerText = displayDiv.innerText.slice(1,);
    }

})

percentage.addEventListener('click', () => {
    displayDiv.innerText = divide(Number(displayDiv.innerText), 100);
})

dot.addEventListener('click', () => {

    if (operator === '=') {

        displayDiv.innerText = '0.';

    }
    else {
        displayDiv.innerText += '.';

    }

})

operandButtons.forEach(btn => {
    let operand = btn.innerText;
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'whitesmoke';
        btn.style.color = 'orangered';
        
        if (operand === '+') {

            if (operator === '+') {
                y = displayDiv.innerText;
                displayDiv.innerText = add(Number(x),Number(y));
            }

            else if (operator === '-') {
                y = displayDiv.innerText;
                displayDiv.innerText = subtract(Number(x),Number(y));
            }

            else if (operator === 'x') {
                y = displayDiv.innerText;
                displayDiv.innerText = multiply(Number(x),Number(y));
            }

            else if (operator === '÷') {
                y = displayDiv.innerText;
                displayDiv.innerText = divide(Number(x),Number(y));
            }

            x = displayDiv.innerText;
            operator = '+'
            
            
            
        }

        else if (operand === '-') {

            if (operator === '+') {
                y = displayDiv.innerText;
                displayDiv.innerText = add(Number(x),Number(y));
            }

            else if (operator === '-') {
                y = displayDiv.innerText;
                displayDiv.innerText = subtract(Number(x),Number(y));
            }

            else if (operator === 'x') {
                y = displayDiv.innerText;
                displayDiv.innerText = multiply(Number(x),Number(y));
            }

            else if (operator === '÷') {
                y = displayDiv.innerText;
                displayDiv.innerText = divide(Number(x),Number(y));
            }
            x = displayDiv.innerText;
            operator = '-';
        }

        else if (operand === 'x') {

            if (operator === '+') {
                y = displayDiv.innerText;
                displayDiv.innerText = add(Number(x),Number(y));
            }

            else if (operator === '-') {
                y = displayDiv.innerText;
                displayDiv.innerText = subtract(Number(x),Number(y));
            }

            else if (operator === 'x') {
                y = displayDiv.innerText;
                displayDiv.innerText = multiply(Number(x),Number(y));
            }

            else if (operator === '÷') {
                y = displayDiv.innerText;
                displayDiv.innerText = divide(Number(x),Number(y));
            }

            x = displayDiv.innerText;
            operator = 'x'
        }

        else if (operand === '÷') {

            if (operator === '+') {
                y = displayDiv.innerText;
                displayDiv.innerText = add(Number(x),Number(y));
            }

            else if (operator === '-') {
                y = displayDiv.innerText;
                displayDiv.innerText = subtract(Number(x),Number(y));
            }

            else if (operator === 'x') {
                y = displayDiv.innerText;
                displayDiv.innerText = multiply(Number(x),Number(y));
            }

            else if (operator === '÷') {
                y = displayDiv.innerText;
                displayDiv.innerText = divide(Number(x),Number(y));
            }

            x = displayDiv.innerText;
            operator = '÷';
        }

        else {

            y = displayDiv.innerText;

            btn.style.backgroundColor = 'orangered';
            btn.style.color = 'whitesmoke';
            
            if (operator === '+') {
                displayDiv.innerText = add(Number(x),Number(y));
            }

            else if (operator === '-') {
                displayDiv.innerText = subtract(Number(x),Number(y));
            }

            else if (operator === 'x') {
                displayDiv.innerText = multiply(Number(x), Number(y));
            }

            else if (operator === '÷') {
                if (y === '0') {
                    displayDiv.innerText = 'ERROR';
                }

                else {
                    displayDiv.innerText = divide(Number(x), Number(y)); 
                }
            }

            operator = '=';

        }
        
    })

})
