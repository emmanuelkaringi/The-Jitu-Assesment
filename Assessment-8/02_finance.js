// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary(){
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary();
        const bonus = annualSalary * 0.1;
        return annualSalary + bonus;
    }
}

const manager1 = new Manager("John Doe", 50000);
const manager2 = new Manager("Jane Doe", 60000);

console.log("Manager 1 annual salary:", manager1.calculateAnnualSalary());
console.log("Manager 2 annual salary:", manager2.calculateAnnualSalary());