// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};

const jose = new Person({
    name: 'Jose',
    age: 39,
    location: 'Chicago'
})
const justin = new Person({
    name: 'Justin',
    age: 22,
    location: 'Rochester'
})
console.log(jose.speak());
console.log(justin.speak());

class Instructors extends Person {
    constructor(attr) {
        super(attr);
        this.speciality = attr.speciality;
        this.faveLanguage = attr.faveLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${subject}.`
    }
    grade() {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}
const dan = new Instructors({
    speciality: 'cats',
    faveLanguage: 'html',
    catchPhrase: 'I need closure unlike my divorce'
})
const jay = new Instructors({
    speciality: 'pm',
    faveLanguage: 'react',
    catchPhrase: 'Insert catchphrase here'
})
// console.log(dan.demo());
//console.log(dan.grade());
// console.log(jay.demo());
//console.log(jay.grade());
class Students extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return ``
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}
const luis = new Students({
    previousBackground: 'construction',
    className: 'concussion 101',
    favSubjects: 'Virgil'
})
const jason = new Students({
    previousBackground: 'political advisor',
    className: 'politics',
    favSubjects: 'political science'
})
// console.log(luis.listsSubjects());
// console.log(luis.PRAssignment());
// console.log(luis.sprintChallenge());
// console.log(jason.listsSubjects());
// console.log(jason.PRAssignment());
// console.log(jason.sprintChallenge());


class ProjectManagers extends Instructors {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup() {
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}.`
    }
}
const wes = new ProjectManagers({
    previousBackground: 'english teacher',
    className: 'intro to horror',
    favSubjects: 'film'
})
const pete = new ProjectManagers({
    previousBackground: 'journalist',
    className: 'journalism 101',
    favSubjects: 'journalism'
})
// console.log(wes.standup());
// console.log(wes.debugsCode());
// console.log(pete.standup());
// console.log(pete.debugsCode());