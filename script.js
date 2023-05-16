function outerFunction() {
    let outerVar = "Hello";
  
    function innerFunction() {
      let innerVar = "World";
      console.log(outerVar + " " + innerVar);
    }
    
    innerFunction();
  }
  
  outerFunction();
  