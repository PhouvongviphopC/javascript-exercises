const getTheTitles = function(books) {
    //the map method to extract the title from each book object
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
