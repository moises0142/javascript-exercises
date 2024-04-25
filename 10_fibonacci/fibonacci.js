const fibonacci = function(num) {

    let array = [0,1];
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
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
