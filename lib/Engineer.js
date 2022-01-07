const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(roll, name, id, email, github) {
        super(roll, name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;