const partTime = {
  id: 2,
  name: "Binh",
  salary: 20,
  hoursWorked: 40
}
interface PartTime {
  id: number
  name: string
  salary: number
  hoursWorked: number
}

const newPartTime: PartTime = {
  ...partTime,
  hoursWorked: 45
}

interface Employee {
  id: number
  name: string
  salary: number
  getSalary(): number
}
class FullTimeEmployee implements Employee {
  id: number
  name: string
  salary: number

  constructor(id: number, name: string, salary: number) {
    this.id = id
    this.name = name
    this.salary = salary
  }

  getSalary(): number {
    return this.salary
  }
}
class PartTimeEmployee implements Employee {
  id: number
  name: string
  salary: number
  hoursWorked: number

  constructor(
    id: number,
    name: string,
    salary: number,
    hoursWorked: number
  ) {
    this.id = id
    this.name = name
    this.salary = salary
    this.hoursWorked = hoursWorked
  }

  getSalary(): number {
    return this.salary * this.hoursWorked
  }
}
function calculateTotalSalary(employees: Employee[]): number {
  let total = 0

  for (let emp of employees) {
    total += emp.getSalary()
  }

  return total
}
const fullTime = new FullTimeEmployee(1, "An", 1000)
const partTimeEmp = new PartTimeEmployee(2, "Binh", 20, 45)

const employees: Employee[] = [fullTime, partTimeEmp]

const totalSalary = calculateTotalSalary(employees)

console.log("Tổng lương:", totalSalary)
