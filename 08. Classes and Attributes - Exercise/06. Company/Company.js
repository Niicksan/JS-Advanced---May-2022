class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == null || name == undefined || name == '' ||
            salary == null || salary == undefined || salary == '' || salary < 0 ||
            department == null || department == undefined || department == '') {
            throw new Error('Invalid input!');
        } else {
            this.departments[department].name = name;
            this.departments[department].salary = salary;
            this.departments[department].position = position;

            console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
        }
    }


}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
