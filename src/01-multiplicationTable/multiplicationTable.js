function multiplicationTable( number ) {
  
  let result = `Tabla del ${ number }\n`
 
  for( let i = 1; i <= 10; i++ ) {
    
    let multiplication = ( i * number );

    result += `${ i } x ${ number } = ${ multiplication }\n`
  };

  return result;
};

// console.log( multiplicationTable(15) );