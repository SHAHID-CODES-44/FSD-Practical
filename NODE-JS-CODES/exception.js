function DivideNumbers(a,b) {
    try {
        if(typeof a !== 'number' || typeof b !== 'number'){
          throw new Error("Invalid input: Both must be numbers");
        }
        if(b === 0){
            throw new Error("Divison by zero ?, * NOT POSSIBLE *");
        }
        let result = a/b;
        console.log("Result: ", result);
    }catch(error){
        console.log("Error Occured: ", error.message);
    }finally {
        console.log("Execution of DivideNUmbers() is complete.\n");
    }
}

//  Calling of function | Test Cases.
DivideNumbers(10,20);
DivideNumbers(0,20);
DivideNumbers(10,0);
DivideNumbers(100,50);