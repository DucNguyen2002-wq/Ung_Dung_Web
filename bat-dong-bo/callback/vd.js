//hẹn giờ
setTimeout(() => {
    console.log("Đã hết 5 giây! (sau 5 giây)");
},5000);
console.log("Đang chờ");

//forEach, map, filter, reduce
const
numbers0 = [1, 2, 3, 4];
numbers0.forEach(num => console.log(num * num));
// Kết quả: 1, 4, 9, 16

//gọi API
function
getUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => callback(null, data)) // Thành công, gọi callback với dữ liệu
        .catch(error => callback(error, null)); // Lỗi, gọi callback với lỗi
}
getUser(1, function(error, user) {
    if (error) {
        console.error("Lỗi:", error);
    }
else {
        console.log("Tên người dùng:", user.name);
    }
});
// Kết quả: "Tên người dùng: Leanne Graham"

//tùy chỉnh logic
function
xuLyMang(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}
const numbers1 = [1, 2, 3];
const binhPhuong = xuLyMang(numbers1, x => x * x);
console.log(binhPhuong);
// Kết quả: [1, 4, 9]
const nhan2 = xuLyMang(numbers1, x => x * 2);
console.log(nhan2);
// Kết quả: [2, 8, 18]

//Callback hell
setTimeout(() => { console.log("Bước 1 hoàn tất");
    setTimeout(() => { console.log("Bước 2 hoàn tất");
        setTimeout(() => { console.log("Bước 3 hoàn tất");
        }, 1000);
    },1000);
}, 1000);