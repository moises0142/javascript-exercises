const getTheTitles = function(books) {

    let newBooks = [];

    newBooks= books.map((book)=> book.title);
    return newBooks;

};

// Do not edit below this line
module.exports = getTheTitles;

 