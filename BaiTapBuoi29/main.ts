abstract class Employee {
  protected id: number;
  protected name: string;
  protected salary: number;

  constructor(id: number, name: string, salary: number) {
    if (salary <= 0) {
      throw new Error("Salary must be greater than 0");
    }
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getSalary(): number {
    return this.salary;
  }

  setSalary(salary: number): void {
    if (salary <= 0) {
      throw new Error("Salary must be greater than 0");
    }
    this.salary = salary;
  }

  abstract calculateSalary(): number;
}
class Developer extends Employee {
  private overtimeHours: number;

  constructor(
    id: number,
    name: string,
    salary: number,
    overtimeHours: number
  ) {
    super(id, name, salary);
    this.overtimeHours = overtimeHours;
  }

  setSalary(salary: number): void {
    if (salary <= 0) {
      throw new Error("Salary must be greater than 0");
    }
    this.salary = salary + this.overtimeHours * 50_000;
  }

  calculateSalary(): number {
    return this.salary + this.overtimeHours * 50_000;
  }
}
class Manager extends Employee {
  private teamSize: number;

  constructor(
    id: number,
    name: string,
    salary: number,
    teamSize: number
  ) {
    super(id, name, salary);
    this.teamSize = teamSize;
  }

  setSalary(salary: number): void {
    if (salary <= 0) {
      throw new Error("Salary must be greater than 0");
    }
    this.salary = salary + this.teamSize * 200_000;
  }

  calculateSalary(): number {
    return this.salary + this.teamSize * 200_000;
  }
}
const dev = new Developer(1, "An", 10_000_000, 10);
console.log(dev.calculateSalary()); 


const manager = new Manager(2, "Binh", 15_000_000, 5);
console.log(manager.calculateSalary());

