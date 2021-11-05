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