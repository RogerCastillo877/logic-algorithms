const palindrome = require("./palindrome");

test('should test if "palindrome" is defined', () => {

  expect( palindrome ).toBeDefined();
});

test('should test if text is palindrome', () => {

  expect( palindrome( "otto" ) ).toEqual( true );
});

test('should test if text is not palindrome', () => {

  expect( palindrome( "Rocas" ) ).toEqual( false );
});
