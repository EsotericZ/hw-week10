const Employee = require('./Employee');

class Manager extends Employee {
    constructor(roll, name, id, email, officeNumber) {
        super(roll, name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;