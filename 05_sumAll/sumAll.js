const sumAll = function(num1, num2) {
    let i=+num1;
    let newNumber=0;
    if(num1<0 || num2<0 || (typeof num1 !== 'number') || (typeof num2 !== 'number')){
        return 'ERROR';
    }
    else{
    if(num1>num2){
        i=num2;
        while(num2<=i && i<=num1)
        {
            newNumber += i;
            i++
        }
        return newNumber;
    }
    while(num1<=i && i<=num2)
    {
        newNumber += i;
        i++
    }
    }   
    return newNumber;
};

// Do not edit below this line
module.exports = sumAll;
