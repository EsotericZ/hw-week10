class Employee {
    constructor(roll, name, id, email) {
        this.roll = roll;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() { 
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;