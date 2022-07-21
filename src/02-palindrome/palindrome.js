const palindrome = ( text ) => {

  let inverter = text.split('').reverse().join('');

  return ( inverter === text );
};

// console.log( "¿Es un palindromo?" + palindrome( "oso" ) );

module.exports = palindrome;