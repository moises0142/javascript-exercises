const fibonacci = function(num) {

    let array = [0,1];
    let error = 'OOPS';
    if(num>=0){
        for(let i=0; i<=num; i++){
            let finoNum =array[array.length-1]+array[i];
            array.push(finoNum);
        }
        array.pop();
        array.pop();
        return array[num];
    }
    else{
        return error;
    }
};

// Do not edit below this line
module.exports = fibonacci;
