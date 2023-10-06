// Example of function Hoisting in JS
function consoleNum() {
    console.log(num)
    var num = 10
  }
  
  consoleNum() // undefined
  
  // Why no error?
  
  // This is how runtime sees this
  /* {
    var num
    console.log(num)
    num = 9
  } */
  
  // If instead of var -> let, it will give an error as let values are not initialized