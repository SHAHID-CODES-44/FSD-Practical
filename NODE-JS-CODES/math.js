const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    if (b === 0 || a === 0) {
        return "Cannot divide by zero.";
    }
    else {
        return a / b;
    }
}

module.exports.math = {
    add,
    sub,
    mul,
    div
};