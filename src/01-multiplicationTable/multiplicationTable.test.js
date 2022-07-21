const multiplicationTable = require("./multiplicationTable");

describe('should test multiplicationTable function work properly', () => {

  test('should test if "multiplicationTable" is defined', () => {

    expect( multiplicationTable ).toBeDefined();
  });

  xtest('should first', () => {
    
    const tableOfFive = `Tabla del 5
    1 x 5 = 5
    2 x 5 = 10
    3 x 5 = 15
    4 x 5 = 20
    5 x 5 = 25
    6 x 5 = 30
    7 x 5 = 35
    8 x 5 = 40
    9 x 5 = 45
    10 x 5 = 50`;

    const result = multiplicationTable(5);
    console.log('aqui', result);
    expect( result ).toMatch( tableOfFive );
  });
});