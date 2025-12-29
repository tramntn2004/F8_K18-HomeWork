// Phần 1
// 1
const name = "Nguyễn Thị Ngọc Trâm"
age = 22
isStudent = true
console.log(`Name: ${name}`)
console.log(`Age: ${age}`)
console.log(`Is student: ${isStudent}`)

// 2 
let a = 5
let b = 10
a = 15
b = 20
console.log(`a: ${a}`)
console.log(`b: ${b}`)

// Phần 2 
// const: không thể gán lại giá trị
// let: có thể gán lại giá trị 
// Sai

// Phần 3
// 100: Number
// TRUE: Boolean
// [1, 2, 3]: Array
// {name: "An", age: 20}: Object
// null: Object
// undefined: Undefined

const student = {
  name: "Nguyễn Thị Ngọc Trâm",
  age: 22,
  scores: 100
}
console.log(student)

// Phần 4
let x = "1000"
x = Number(x)
console.log(x)
console.log(typeof x)
let y = 1000
y = String(y)
console.log(y)
console.log(typeof y)
let z = true
z = String(z)
console.log(z)
console.log(typeof z)

// Phần 5
// Boolean(0): false
// Boolean(1): true
// Boolean(""): false
// Boolean("hello"): true
// Boolean(null): false
// Boolean([]): true

// Phần 6
const numbers = [4, 3, 1, 5, 1]
console.log(numbers[0])
console.log(number[4])
// Mảng là kiểu tham chiếu. Mảng numbers không chứa mảng mà chứa địa chỉ vùng nhớ của mảng. Khi gán const a = numbers, biến a sao chép địa chỉ vùng nhớ đó. Vì vậy khi a và numbers cùng trỏ tới 1 vùng nhớ thay đổi 1 bên thì bên kia cũng thay đổi.