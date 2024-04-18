const add = function(num1,num2) {
  let sum = 0;
  sum = num1+num2;
  return sum;
	
};

const subtract = function(num1,num2) {

  let result = 0;
  result = num1-num2;
  return result;
};

const sum = function(num1) {
	  let sum = 0; 

    let numeral1 = num1.reduce((total,currentItem)=> total +currentItem,0);

    sum=numeral1;

    return sum;
};

const multiply = function(num1) {

  let result = num1.reduce((total,currentItem)=>total * currentItem,1);

  return result;
};

const power = function(num1,num2) {
	
  let result = Math.pow(num1,num2);
  return result;
  
};

const factorial = function(num1) {

  let array = [...new Array(num1)].map((num,i) => i+1);
  let result = array.reduce((total,currentItem)=>total * currentItem,1);
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
