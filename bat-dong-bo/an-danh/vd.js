//vd1
const
cong = function(x,y){
    return x + y;
}
console.log(cong(2,4));
//6

//vd2
setTimeout(function(){console.log("Đã hết 3 giây! (sau 3 giây)");},3000);
console.log("Đang chờ");

//vd3
setTimeout(() => {console.log("Đã hết 4 giây! (sau 4 giây)");},4000);
console.log("Đang chờ");

//vd4
//phương thức của mảng
const
numbers = [1, 2, 3, 4];
numbers.forEach(function(num)
{
    console.log(num + 1);
});
//Kết quả: 2, 3, 4, 5
//kiểu arrow function
//const 
//numbers = [1, 2, 3, 4]; 
//numbers.forEach(num => console.log(num + 1));
//Kết quả: 2, 3, 4, 5

//vd5
(function() {console.log("Hàm chạy ngay sau khi định nghĩa, không cần thao tác gọi hàm!");})();

//Hàm mũi tên
//Hàm không có tham số
const thongBao = () => {
    console.log("Chưa có thông báo, khi nào có thông báo sẽ thông báo!");
}
thongBao();

//Hàm có một tham số: x => { ... }
const binhPhuong = x => x * x;
console.log(binhPhuong(3)); // 9
///áp dụng trong duyệt mảng
//const numbers = [1, 2, 3, 4];
//numbers.forEach(num => console.log(num * num));
// Kết quả: 1, 4, 9, 16

//Nhiều có tham số: (x, y) => { ... }
//const cong = (x,y) => x + y;
//console.log(cong(2,4)); //6

//Từ khóa this trong hàm mũi tên
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // 'this' tham chiếu đến đối tượng Person
        console.log(this.age);
    }, 1000);
}
const p = new Person(); // Kết quả: 1, 2, 3, ... (tăng mỗi giây)

