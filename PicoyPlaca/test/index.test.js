const functions = require("../public_html/assets/functions");

test("Days in month", () => {
    expect(functions.getDaysInMonth(2, 2020)).toBe(29);
});

//send tuesday march 9th 2020
test("Pico y Placa day", () => {
    expect(functions.checkData('06-09-2020', 'PCG-1304')).toBe(true);
});

//send tuesday march 9th 2020
test("Not Pico y Placa day", () => {
    expect(functions.checkData('06-09-2020', 'PCG-9466')).toBe(false);
});


