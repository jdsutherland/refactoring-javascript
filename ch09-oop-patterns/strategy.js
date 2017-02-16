// context
class Person {
  constructor(strategy) {
    this.strategy = strategy;
  };
  log(number) {
    console.log(this.strategy(number))
  };
}

// strategy
const binary = {
  aware(number) {
    return Number('0b' + number);
  },
  oblivious(number) {
    return number;
  }
};

const personOne = new Person(binary.aware);
const personTwo = new Person(binary.oblivious);
[personOne, personTwo].forEach(person => person.log(10));
