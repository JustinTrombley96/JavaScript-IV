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
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}
const dan = new Instructors({
    speciality: 'cats',
    faveLanguage: 'html',
    catchPhrase: 'I need closure unlike my divorce',
    name: 'Dan',
    age: 43,
    location: 'LA'
})
const jay = new Instructors({
    speciality: 'pm',
    faveLanguage: 'react',
    catchPhrase: 'Insert catchphrase here',
    name: 'Jay',
    age: 19,
    location: 'South Tier'
})
console.log(dan.demo("javascript"));
console.log(dan.grade(jose, 'javascript'));
console.log(jay.demo("CSS"));
console.log(jay.grade(justin, 'javascript'));
class Students extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}
const luis = new Students({
    previousBackground: 'construction',
    className: 'concussion 101',
    favSubjects: ['javascript', ' html', ' css'],
    name: 'Luis',
    age: 39,
    location: 'Chicago'
})
const jason = new Students({
    previousBackground: 'political advisor',
    className: 'politics',
    favSubjects: ['javascript', 'html', 'css'],
    name: 'Jason',
    age: 41,
    location: 'Maine'
})
console.log(luis.listsSubjects());
console.log(luis.PRAssignment(luis, 'javascript'));
console.log(luis.sprintChallenge(luis, 'javascript'));
console.log(jason.listsSubjects());
console.log(jason.PRAssignment(jason, 'javascript'));
console.log(jason.sprintChallenge(jason, 'javascript'));


class ProjectManagers extends Instructors {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(name, channel) {
        return `${name} announces to ${channel}, standup times!`
    }
    debugsCode(name, studentName, subject) {
        return `${name} debugs ${studentName}'s code on ${subject}.`
    }
}
const wes = new ProjectManagers({
    speciality: 'pm',
    faveLanguage: 'css',
    catchPhrase: 'Bam',
    name: 'Wes',
    age: 37,
    location: 'South Belt',
    gradClassName: 'Web 12',
    favInstructor: 'Dan'
})
const pete = new ProjectManagers({
    speciality: 'pm',
    faveLanguage: 'react',
    catchPhrase: 'Catch this',
    name: 'Pete',
    age: 45,
    location: 'Southern Wedge',
    gradClassName: 'Web 10',
    favInstructor: 'Jay'
})
console.log(wes.standup('Wes', 'PM_Wes'));
console.log(wes.debugsCode('Wes', 'luis', 'javascript'));
console.log(pete.standup('Pete', 'PM_Pete'));
console.log(pete.debugsCode('Pete', 'Luis', 'English'));