
export default class ClassRoom {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    this.students = this.students.filter(s => s !== student);
  }

  notify(message) {
    this.students.forEach(student => {
      student.update(message);
    });
  }

  postAnnouncement(message) {
    console.log(`[${this.name}] Thông báo mới:\n`);
    this.notify(message);
  }
}
