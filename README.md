# Notes lý thuyết ứng dụng Web
## Giảng viên hướng dẫn:
* Thầy Lê Gia Công
## 
## Web back-end
### 1.1 Một số khái niệm  
- **Web:** Web hay WWW là từ viết tắt của World Wide Web là mạng lưới thông tin toàn cầu. Web hoạt động dựa trên hạ tầng là Internet. Web bao gồm rất nhiều các trang web kết nối lại với nhau, với thông tin đa dạng như văn bản, hình ảnh, âm thanh, video, và nhiều loại dữ liệu khác.
- **Trang web:** là một trang tài liệu trên hệ thống web. Trang web có thể chứa văn bản, hình ảnh, âm thanh, video, và các nội dung đa phương tiện khác.  
- **Thêm một số thông tin về trang web:**
  - Ở mức đơn giản nhất, trang web được tạo ra bằng ngôn ngữ đánh dấu siêu văn bản HTML. Tuy nhiên, trong thực tế, để tạo ra trang web cần sử dụng thêm các ngôn ngữ khác, như CSS, JavaScript; và một trong các ngôn ngữ lập trình phía server như Python, JavaScript, C#, PHP, Go, Java, Ruby.
  - Mã nguồn của trang web được lưu trên máy chủ (máy web server).
  - Mỗi trang web có một địa chỉ URL duy nhất. URL là một chuỗi ký tự, xác định vị trí của một trang web trên Internet.
  - Trang web có thể được dùng để: cung cấp thông tin, bán hàng, chia sẻ ý kiến, kết nối mọi người, giáo dục, quản lý, giải trí.
- **Để xem mã nguồn của một trang web bằng trình duyệt:**
  - Mở một trang web bằng trình duyệt -> Chuột phải vào vùng nội dung trang web -> Chọn mục View page source để xem mã nguồn
Hoặc,  
  - Mở một trang web bằng trình duyệt -> Chuột phải vào vùng nội dung trang web -> Chọn mục Inspect -> Vào các tab: Elements, Styles, Sources để xem mã nguồn

- **Website:** là một tập hợp nhiều trang web có liên quan đến nhau, có một địa chỉ URL duy nhất.  
![image](https://github.com/user-attachments/assets/9b4d3272-e5ca-4864-b677-289016d125fe)  
- Có thể truy cập vào website của Wikipedia, Python, React để quan sát địa chỉ URL của website và địa chỉ URL các trang web của mỗi website.  
- Mã nguồn của website chính là mã nguồn của mỗi trang web thành viên, được đặt trên máy web server.  
- Có thể truy cập các website bằng mạng công cộng (Internet) hoặc mạng nội bộ (LAN), thậm chí trên máy cục bộ thông qua địa chỉ URL của nó.
- **Ứng dụng web:** là một loại ứng dụng mà người dùng có thể truy cập và sử dụng thông qua Internet, mạng nội bộ, hoặc trên máy cục bộ bằng trình duyệt web.
- **Một số đặc điểm của ứng dụng web:**
  - Mã nguồn của ứng dụng web được lưu trữ trên máy chủ (server), còn giao diện được hiển thị trên trình duyệt.
  - Ứng dụng hoạt động dựa trên mô hình client-server.
  - Không có sự phân biệt rõ ràng giữa website và ứng dụng web.
- **Một số loại ứng dụng web:**
  - Thư điện tử
  - Bán hàng trực tuyến
  - Diễn đàn
  - Nhật ký mạng (blog)
  - Bản đồ
  - Quản lý nhân lực
  - Quản lý y tế và chăm sóc sức khỏe
- **Sự khác nhau giữa website và ứng dụng web:**

| Website                                                                 | Ứng dụng web                                                               |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------|
| – Người dùng tương tác, nội dung chủ yếu từ nhà phát triển              | – Dữ liệu chủ yếu do người dùng đóng góp                                  |
| – Ít phức tạp, dễ phát triển                                            | – Giống ứng dụng máy tính, phát triển phức tạp và yêu cầu nhiều kỹ năng hơn |

### 1.2 Phát triển ứng dụng web
- Phát triển ứng dụng web là quá trình tạo ra ứng dụng web.  
- Tạo ra ứng dụng web cũng là quá trình tạo ra ứng dụng máy tính hay phần mềm nói chung, vì vậy nó cũng cần trải qua các giai đoạn cơ bản như:
  - Lập dự án
  - Xác định yêu cầu
  - Phân tích
  - Thiết kế
  - Lập trình
  - Triển khai
  - Bảo trì và cập nhật
![image](https://github.com/user-attachments/assets/317d7f44-134e-4455-b645-a996f944ccdf)
#### 1.2.1 Một số cách để tạo ra ứng dụng web
- Sử dụng hệ quản trị nội dung
- Sử dụng framework và thư viện hỗ trợ
- Viết thuần bằng ngôn ngữ lập trình mà không sử dụng framework và thư viện hỗ trợ
![image](https://github.com/user-attachments/assets/ca75000b-3de3-4c8a-b0ef-f649833dc2cf)
- Hệ quản trị nội dung (Content Management System - CMS) là một phần mềm hoặc một tập hợp các phần mềm được sử dụng để tạo, quản lý và sửa đổi nội dung trên một trang web mà không cần đến các kiến thức chuyên sâu về lập trình. Ví dụ: WordPress, Wix, Joomla, Drupal, Magento, Shopify, WordPress, Blogger...
- **Các chức năng chính của một CMS:**
  - Tạo và quản lý nội dung: cho phép người dùng dễ dàng tạo, chỉnh sửa, xóa và sắp xếp nội dung (văn bản, hình ảnh, video) trên trang web
  - Quản lý người dùng: cho phép phân quyền truy cập và quản lý các tài khoản người dùng khác nhau, ví dụ: quản trị viên, nhân viên, biên tập viên, tác giả.
  - Quản lý giao diện: cho phép tùy chỉnh giao diện của trang web thông qua các mẫu giao diện (template), các kho giao diện (theme)
  - Quản lý các mô-đun, các tiện ích bổ sung: cho phép mở rộng chức năng của trang web thông qua việc cài đặt các mô-đun (module) hoặc các tiện ích bổ sung (plugin)
  - Tối ưu hóa SEO: hỗ trợ các công cụ và tính năng để tối ưu hóa công cụ tìm kiếm (SEO) cho trang web, giúp trang web dễ dàng được tìm thấy trên các công cụ tìm kiếm như Google
- Ưu điểm của CMS:
  - Dễ sử dụng, dễ quản lý, tiết kiệm thời gian
  - Không cần kiến thức lập trình chuyên sâu
  - Linh hoạt trong việc lựa chọn giao diện, các mô-đun chức năng
  - Tối ưu SEO
  - Chi phí phát triển ứng dụng thấp
- Nhược điểm của CMS:
  - Vấn đề bảo mật, tấn công hệ thống
  - Hiệu suất, tốc độ thực thi có thể chậm nếu không được tối ưu đúng cách; mã nguồn lớn, dư thừa
  - Khả năng tùy chỉnh chức năng thấp
  - Phụ thuộc hạ tầng, công nghệ, chức năng vào nhà cung cấp
- **Frameword và thư viện hỗ trợ:**
  - Frontend: jQuery, Bootstrap, D3, React, Angular, Vue, Svelte
  - Backend: Express.js (Nodejs), Django, Flask (Python), ASP.NET (C#), Spring Boot (Java), Laravel (PHP), Ruby on Rails (Ruby), Gin, Echo (Go, Golang)
- Ưu điểm khi sử dụng framework và thư viện:
  - Tăng tốc độ phát triển
  - Cải thiện chất lượng viết mã
  - Tăng cường bảo mật
  - Dễ dàng bảo trì và mở rộng
  - Cộng đồng hỗ trợ lớn
- Nhược điểm của việc sử dụng framework:
  - Để sử dụng một framework hiệu quả, bạn cần phải dành thời gian để học và làm quen với nó
  - Một số framework có thể làm tăng kích thước của ứng dụng, các ứng dụng quá đơn giản thì không nhất thiết phải dùng framework
  - Một số framework có thể hạn chế khả năng tùy chỉnh của bạn
- **Viết thuần:** Việc phát triển ứng dụng web bằng cách tự viết mã từ đầu (hay còn gọi là "viết thuần”, “viết tay") cũng là một cách bạn có thể sử dụng để tạo ra ứng dụng web. Bạn sẽ không sử dụng bất kì framework hay thư viện hỗ trợ nào. Các ngôn ngữ bạn sẽ sử dụng:
  - Frontend: HTML, CSS, JavaScript
  - Backend: một trong các ngôn ngữ lập trình: JavaScript, Python, C#, PHP, Java, Go, Ruby
- Ưu điểm:
  - Toàn quyền kiểm soát và tùy chỉnh mã nguồn, không bị bất kì ràng buộc hay giới hạn nào
  - Tối ưu hóa mã nguồn để ứng dụng chạy nhanh và hiệu quả nhất
  - Hiểu rất sâu và nắm vững các ngôn ngữ lập trình, kỹ thuật lập trình, kỹ thuật bảo mật, công nghệ web
  - Tư duy logic và giải quyết vấn đề tố
- Nhược điểm:
  - Tốn thời gian, công sức
  - Khối lượng công việc rất lớn
  - Yêu cần kiến thức chuyên môn cao, toàn diện
  - Khó bảo trì và mở rộng
  - Chi phí cao
### 1.3 Web Server
- Web server (máy chủ web) là một máy tính (hoặc một phần mềm), được sử dụng để lưu trữ và cung cấp toàn bộ nội dung cho một website/ứng dụng web (tạm gọi chung là ứng dụng web). Một số chức năng chính của web server:
  - Lưu trữ các tập tin của ứng dụng web: web server lưu trữ tất cả các tập tin và dữ liệu tạo nên ứng dụng web, ví dụ các tập tin HTML, hình ảnh và video.
  - Nhận yêu cầu (request): khi người dùng truy cập một ứng dụng web, trình duyệt web của họ sẽ gửi một request tới web server. Web server sẽ tiếp nhận request này.
  - Xử lý request: sau khi nhận được request, web server sẽ thực hiện xử lý request. Việc xử lý request có thể là: đọc nội dung các tập tin, thực thi các đoạn mã nguồn, kết nối và làm việc với cơ sở dữ liệu.
  - Gửi phản hồi (response): sau khi xử lý xong request, web server sẽ gửi response cho trình duyệt của người dùng, sau đó, trình duyệt sẽ hiển thị kết quả response cho người dùng
  - Một số phần mềm web server phổ biến: Apache, Nginx, NodeJS, IIS, Tom cat, Lighttpd
  - Kiến trúc của 1 web server
![image](https://github.com/user-attachments/assets/f9d63887-c0bd-458a-8541-ff6bf807daf2)
- Một máy web server có các đặc điểm sau:
  - Phần cứng là một máy server chuyên dụng, cấu hình mạnh, khả năng chịu lỗi cao, chạy liên tục
  - Hệ điều hành dành cho máy chủ
  - Có cài đặt phần mềm web server (HTTP server - Apache, Nginx, IIS), có thể có hệ quản trị cơ sở dữ liệu (Database), trình dịch và thực thi mã nguồn (Scripting Language)
#### 1.3.1 Nginx
- Nginx là phần mềm web server mã nguồn mở
- **Một số lệnh quan trọng của nginx**
  - start nginx: khởi chạy Nginx
  - nginx -s stop: tắt Nginx ngay lập tức
  - nginx -s quit: không chấp nhận kết nối mới, chờ các client hoàn thành tác vụ dang dở rồi mới tắt Nginx
  - nginx -s reload: thay đổi cấu hình, khởi chạy lại worker process với cấu hình mới
  - nginx -s reopen: mở lại các tập tin log
### 1.4 NodeJS và NPM
#### 1.4.1 NodeJS là gì?
- Nodejs là một môi trường để chạy mã nguồn JavaScript đa nền tảng, mã nguồn mở, miễn phí. Bạn có thể dùng Nodejs để tạo server (web server), ứng dụng web, các công cụ dòng lệnh và các ứng dụng khác.
- Là một lập trình viên, bạn sẽ lập trình một ứng dụng bằng ngôn ngữ JavaScript thuần hoặc dùng một JavaScript framework (ví dụ Express), sau đó chuyển mã nguồn cho Nodejs dịch mã, thực thi chương trình, xuất kết quả
![image](https://github.com/user-attachments/assets/0e3891c6-33b3-4f39-98fd-cbccb076c041)
#### 1.4.2 Các thành phần của NodeJS
  - V8 để dịch và thực thi mã JavaScript
  - HTTP module để tạo web server (hay còn gọi là HTTP server)
  - Chương trình để quản lý gói và các thư viện có tên là NPM
  - Các module, thư viện để lập trình ứng dụng web
#### 1.4.3 NPM
- Vì số lượng các thư viện cần tải trong quá trình phát triển web là rất nhiều nên không thể quản lý thủ công mà cần tới phần mềm để quản lý. NPM chính là công cụ để quản lý các thư viện mà chúng ta sử dụng khi làm ứng dụng web.
- NPM (Node Package Manager) là công cụ đi kèm với Nodejs, được sử dụng để quản lý các thư viện dùng trong ứng dụng web.
- NPM gồm 3 thành phần
  - Website: địa chỉ là https://www.npmjs.com/, bạn vào trang này để tìm kiếm các gói thư viện cần dùng
  - Công cụ dòng lệnh (Command Line Interface - CLI): lập trình viên sử dụng công cụ này để tương tác với npm, để cài đặt, sử dụng và quản lý các thư viện
  - Registry: là kho lưu trữ các thư viện
### 1.5 Cấu hình web server trong NodeJS
#### 1.5.1 Package.json
- Trong một ứng dụng viết trên Nodejs, tập tin package.json cũng đóng vai trò như một cuốn sổ tay, là “sổ tay ứng dụng”, cũng có thể gọi là “hồ sơ ứng dụng” (manifest) Tập tin package.json chứa thông tin sau:
  - Thông tin mô tả về ứng dụng
  - Quản lý các phụ thuộc (quản lý các thư viện sử dụng trong ứng dụng)
  - Các lệnh chạy (scripts), định nghĩa ngắn gọn các lệnh để điều khiển ứng dụng
  - Đầu vào (entry point, main) của dự án, cho biết tập tin đầu tiên được triệu gọi
- Dùng NPM để tạo ra file package.json (sử dụng terminal của vs code cho tiện)
  - B1: Mở terminal của vscode và trỏ tới thư mục dự án
  - B2: Chạy lệnh npm init -y (Nếu có kết quả như ảnh thì là đúng)
![image](https://github.com/user-attachments/assets/2beeb5a9-b369-4819-89c6-dc524de1e272)
  - Lệnh npm init -y: được sử dụng để khởi tạo một dự án Node.js mới với file package.json mà không cần phải trả lời các câu hỏi cấu hình thủ công. Nếu không có tham số -y thì sẽ hiện một loạt các câu hỏi về thông tin dự án (như tên dự án, phiên bản, mô tả, tác giả...). Tùy chọn -y là viết tắt của yes, khi có tùy chọn này thì npm sẽ tự động điền các giá trị mặc định cho tất cả các câu hỏi này và tạo ngay tập tin package.json mà không yêu cầu sự can thiệp của bạn.
#### 1.5.2 Cài đặt PNPM, Express, Web server, Nodemon
- Cài đặt PNPM(Performant Node Package Manager): Gõ lệnh: npm install -g pnpm@latest-10
  - npm install: lệnh của npm, dùng để cài đặt các gói, thư viện, công cụ
  - g: tham số global (cài đặt ở phạm vi toàn cục)
  - pnpm: tên công cụ cần cài đặt
  - @latest-10: phiên bản mới nhất của bản 10-x
- Cài đặt Express: Gõ lệnh trong terminal của vscode: pnpm i -s express
  - i có nghĩa là cài đặt (install)
  - s là viết tắt của --save, với tùy chọn này, thông tin của Express sẽ được thêm vào phần dependencies trong package.json, thư viện Express sẽ được lưu trong thư mục node_modules của dự án.
  - Sau khi cài được Express, mở tập tin package.json, sẽ thấy thông tin của Express được lưu trong phần dependencies. Trong thư mục dự án cũng xuất hiện thêm thư mục node_modules. Thư mục node_modules này dùng để lưu trữ các gói mà dự án sẽ sử dụng. Như vậy, Express cũng được lưu trong node_modules.
![image](https://github.com/user-attachments/assets/4fa7534e-57cf-4d47-8cae-71af870c2236)
- Tạo file index.js và khai báo như sau để tạo web server:
```javascript
'use strict'
const express = require('express')
const app = express();
const port =
process.env.PORT || 9000
// xu ly khi nguoi dung gui request toi web server
app.get("/", (req, res) => {
    res.send('Chao ban den voi TeoShop!!');
})
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
})
```
- Sau đó sử dụng lệnh node index.js để khởi chạy web server, để tắt web server, chuyển dấu nhắc chuột vào cửa sổ dòng lệnh, dùng tổ hợp phím Ctrl + C.
- Cài đặt Nodemon: Trong quá trình làm việc với web server, mỗi lần thay đổi mã nguồn của tập tin (index.js), chúng ta đều phải tắt web server (Ctrl + C), và chạy lại. Mục đích để web server cập nhật lại mã nguồn. Điều này khá bất tiện.
- Sử dụng câu lệnh để cài đặt: npm install --g nodemon
- Vào terminal gõ: nodemon (Thay vì dùng lệnh node index.js thì gõ nodemon mỗi lần chạy web server)
#### 1.5.3 Thông tin thêm
- Vậy package.json và node_modules khác nhau như nào?
  - package.json là một file mô tả dự án với mục đích chính là lưu thông tin về project, thư viện và ứng dụng
  - node_modules là một thư mục chứa code thư viện (Nơi chứa mã nguồn của các package đã cài qua npm)
- Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally)? Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở đâu?
  - Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally): Trong câu lệnh cài đặt có quy ước -g (Cài đặt global) còn nếu không có thì mặc định là local
  - Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở đâu: Cài đặt cục bộ thì sẽ lưu trong node_modules còn cài đặt toàn cục thì lưu trong thư mục golbal của npm
### BÀI TẬP  

- **Câu 1.1** Liệt kê 3 gói thuê bao (tên gói, giá tiền) của 3 nhà cung cấp kết nối Internet tại Việt Nam.
  - VNPT (Gói Home NET 1, 165.000 VNĐ/tháng)
  - Viettel (Gói SUN1, 180.000 VNĐ/tháng (ngoại thành), 220.000 VNĐ/tháng (nội thành))
  - FPT (Gói GIGA, 165.000 VNĐ/tháng)

- **Câu 1.3** Phát biểu nào không đúng khi nói về web, trang web và website?
  - A. Web là hệ thống thông tin toàn cầu
  - B. Web được tạo thành nhờ các trang web và sự liên kết giữa chúng
  - **C. Một trang web chứa nhiều website**
  - D. Một website chứa nhiều trang web có liên quan đến nhau

- **Câu 1.4** Phát biểu nào không đúng khi nói về website và ứng dụng web?
  - A. Không có sự phân biệt rõ ràng giữa website và ứng dụng web
  - B. Một website và ứng dụng web có một địa chỉ URL để truy cập
  - C. Website và ứng dụng web hoạt động dựa trên mô hình client-server
  - **D. Chỉ cần sử dụng HTML và CSS là có thể tạo ra được ứng dụng web**
