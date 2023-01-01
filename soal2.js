const checkTypeNumber = function (givenNumber) {
    if (givenNumber === undefined) return "Error: Bro where is the parameter?";
  
    const isNumber = typeof givenNumber === "number";
  
    if (!isNumber) return "Error: Invalid data type";
  
    if (givenNumber % 2 === 0) return "GENAP";
  
    return "GANJIL";
  };
  
  console.log(checkTypeNumber(10));
  console.log(checkTypeNumber(3));
  console.log(checkTypeNumber("3"));
  console.log(checkTypeNumber({}));
  console.log(checkTypeNumber([]));
  console.log(checkTypeNumber());
  