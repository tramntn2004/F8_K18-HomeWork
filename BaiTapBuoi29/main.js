var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, name, salary, overtimeHours) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.overtimeHours = overtimeHours;
        return _this;
    }
    Developer.prototype.setSalary = function (salary) {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary + this.overtimeHours * 50000;
    };
    Developer.prototype.calculateSalary = function () {
        return this.salary + this.overtimeHours * 50000;
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, salary, teamSize) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.setSalary = function (salary) {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary + this.teamSize * 200000;
    };
    Manager.prototype.calculateSalary = function () {
        return this.salary + this.teamSize * 200000;
    };
    return Manager;
}(Employee));
var dev = new Developer(1, "An", 10000000, 10);
console.log(dev.calculateSalary());
var manager = new Manager(2, "Binh", 15000000, 5);
console.log(manager.calculateSalary());
