let classA = ["An", "Binh", "Chi"];
let classB = classA;
classB[0] = "An Updated";
console.log(classA);
// Tại vì mảng trong JS là kiểu dữ liệu tham chiếu. Biến classA, classB không lưu trực tiếp dữ liệu mà chỉ lưu địa chỉ bộ nhớ. Nên khi thay đổi giá trị classB thì vẫn không làm thay đổi địa chỉ bộ nhớ.

let x = "10";
let y= 2;
console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("Hello" - y);

// 1. "+" có 2 chức năng: cộng số, nối chuỗi -> ưu tiên nối chuỗi
//    "-" chỉ dùng cho số, không dùng để nối chuỗi -> JS ép kiểu chuỗi chuyển sang kiểu số rồi thực hiện phép trừ.
// 2. "-" -> chuyển kiểu dữ liệu của chuỗi "Hello" sang số -> Nan -> Phép tính trở thành Nan - 2 => kết quả sẽ ra NaN.

let age;
let mathScore;
let isVip;

// Trường hợp 1:
age = 9;
mathScore = 10;
isVip = false;
let canEnter = (age >= 10 && mathScore  > 7) || isVip;
console.log(canEnter);

// Trường hợp 2
age = 9;
mathScore = 10;
isVip = true;
canEnter = (age >= 10 && mathScore  > 7) || isVip;
console.log(canEnter);
// !(age < 10) và age >= 10 tương tự nhau.


const laptop = {				
	brand: "Dell",			
	price: 1000,			
	spec: { ram: "8GB", ssd: "256GB" }			
};				
				
const myLaptop = laptop;				
myLaptop.brand = "Apple";				
				
const mySpec = laptop.spec;				
mySpec.ram = "16GB";				
				
console.log(laptop.brand);				
console.log(laptop.spec.ram);				

// Object lưu địa chỉ của biến. Nên khi gán biến mới chỉ sao chép địa chỉ bộ nhớ chứ không sao chép dữ liệu. Khi thay đổi bất kì biến nào -> giá trị thay đổi -> object gốc bị ảnh hưởng -> địa chỉ vẫn giữ nguyên.