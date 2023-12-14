function getFullName(person) {                  
    const { firstName, lastName } = person;
    return `${firstName} ${lastName}`;
}

let person = {
    firstName: 'Johnny',
    lastName: 'Deep'
};
console.log(getFullName(person))

