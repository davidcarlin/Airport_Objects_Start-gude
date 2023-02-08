class Person {

    constructor(name, bags) {
        this.name = name;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag);
    }
}

const newPerson = new Person("David");
const newBag = new Bag(25);

newPerson.addBag(newBag);

module.exports = Person