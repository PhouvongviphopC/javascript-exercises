const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = people.reduce((oldest, person) => {
        const birthYear = person.yearOfBirth || 0;
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - birthYear;

        if (!oldest || age > oldest.age) {
            return { name: person.name, age: age };
        }
        return oldest;
    }, null);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
