const test = require('node:test');
const assert = require('node:assert/strict');
const functions = require("../public_html/assets/functions");

test("Days in month", () => {
    assert.equal(functions.getDaysInMonth(2, 2020), 29);
});

//send tuesday march 9th 2020
test("Pico y Placa day", () => {
    assert.equal(functions.checkData('06-09-2020', 'PCG-1304'), true);
});

//send tuesday march 9th 2020
test("Not Pico y Placa day", () => {
    assert.equal(functions.checkData('06-09-2020', 'PCG-9466'), false);
});


