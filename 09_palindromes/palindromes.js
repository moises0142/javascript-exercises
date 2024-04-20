const palindromes = function (sentence) {

    let sentenceNoPunctuation = removePunctuation(sentence) 
    let splitIntoArray = sentenceNoPunctuation.split('');
    let reverseArray = splitIntoArray.reverse();
    let reverseJoinedArray = reverseArray.join('');
    
    function removePunctuation(text){
        let punctuation = ['.',',','!',' '];
        let textLowerCase = text.toLowerCase();
        let result = '';
        for(let i = 0; i < text.length; i++){
            if(!punctuation.includes(text[i])){
                result += textLowerCase[i];
            }
        }
        return result;
    }
    if (reverseJoinedArray === sentenceNoPunctuation){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
