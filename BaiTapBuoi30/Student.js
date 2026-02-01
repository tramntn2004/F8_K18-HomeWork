// Student.js
export default class Student {
  constructor(name) {
    this.name = name;
  }

  // update là tên chuẩn trong Observer Pattern
  // receive là tên dễ hiểu cho người mới
  update(message) {
    this.receive(message);
  }

  receive(message) {
    console.log(`${message} 👉 Học sinh ${this.name} nhận được`);
  }
}
