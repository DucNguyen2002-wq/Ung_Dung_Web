/*Kích hoạt "strict mode" trong JavaScript. 
Strict mode giúp viết mã an toàn => đưa ra các lỗi khi sử dụng các tính năng không an toàn hoặc các thực hành không tốt*/
'use strict' 

const express = require('express') //Triệu gọi (thư viện) module express

const app = express(); //Tạo một đối tượng (instance, thể hiện) của Express => gán vào app
                       //Biến app sẽ được sử dụng để định nghĩa các route và xử lý các request

const port = process.env.PORT || 9000 //Định nghĩa cổng mà ứng dụng sẽ chạy trên đó. 
// process.env.PORT: biến môi trường
// || 9000: process.env.PORT không được thiết lập, cổng 9000 sẽ được sử dụng.

//Hàm app.use
////cấu hình static files (mở cái file chứa template)
//app.use(express.static(__dirname + '/public'));
/*app.use(): phương thức của đối tượng app (ứng dụng Express) => để đăng ký middleware có tên là express.static().
express.static(): middleware có sẵn trong Express => để gửi các tập tin tĩnh; tham số là đường dẫn đến thư mục chứa các tập tin tĩnh.
__dirname: một biến toàn cục trong Node.js, đại diện cho đường dẫn tuyệt đối đến thư mục chứa tập tin JavaScript hiện tại đang chạy (index.js).
/public: đường dẫn tương đối đến thư mục public trong thư mục dự án => để chứa các tập tin tĩnh (chứa template).*/

// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
    {
        console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
        // Chuyển tiếp sự kiện đến route handler
        next();
    });

// xu ly khi nguoi dung gui request toi web server
//Hàm app.get()
//app.get("/", (req, res) => { //Định nghĩa một route cho request GET đến đường dẫn "/"
    //Khi người dùng truy cập đường dẫn "/", hàm callback (req, res) => { ... } sẽ được thực thi.
    //req là đối tượng request, chứa thông tin về request từ người dùng.
    //res là đối tượng response => để gửi phản hồi về cho người dùng.
    //res.send('Chao ban den voi Ko phai shop cua teo!');
    //res.send('Chao ban den voi ctk!'); gửi một chuỗi "Chao ban den voi ctk!" về cho người dùng.

    //dùng phương thức query của req để lấy thông tin của GET request
    //const product = req.query.name;
    //const size = req.query.size;
    //dùng hàm send() của đối tượng res để gửi dữ liệu về client
    //res.send(`Bạn muốn mua ${product} cỡ ${size}`);

    //// Lấy thông tin từ query string
    //const mssv = req.query.MSSV;
    //const hoTen = req.query.HoTen;
    //const diem = req.query.DiemTrungBinh;
    //// Chuyển điểm trung bình từ chuỗi sang số rồi nhân 10
    //const diemSo = parseFloat(diem) * 10;
    //// Gửi phản hồi về client
    //res.send(
    //    `Chào bạn ${hoTen}<br>` +
    //    `MSSV: ${mssv}<br>` +
    //    `Điểm trung bình của bạn là: ${diemSo}<br>` +
    //    `Chúc bạn học chăm!`
        //Dùng URL http://localhost:9000/?MSSV=2000005&HoTen=Nguyễn%20Văn%20Anh%20Đức&DiemTrungBinh=6.9
    //);
//});

// Nối tiếp Route handler 
// Xử lý logic chính: thường chứa logic nghiệp vụ như truy vấn cơ sở dữ liệu, xử lý dữ liệu, hoặc trả về kết quả.
app.get('/profile', (req, res, next) =>
    {
          console.log('Kiểm tra quyền truy cập...');
          req.user = { name: "Ti"}; // Giả lập thêm dữ liệu
          next(); // Chuyển tiếp
        },
        (req, res) => { 
        res.send(`Chào bạn: ${req.user.name}`);
        }
      );

//Khởi động web server và lắng nghe các request đến cổng được chỉ định.
//Hàm app.listen()
app.listen(port, () => { //Khi server khởi động thành công, hàm callback ()=> { ... } sẽ được thực thi.
//console.log(`server dang chay tren cong ${port}`);` in ra một thông báo cho biết server đang chạy trên cổng nào.
    console.log(`server dang chay tren cong ${port}`);

});