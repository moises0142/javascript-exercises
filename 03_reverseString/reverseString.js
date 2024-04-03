const reverseString = function(word) {
    let i= 0;
    let wLength = word.length;
    let lettersSeparated="";
    let Reversed="";
    while( i <= wLength ){
        lettersSeparated += [word.charAt(i)];
        i++;
    }
    let b =1;
    while( b<=(wLength) ){
        letters = lettersSeparated[lettersSeparated.length - 1];
        lettersSeparated= lettersSeparated.slice(0,-1);
        Reversed +=letters;
        b++;
    }
    return Reversed;
}
// Do not edit below this line
module.exports = reverseString;
