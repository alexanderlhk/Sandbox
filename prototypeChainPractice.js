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