/*
Activity 2: Class Inheritance
Task 3: Define a class student that extends the person class. Add a property studentid and a method to return the student ID. Create an instance of the student class and log the student ID.
Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.
*/

// Task-3

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student1 = new Student('Charlie', 20, 'S12345');
console.log(student1.getStudentId());

// Task-4

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student2 = new Student('David', 22, 'S67890');
console.log(student2.getGreeting());
