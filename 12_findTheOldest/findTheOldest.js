const findTheOldest = function(years) {

    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    years.map(person=> {
        if(person.yearOfDeath == undefined){
            person.yearOfDeath = currentYear;
            return person;
        }     
    });

    peopleSorted =years.sort((a,b)=>((a.yearOfDeath- a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)? -1:1));
    oldest = peopleSorted[0];
    return oldest;
}


// Do not edit below this line
module.exports = findTheOldest;
