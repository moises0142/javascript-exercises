const repeatString = function(string,num) {
let i=0;
let newString="";
if (num<0){
    newString="ERROR";
}

while(i<num){
    newString+= string;
    i++;
}
return newString;

};













// Do not edit below this line
module.exports = repeatString;
