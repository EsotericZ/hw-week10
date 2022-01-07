const Employee = require('./Employee');

class Intern extends Employee {
    constructor(roll, name, id, email, school) {
        super(roll, name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;