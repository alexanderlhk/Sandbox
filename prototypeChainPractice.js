const myObject = {
    name: "Alex",
    greet() {
        return `Greetings, ${this.name}`;
    }
}

console.log(myObject.greet());

console.log(Object.getPrototypeOf(myObject));


// Composition practice (not using classes and inheritance) - for flexibility and not following strict inheritance tree (https://www.youtube.com/watch?v=nnwD5Lwwqdo&t=106s)

function swimmer({name}) {
    return {
        swim: () => console.log(`${name} swam.`)
    }
}

function attackAndWalker({name}) {
    return {
        attack: () => console.log(`${name} attacked.`),
        walk: () => console.log(`${name} walked.`)
    }
}

function flyer({name}) {
    return {
        fly: () => console.log(`${name} flew.`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = {name: name}

    return {
        ...monster,
        ...swimmer(monster),
        ...attackAndWalker(monster)
    }   
}

function flyingSwimmingMonsterCreator(name) {
    const monster = {name: name}

    return {
        ...monster,
        ...swimmer(monster),
        ...attackAndWalker(monster),
        ...flyer(monster)
    }   
}

const objMonster = flyingSwimmingMonsterCreator('MonsterAlex')
objMonster.attack();
objMonster.walk();
objMonster.swim();
objMonster.fly();

// Optional Chaining ES2020
console.log(myObject?.greet()) // Greetings, Alex
console.log(myObject?.fly) // undefined
console.log(myObject.flyer)

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

const personPrototype = {
    greet() {
        console.log('Hello!');
    },
};

const carl = Object.create(personPrototype);
carl.greet(); // Hello!

// Using Constructors

const personPrototype2 = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype2);

personPrototype2.greet(); // Hello, ny name is undefined

const alex = new Person('Alex');
alex.greet(); // Hello, my name is Alex