/*
Activity 3: Static Methods and Properties
Task 5: Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
*/

// Task-5

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return 'Hello, nice to meet you!';
    }
}

console.log(Person.genericGreeting());

// Task-6

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    static getStudentCount() {
        return `Total students: ${Student.studentCount}`;
    }
}

const student3 = new Student('Eve', 21, 'S54321');
const student4 = new Student('Frank', 23, 'S98765');
console.log(Student.getStudentCount());
