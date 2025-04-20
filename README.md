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

### 1.6 Local và Global, Dependencies và devDependencies
#### 1.6.1 Local và Global
- Cài đặt gói kiểu cục bộ Sử dụng cú pháp '''npm install <package_name>'''
- Sau khi cài đặt xong thì thông tin về gói này sẽ được ghi lại trong tập tin package.json, mục dependencies
- Khi một gói được cài đặt theo kiểu cục bộ, mã nguồn của gói sẽ được lưu trong dự án, tại thư mục node_modules.
- Gỡ bỏ một gói cục bộ Dùng lệnh npm uninstall <package_name> để gỡ cài đặt 1 gói cục bộ
- Sau khi gỡ bỏ gói, mục dependencies trong package.json cũng được cập nhật lại.
- Cài đặt một gói kiểu toàn cục (global) Dùng lệnh npm install <package_name> -g -g là viết tắt của global
- Vị trí lưu trữ gói toàn cục Dùng lệnh npm root -g để biết được vị trí lưu trữ các gói toàn cục
  - Dùng lệnh npm ls -g --depth 0 để xem được các gói toàn cục đã cài đặt
  - npm ls: để liệt kê các gói đã được cài đặt trên máy, ls là viết tắt của list
  - -g là cờ báo, để chỉ hiển thị các gói kiểu toàn cục (global)
  - --depth 0: chỉ hiển thị các gói toàn cục cấp cao nhất (top-level), không hiển thị các gói là con-cháu (sub-dependencies) của gói cấp cao nhất
- Nên cài đặt gói theo kiểu cục bộ hay toàn cục
- Các trường hợp nên cài gói cục bộ:
  - Khi gói chỉ cần thiết cho một dự án cụ thể và không cần sử dụng ở phạm vi rộng hơn
  - Khi bạn muốn các phụ thuộc (dependencies) của dự án được quản lý chặt chẽ trong tập tin package.json, giúp dễ dàng tái tạo môi trường phát triển ở máy khác (ví dụ: khi chia sẻ mã nguồn hoặc triển khai)
  - Khi gói là một phần của ứng dụng hoặc thư viện mà bạn đang phát triển (ví dụ: express)
- Các trường hợp nên cài gói toàn cục:
  - Khi gói là công cụ dòng lệnh (CLI) hoặc tiện ích mà bạn muốn sử dụng ở bất kỳ đâu trong hệ thống, không phụ thuộc vào dự án cụ thể (ví dụ: nodemon)
  - Khi bạn cần chạy gói như một lệnh độc lập từ cửa sổ dòng lệnh mà không cần viết script trong package.json
- Một số lưu ý
  - Ưu tiên cài cục bộ khi có thể: ngay cả với các công cụ dòng lệnh như eslint hay prettier, bạn vẫn có thể cài cục bộ và chạy chúng thông qua script trong package.json. Điều này giúp đảm bảo mọi thành viên trong nhóm hoặc môi trường CI/CD sử dụng cùng phiên bản
  - Khi nào cần cả hai? Đôi khi bạn muốn cài toàn cục để tiện sử dụng cá nhân, nhưng vẫn cài cục bộ cho dự án để đảm bảo tính nhất quán
  - Tránh lạm dụng cài toàn cục: chỉ nên cài toàn cục cho các công cụ thực sự cần thiết ở phạm vi hệ thống. Việc cài quá nhiều gói toàn cục có thể dẫn đến khó quản lý và xung đột phiên bản.

#### 1.6.2 Dependencies và devDependencies
- Chỉ có các gói được cài đặt theo kiểu cục bộ (trong dự án), thì mới được cập nhật thông tin trong package.json, trong mục dependencies và devDependencies.
- Như vậy, dependencies và devDependencies là hai phần trong tập tin package.json, dùng để quản lý các gói mà dự án của bạn phụ thuộc vào. Sự khác biệt giữa chúng nằm ở mục đích sử dụng và giai đoạn mà chúng được yêu cầu trong vòng đời của dự án
- Các gói nằm trong mục dependencies
  - Là các gói cần thiết để ứng dụng của bạn chạy trơn tru trong môi trường sản xuất, triển khai (production). Đây là những phụ thuộc "cốt lõi" mà mã nguồn của bạn trực tiếp sử dụng để hoạt động.
  - Là một phần không thể thiếu trong xử lý logic của ứng dụng, ví dụ: framework express, thư viện xử lý HTTP, truy vấn cơ sở dữ liệu
  - Khi người khác cài đặt dự án của bạn bằng lệnh npm install, các gói trong dependencies sẽ được tải về, vì chúng cần thiết để chạy ứng dụng
  - Cách cài đặt một gói là dependencies Dùng lệnh npm install <package-name>
- Các gói nằm trong mục devDependencies
  - Là các gói chỉ cần thiết trong quá trình phát triển ứng dụng (development) hoặc kiểm thử (testing), không cần thiết khi ứng dụng chạy ở môi trường sản xuất, triển khai (production)
  - Khi gói là công cụ hỗ trợ lập trình viên, như công cụ kiểm tra cú pháp (linter), trình biên dịch (transpiler), framework kiểm thử (testing framework), hoặc công cụ khởi động server trong lúc thử nghiệm (nodemon)
  - Khi cài đặt ứng dụng lên môi trường triển khai (production), các gói trong devDependencies sẽ không được cài đặt, giúp giảm dung lượng và tăng hiệu suất
- Cách cài đặt một gói là devDependencies Dùng lệnh npm install <package-name> --save-dev

### 1.7 Một số chủ đề JavaScript
#### 1.7.1 Lập trình đồng bộ trong JavaScript
- Lập trình đồng bộ (synchronous programming) là kỹ thuật lập trình mà các lệnh (statements) được thực thi tuần tự, theo thứ tự từ trên xuống dưới. Mỗi lệnh phải hoàn thành trước khi lệnh tiếp theo được thực thi
- **Đặc điểm:**
  - Thứ tự thực thi rõ ràng: các lệnh chạy theo thứ tự được viết trong mã nguồn
  - Chặn luồng (blocking): một lệnh chưa xong thì lệnh tiếp theo không thể chạy
  - Phù hợp với tác vụ đơn giản: các tác vụ không cần chờ đợi (như tính toán cơ bản) thường được xử lý đồng bộ
- **Ưu điểm:**
  - Dễ hiểu và dễ debug
  - Phù hợp với tác vụ nhanh
- **Nhược điểm:**
  - Gây chặn luồng (blocking)
  - Không hiệu quả cho các tác vụ I/O
  - Không tận dụng được khả năng xử lý song song
  - Không thích hợp cho ứng dụng lớn hoặc real time

#### 1.7.2 Hàm ẩn danh
- Hàm ẩn danh (anonymous function) là một hàm không có tên (không được đặt tên) khi định nghĩa. Thay vì khai báo với từ khóa function đi kèm với tên như hàm thông thường, hàm ẩn danh thường được gán trực tiếp vào biến, truyền làm tham số, hoặc thực thi ngay lập tức mà không cần gọi hàm.
- **Đặc điểm:**
  - Không có tên: được định nghĩa mà không cần đặt tên sau từ khóa function
  - Tính linh hoạt: thường được dùng ngay tại nơi khai báo hoặc gán vào biến
  - Phạm vi: có thể truy cập biến trong phạm vi bao quanh (closure)
  - Không hoisting: không được "nâng lên" (hoisted) như hàm khai báo (function declaration)
- Cú pháp Hàm ẩn danh thông thường
```javascript
function() {
  // thân hàm
}
```
- Hàm ẩn danh kiểu mũi tên
```javascript
() => {
  // thân hàm
}
```
- Ví dụ: nằm trong file dongbo.js
- **Hạn chế:**
  - Khó gỡ lỗi (debug); vì không có tên, việc xác định lỗi trong stack trace có thể khó khăn hơn.
  - Không tái sử dụng được: nếu cần dùng lại, bạn phải gán nó cho một biến hoặc đặt tên

#### 1.7.3 Hàm mũi tên
- Hàm mũi tên là một tính năng quan trọng được giới thiệu trong ES6 (ECMAScript 2015). Đây là cách viết hàm ngắn gọn và hiện đại trong JavaScript, thường được dùng trong lập trình bất đồng bộ và các tình huống khác.
- **Đặc điểm:**
  - Cú pháp ngắn gọn: do loại bỏ từ khóa function, dấu {} và lệnh return trong một số trường hợp
  - Không có this (ngữ cảnh) riêng: this trong hàm mũi tên được kế thừa từ phạm vi bên ngoài (lexical scoping), không bị ràng buộc (bound) như hàm thông thường
  - Không có arguments: không tự động tạo biến arguments để truy cập danh sách tham số
  - Không thể dùng làm hàm tạo (constructor): không thể gọi với từ khóa new để tạo đối tượng
- Cú pháp:
  - Không tham số: () => { ... }
  - Một tham số: x => { ... } (không cần dấu ngoặc cho một tham số)
  - Nhiều tham số: (x, y) => { ... }
- Ví dụ: Trong file hammuiten.js
- Từ khóa this trong hàm mũi tên Hàm mũi tên không tạo this (biến ngữ cảnh) riêng, mà lấy this từ phạm vi bao quanh.
```javascript
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // 'this' tham chiếu đến đối tượng Person
        console.log(this.age);
    }, 1000);
}
const p = new Person(); // Kết quả: 1, 2, 3, ... (tăng mỗi giây)
```

#### 1.7.4 Lập trình bất đồng bộ
- Trong JavaScript, lập trình bất đồng bộ (asynchronous programming) là một mô hình lập trình cho phép chương trình thực hiện nhiều tác vụ cùng lúc mà không cần chờ đợi tác vụ trước đó hoàn thành. Điều này đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như yêu cầu xử lý qua mạng (gọi API, giao tiếp client-server), đọc/ghi tập tin hoặc tương tác với cơ sở dữ liệu
- Các kỹ thuật lập trình bất đồng bộ:
- **Callback:**
  - Đây là cách tiếp cận truyền thống để xử lý bất đồng bộ trong JavaScript.
  - Một callback là một hàm được truyền vào một hàm khác và được thực thi khi tác vụ bất đồng bộ hoàn thành.
  - Tuy nhiên, sử dụng quá nhiều callback có thể dẫn đến "callback hell", khiến mã nguồn trở nên khó đọc và khó bảo trì.
- **Promises:**
  - Promises là một đối tượng đại diện cho kết quả cuối cùng của một tác vụ bất đồng bộ.
  - Chúng cung cấp một cách viết mã bất đồng bộ rõ ràng và dễ bảo trì hơn so với callback.
  - then() được sử dụng khi thực hiện thành công, catch() được sử dụng khi gặp lỗi.
- **Async/await:**
  - Async/await là một cú pháp mới hơn để viết mã bất đồng bộ, được giới thiệu trong ES2017.
  - Nó cho phép bạn viết mã bất đồng bộ trông giống như mã đồng bộ, giúp mã trở nên dễ đọc và dễ hiểu hơn.
  - async được đặt trước function, await được đặt trước các lời gọi hàm bất đồng bộ.

### 1.8 Callback
- Hàm callback là một hàm được truyền vào một hàm khác như một tham số, và sẽ được thực thi sau khi hàm "cha" hoàn thành một tác vụ nào đó. Nói một cách đơn giản, nó là một cách để đảm bảo một đoạn mã được thực thi sau khi một đoạn mã khác hoàn thành.
- Các đặc điểm của hàm callback:
  - Truyền như tham số: callback là một hàm được truyền vào hàm khác để thực thi sau khi một điều kiện hoặc tác vụ hoàn tất.
  - Thực thi bất đồng bộ: thường dùng để xử lý các tác vụ không chặn luồng chính (non-blocking), như truy cập thiết bị (đọc/ghi tập tin), gọi API, hoặc trong các hàm hẹn giờ (timer).
  - Tính linh hoạt: có thể là hàm ẩn danh (anonymous function), hàm mũi tên (arrow function), hoặc hàm đã được định nghĩa trước (function expression).
  - "Callback Hell": nếu lồng quá nhiều callback, mã nguồn có thể trở nên khó đọc và bảo trì. Callback hell thường được giải quyết bằng Promise hoặc async/await.
- Một số tình huống có thể sử dụng hàm Callback:
  - Xử lý sự kiện (event handling): gắn hàm callback để phản hồi hành động của người dùng (ví dụ: click, hover, submit).
  - Tác vụ bất đồng bộ: gọi API, đọc/ghi tập tin, hoặc sử dụng trong các hàm hẹn giờ (ví dụ: setTimeout, setInterval).
  - Xử lý mảng: sử dụng trong các phương thức như forEach, map, filter, reduce.
  - Hoàn thành tác vụ: đảm bảo một đoạn mã chạy sau khi tác vụ khác hoàn tất (ví dụ: tải dữ liệu từ server rồi hiển thị lên giao diện).
  - Tùy chỉnh logic: cho phép người dùng truyền logic riêng vào hàm tổng quát.
- Ví dụ: Trong file HamCallBack.js
- **Nhược điểm:**
  - Callback Hell: lồng quá nhiều callback dẫn đến mã khó đọc.
  - Xử lý lỗi phức tạp: cần kiểm tra lỗi thủ công trong mỗi callback.
  - Không trực quan: với các luồng phức tạp, khó theo dõi thứ tự thực thi.

### 1.9 Lập trình giao diện
- Các bước xử lý trên github:
  - B1 (Tùy chọn): git status để xem thử các file chưa được git theo dõi
  - B2: git add để đưa các file chưa được git theo dõi vào khu tạm
  - B3 (Tùy chọn): git status lại lần nữa để xem các file đã được đưa vào khu tạm
  - B4: git commit -m"" để đưa các file trong khu tạm vào kho chứa cục bộ

#### 1.9.1 Sử dụng Free HTML template
- Free HTML Template là các mẫu giao diện web được thiết kế sẵn, bao gồm HTML, CSS, và đôi khi JavaScript, được cung cấp miễn phí từ các nguồn như ThemeForest (miễn phí giới hạn), BootstrapMade, FreeHTML5.co, htmlcodex, hoặc GitHub. Chúng thường có giao diện đẹp, cấu trúc cơ bản (header, footer, sidebar), và phù hợp cho nhiều loại dự án như blog, portfolio, hoặc trang doanh nghiệp nhỏ.
- Khi nào nên sử dụng Free HTML Template trong dự án
  - Dự án nhỏ, thời gian gấp: template giúp tiết kiệm thời gian thiết kế giao diện từ đầu.
  - Khách hàng cần prototype nhanh: dùng để trình bày ý tưởng ban đầu.
  - Ngân sách thấp: phù hợp khi khách hàng không đủ chi phí thuê thiết kế riêng. Cách sử dụng
  - Tải về: chọn template từ nguồn uy tín, kiểm tra giấy phép (thường là Creative Commons hoặc MIT).
  - Tùy chỉnh: điều chỉnh CSS, thay đổi nội dung (văn bản, hình ảnh), tích hợp back-end (như Node.js, PHP).
  - Tối ưu: nén CSS/JS, kiểm tra responsive, đảm bảo tốc độ tải trang. Ưu điểm khi dùng template
  - Tiết kiệm thời gian.
  - Giao diện chuyên nghiệp: template thường được thiết kế bởi chuyên gia, đảm bảo thẩm mỹ (ví dụ: bố cục gọn gàng, màu sắc hài hòa).
  - Học hỏi: phân tích mã nguồn của template để học các kỹ thuật thiết kế. Nhược điểm
  - Giới hạn tùy chỉnh: sẽ bị thiếu một số tính năng, vì mỗi dự án của bạn sẽ có những đặc thù riêng.
  - Mã nguồn dư thừa: template thường có CSS/JS không cần thiết, làm chậm trang.
  - Không độc đáo: dùng template miễn phí dễ trùng lặp với web khác, gây khó cho khách hàng nếu họ muốn tạo thương hiệu riêng.

#### 1.9.2 Static file
- Trong Express, static files (tập tin tĩnh) là các tập tin không thay đổi nội dung hoặc không cần xử lý logic phía server, như HTML, CSS, JavaScript, hình ảnh, font. Chúng được gửi trực tiếp cho client thông qua middleware express.static.
- Các tập tin tĩnh được chứa trong một thư mục riêng (ví dụ: public).
- Mục đích static files:
  - Tối ưu hóa hiệu suất: việc gửi trực tiếp tập tin tĩnh từ máy chủ giúp giảm tải cho ứng dụng Express, cải thiện tốc độ tải trang.
  - Tổ chức dự án: giúp cấu trúc dự án rõ ràng, dễ quản lý hơn.
  - Bảo mật: chỉ cho phép truy cập các tập tin được công khai, bảo vệ các tập tin quan trọng khác.

### 1.10 Ứng dụng client-server
#### 1.10.1 Ứng dụng kiểu cục bộ
- Trước khi tìm hiểu về ứng dụng kiểu client-server, chúng ta cùng tìm hiểu về ứng dụng kiểu cục bộ (gọi tắt là ứng dụng cục bộ).
- Ứng dụng cục bộ (local application) là các ứng dụng chạy trực tiếp trên thiết bị của người dùng, như máy tính cá nhân, điện thoại hoặc máy tính bảng, mà không cần kết nối liên tục với máy chủ ở xa.
- **Một số đặc điểm của ứng dụng cục bộ:**
  - Chạy độc lập: ứng dụng cục bộ được cài đặt và chạy trực tiếp trên thiết bị của người dùng, không phụ thuộc vào kết nối internet để thực hiện các chức năng cơ bản.
  - Truy cập tài nguyên thiết bị: ứng dụng cục bộ có thể truy cập trực tiếp vào các tài nguyên của thiết bị, chẳng hạn như hệ thống tập tin, phần cứng và các ứng dụng khác.
  - Hiệu suất cao: do chạy trực tiếp trên thiết bị, ứng dụng cục bộ thường có hiệu suất cao hơn so với các ứng dụng web hoặc ứng dụng dựa trên đám mây.
  - Khả năng ngoại tuyến: nhiều ứng dụng cục bộ có thể hoạt động mà không cần kết nối Internet, cho phép người dùng làm việc khi không có mạng.
  - Bảo mật: dữ liệu của ứng dụng cục bộ thường được lưu trữ trên thiết bị của người dùng, giúp tăng cường bảo mật và quyền riêng tư. Lập trình ứng dụng cục bộ Dù bạn lập trình theo kiểu hướng cấu trúc hay hướng đối tượng thì cấu trúc của một chương trình thường là:
  - Có một điểm vào chương trình (entry point) là hàm main().
  - Khi chạy hàm main() sẽ xuất ra một menu, hoặc một màn hình chính (main window).
  - Chờ các tương tác của người dùng để xử lý, thực thi các xử lý logic, đọc dữ liệu, xuất kết quả.
  - Sử dụng một trình dịch (trình thông dịch hoặc biên dịch) trên máy cục bộ để chuyển từ mã nguồn thành mã thực thi.
  - Sử dụng các bộ thư viện cục bộ, truy cập cơ sở dữ liệu trên máy cục bộ.

#### 1.10.2 Ứng dụng kiểu client-server
- Ứng dụng kiểu client-server (gọi tắt là ứng dụng client-server) là một ứng dụng, trong đó công việc được phân chia giữa hai thành phần chính là client và server.
  - Client (máy khách): gửi yêu cầu (request) để truy cập dịch vụ hoặc tài nguyên. Client là giao diện người dùng (UI) trên máy tính, điện thoại, hoặc trình duyệt.
  - Server (máy chủ): nhận yêu cầu, xử lý, và gửi phản hồi (response) về client. Server lưu trữ dữ liệu, thực hiện xử lý logic, và cung cấp dịch vụ.
  - Giao tiếp giữa client và server được thực hiện qua mạng (thường dùng giao thức HTTP, TCP/IP). Client và server chạy trên các thiết bị khác nhau. Tuy nhiên, trong giai đoạn phát triển phần mềm, client và server có thể chạy trên cùng một máy tính.
- **Đặc điểm của một ứng dụng client-server:**
  - Phân vai trò: client tập trung hiển thị, server tập trung xử lý logic, xử lý dữ liệu.
  - Kết nối mạng: yêu cầu giao tiếp qua giao thức mạng như HTTP, WebSocket, TCP/IP. Một số ứng dụng client-server: ứng dụng web, ứng dụng email, trò chơi trực tuyến, hệ quản trị cơ sở dữ liệu.

### 1.10.3 Ứng dụng web dưới góc nhìn của lập trình viên
- Ứng dụng web dưới góc nhìn của lập trình viên:
  - Là ứng dụng kiểu client-server. Client là trình duyệt web, server là web server.
  - Giao diện của ứng dụng được hiển thị trên trình duyệt web.
  - Hầu hết các xử lý logic, xử lý dữ liệu được thực hiện tại server.
  - Để lập trình phía client (client-side) cần các ngôn ngữ HTML, CSS, JavaScript, các thư viện và framework. Lập trình phía client được gọi là lập trình front-end. Người làm mảng công việc này được gọi là lập trình viên front-end (front-end developer).
  - Để lập trình phía server (server-side) cần một trong các ngôn ngữ lập trình phía back-end (C#, Java, Python, Ruby, PHP, Go, JavaScript), SQL, các thư viện, và framework. Lập trình phía server được gọi là lập trình back-end. Người làm mảng này được gọi là lập trình viên back-end (back-end developer)
  - Người làm được cả front-end và back-end được gọi là full-stack developer.
  - Tùy theo khả năng, một lập trình viên có thể chọn làm ở mảng front-end, hoặc back-end hoặc cả hai (full-stack). Dù làm ở mảng front-end thì bạn cũng phải biết căn bản về mảng back-end và ngược lại.  
![image](https://github.com/user-attachments/assets/cb1d07f3-2794-4286-af47-ef88ec1ea367)

### 1.11 Lập trình client-server
#### 1.11.1 Gửi request tới web server
- Phần này, chúng ta sẽ tìm hiểu chi tiết hơn về lập trình giao tiếp giữa client và server.
- Như đã đề cập, các bước xử lý ở web server gồm 7 bước, như hình sau:  
![image](https://github.com/user-attachments/assets/645468e8-6f63-4700-bb04-5b1837877810)  
[1] nhận request [2] phân tích request, gửi tới ứng dụng web để xử lý [3] đọc dữ liệu từ cơ sở dữ liệu [4] đổ dữ liệu vào trang HTML (các template HTML) [5] gửi trang HTML (đã bao gồm dữ liệu) (response) về trình duyệt người dùng [6] trình duyệt người dùng hiển thị nội dung response [7] trình duyệt gửi riêng một request khác để lấy các nội dung tĩnh của ứng dụng web (HTML, CSS, JavaScript, hình ảnh, và các tài nguyên khác)
- Để đơn giản, chúng ta sẽ lập trình theo tình huống sau:
  - Bước 1: web server luôn ở trạng thái đang hoạt động, sẵn sàng chờ client gửi yêu cầu (request) tới.
  - Bước 2: một người dùng bất kỳ, sử dụng trình duyệt web, gửi request tới web server.
  - Bước 3: web server nhận request
  - Bước 4: web server phân tích, xử lý request
  - Bước 5: web server gửi response về client
  - Bước 6: client (trình duyệt) nhận response, hiển thị thông tin lên trình duyệt.
- **Bước 1:** web server luôn ở trạng thái đang hoạt động, sẵn sàng chờ client gửi yêu cầu (request) tới Mở tập tin index.js nhập đoạn mã sau:
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
Dòng mã app.listen() luôn được đặt ở cuối tập tin index.js. Dòng mã này sẽ khởi chạy web server, mở cổng có số hiệu là port (ví dụ 9000) để chờ đón các request từ client; đồng thời xuất một dòng thông báo server dang chay tren cong ${port}.  
- **Bước 2:** một người dùng bất kỳ, sử dụng trình duyệt web, gửi request tới web server Khi web server đang chạy, và sẵn sàng nhận request. Chúng ta sẽ sử dụng trình duyệt để gửi các request về web server.  
Để gửi request về web server, bạn có thể sử dụng thanh địa chỉ của trình duyệt, web form, hoặc dùng hàm JavaScript (AJAX, fetch). Để đơn giản, chúng ta sẽ sử dụng thanh địa chỉ của trình duyệt.  
Mở trình duyệt web (tuy nhiên, bạn phải hiểu là mở trình duyệt trên máy tính của người dùng, vì đang trong giai đoạn phát triển phần mềm, nên máy web server và máy người dùng sẽ chạy chung trên một máy), gõ vào thanh địa chỉ URL sau: <pre>http://localhost:9000/</pre>  
Bấm Enter, bạn sẽ nhận được thông báo trên trình duyệt là:  
<pre>Cannot GET /</pre>  
Lý do có thông báo trên: client gửi request về web server, tuy nhiên, server mới chỉ mở cổng (9000) để lắng nghe request, nhận request, nhưng chưa có xử lý request và gửi trả lời (response) cho client. Nó giống như kiot đã mở bán, nhưng bên trong chưa có sản phẩm, chưa có người bán (kiot trống).  
Xem phần 4.5 để hiểu hơn về URL  
Như vậy, URL http://localhost:9000/  
- Client sử dụng giao thức http để gửi request tới web server
- Web server có địa chỉ là localhost
- Gửi request vào cổng 9000 của web server
- Gửi request  
Ngoài việc dùng thanh địa chỉ của trình duyệt để gửi request, chúng ta còn có 2 cách khác để gửi request là web form và hàm JavaScript (AJAX, fetch). Chúng ta sẽ tìm hiểu về web form, AJAX, fetch ở các phần sau.

#### 1.11.2 Gửi response về client
- **Bước 3:** web server nhận request, Bước [4] phân tích, xử lý request, Bước [5] gửi kết quả (response) về cho client  
Tại web server, chúng ta sử dụng phương thức GET của Express để nhận và xử lý các HTTP request kiểu GET (request gửi bằng giao thức HTTP) do client gửi tới.  
Cú pháp <pre>app.get(path, callback)</pre> Trong đó:
- path: luồng dùng để xử lý các request kiểu GET (GET request).
- callback: hàm sẽ được thực thi khi có GET request đến luồng tương ứng. Hàm này thường có dạng (req, res) => { ... }, trong đó:
  - req (request): đối tượng chứa thông tin request từ client.
  - res (response): đối tượng dùng để gửi response về client.  
Chúng ta sẽ viết đoạn mã xử lý như sau:  
[index.js]  
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
//xử lý khi người dùng gửi
//request kiểu GET tới thư mục gốc (/)
app.get("/", (req,res) =>
{
    //dùng phương thức query của req để lấy thông tin
    //của GET request
    const product = req.query.name;
    const size = req.query.size;
    //dùng hàm send() của đối tượng res
    //để gửi dữ liệu về client
    res.send(`Bạn muốn mua ${product} cỡ ${size}`);
});
//khoi dong web server
app.listen(port,() => {
    console.log(`server dang chay tren cong ${port}`);
});
Lưu lại mã nguồn, khởi động lại web server (nếu dùng Nodemon thì không cần).
```
Ví dụ nằm trong file lap_trinh_client_server 
- **Bước 6:** client (trình duyệt) nhận response, hiển thị thông tin lên trình duyệt Bây giờ trên trình duyệt sẽ xuất hiện dòng chữ: Bạn muốn mua shoes cỡ 40  

### 1.12 Lập trình hướng sự kiện  
- Lập trình hướng sự kiện (event-driven) là một mô hình lập trình mà luồng thực thi của chương trình được quyết định bởi các sự kiện (events). Các sự kiện này có thể là:
  - Hành động của người dùng (nhấp chuột, gõ phím).
  - Các thông điệp từ các chương trình khác.
  - Các sự kiện do hệ thống tạo ra (nhận được request, thao tác đọc/ghi tập tin). Thay vì chạy theo thứ tự mã nguồn từ trên xuống dưới, chương trình sẽ chờ đợi các sự kiện xảy ra và thực thi các hàm xử lý sự kiện (event handler) tương ứng.
#### 1.12.1 Lập trình hướng sự kiện trong Nodejs  
- Nodejs là một môi trường được xây dựng dựa trên mô hình lập trình hướng sự kiện. Đây là một trong những đặc điểm cốt lõi giúp Node.js hoạt động hiệu quả và có khả năng xử lý nhiều kết nối đồng thời, đặc biệt phù hợp với các ứng dụng thời gian thực, các ứng dụng chuyên về I/O như ứng dụng web, API, hoặc ứng dụng mạng.  
- Ứng dụng chuyên về I/O (I/O-intensive application) là các ứng dụng mà phần lớn thời gian xử lý hoặc tài nguyên được dành cho các hoạt động nhập/xuất (Input/Output), tức là các tác vụ liên quan đến việc đọc/ghi dữ liệu từ hoặc đến các nguồn bên ngoài như tập tin, cơ sở dữ liệu, mạng, hoặc thiết bị phần cứng, thay vì tập trung nhiều vào tính toán (CPU-intensive).  
- Các thành phần của Mô hình lập trình hướng sự kiện Mô hình lập trình hướng sự kiện trong Nodejs gồm các thành phần:
  - Event: sự kiện
  - Event Emitter: bộ quản lý sự kiện
  - Event loop: vòng lặp sự kiện
  - Event handler: hàm xử lý sự kiện Xem hình minh họa:  
![image](https://github.com/user-attachments/assets/11ee42d3-e945-4a37-bf7d-f5a1f21d3caa)
- Mô tả cách hoạt động của mô hình:
  - [1] EventEmitter
  - Trong hệ thống sẽ có một thành phần điều khiển, nó quản lý việc phát ra sự kiện của các đối tượng và gửi sự kiện tới nơi cần nghe (các đối tượng đang lắng nghe sự kiện tương ứng). Thành phần này được gọi là EventEmitter - Bộ quản lý sự kiện).
  - Các phương thức chính của EventEmitter:
    - on(eventName, listener): khai báo một tên sự kiện (eventName) sẽ phát ra, và đăng ký một hàm lắng nghe và xử lý đi kèm.
    - emit(eventName, [arguments...]): phát ra một sự kiện, có tên là eventName, và các tham số đi kèm (nếu có).
  - [2] Event
  - Event là một hành động hoặc sự thay đổi trạng thái xảy ra trong ứng dụng, gọi chung là sự kiện (Event). Ví dụ:
    - Yêu cầu HTTP đến máy chủ (GET request, POST request).
    - Hoàn thành việc đọc/ghi tập tin.
    - Hết thời gian chờ (timeout).
    - Sự kiện lỗi.
  - [3] Event Loop (Vòng lặp sự kiện)
    - Event Loop là cơ chế cốt lõi của Nodejs, cho phép nó xử lý các sự kiện không đồng bộ một cách hiệu quả.
    - Event Loop liên tục kiểm tra hàng đợi sự kiện (event queue) và thực thi các hàm callback khi có sự kiện xảy ra.
    - Điều này cho phép Nodejs xử lý nhiều yêu cầu đồng thời mà không bị chặn (blocking).
  - [4] Event Handler (Hàm xử lý sự kiện)
    - Event handler là một hàm được gọi khi một sự kiện xảy ra.
    - Event handler thường được đăng ký với một EventEmitter bằng phương thức on().

#### 1.12.2 Thực hành lập trình hướng sự kiện
- Chúng ta sẽ viết một chương trình đơn giản như sau:
  - Sử dụng module events của Nodejs để lập trình hướng sự kiện
  - Tạo một bộ quản lý sự kiện (EventEmitter)
  - Sử dụng EventEmitter để khai báo một sự kiện, và đăng ký hàm xử lý đi kèm
  - Phát sinh sự kiện (đã khai báo), để kiểm tra hoạt động của các thành phần
- [1] Viết theo kiểu hàm thông thường
[index.js]
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// gọi module events
const events = require('events');
// tạo ra một EventEmitter
const eventEmitter = new events.EventEmitter();
// đăng ký tên sự kiện, gắn với hàm lắng nghe và
// xử lý sự kiện tương ứng - xuLythongBao là event handler
eventEmitter.on('hetGio', xuLyThongBao);
// định nghĩa hàm xuLyThongBao
function xuLyThongBao(tb) {
    console.log(tb);
}
// phát ra sự kiện, kèm theo thông điệp
setTimeout(()=> {
    eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
}, 2000);
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
- [2] Viết theo kiểu hàm mũi tên
[index.js]
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// gọi module events
const events = require('events');
// tạo ra một EventEmitter
const eventEmitter = new events.EventEmitter();
// đăng ký tên sự kiện, gắn với hàm lắng nghe và
// xử lý sự kiện tương ứng
eventEmitter.on('hetGio', (thongBao) => {
    console.log(thongBao);
});
// phát ra sự kiện, kèm theo thông điệp
setTimeout(()=> {
    eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
}, 2000);
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```

### 1.13 Event-driven, Route handler và Middleware trong Express
#### 1.13.1 Lập trình hướng sự kiện trong Express
- Express là một framework, xây dựng trên nền tảng Nodejs. Express sử dụng mô hình lập trình hướng sự kiện để xử lý các HTTP request, đọc/ghi tập tin, làm việc với cơ sở dữ liệu, websocket, stream.
- Trong mô hình này:
  - Mỗi request từ client (như GET, POST, PUT, DELETE) được xem là một sự kiện (Event).
  - Các module http, fs, stream là các Bộ quản lý sự kiện (Event Emitter) của Express.
  - Express sử dụng Vòng lặp sự kiện (Event Loop) của Node.js để lắng nghe và xử lý các sự kiện theo kiểu bất đồng bộ (asynchronous), không chặn luồng (non-blocking).
  - Các route handler và middleware đóng vai trò như các Hàm xử lý sự kiện (Event Handler), được gọi khi sự kiện tương ứng xảy ra.

#### 1.13.2 Thực hành với GET request
- Để hiểu rõ hơn về lập trình hướng sự kiện trong Express, chúng ta cùng thực hành với GET request.
- Tình huống cụ thể như sau:
  - Client gửi GET request tới web server
  - Web server phát hiện sự kiện GET request và chuyển nó đến Express.
  - Express kiểm tra URL và method (GET) để tìm route handler phù hợp.
  - Hàm callback (route handler) được gọi để xử lý sự kiện, trả về response cho client.
[index.js]
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
- Sử dụng Middleware cho GET request
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```

#### 1.13.3 Route handler và Middleware trong Express
- Route handler Route handler là các hàm xử lý được gắn với một luồng (route) cụ thể trong ứng dụng Express. Chúng được gọi khi một HTTP request (như GET, POST, PUT, DELETE) từ client khớp với route và method tương ứng. Route handler đóng vai trò như Event handler trong lập trình hướng sự kiện, xử lý logic chính cho request và trả về response.
- Route handler nhận 3 tham số chính:
  - req (request): đối tượng chứa thông tin về request từ client (URL, headers, body).
  - res (response): đối tượng dùng để gửi response về client.
  - next (optional): hàm gọi để chuyển tiếp request sang middleware hoặc handler tiếp theo (nếu có).
- Cú pháp: <pre>app.METHOD(path, callback);</pre>
- Trong đó METHOD là HTTP method (get, post, put, delete), path là luồng, và callback là Route handler.
- Ví dụ:
```javascript
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
```
- Đặc điểm của Route handler:
  - Cụ thể cho route và method: mỗi Route handler chỉ được gọi khi request khớp (match) với route và HTTP method đã định nghĩa.
  - Xử lý logic chính: thường chứa logic nghiệp vụ như truy vấn cơ sở dữ liệu, xử lý dữ liệu, hoặc trả về kết quả.
  - Có thể nối tiếp: nhiều Route handler có thể được gắn vào cùng một route bằng cách truyền nhiều callback hoặc dùng next().
- Ví dụ nối tiếp Route handler: [index.js]
```javascript
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Nối tiếp Route handler
app.get('/profile', (req, res, next) =>
{
      console.log('Kiểm tra quyền truy cập...');
      req.user = { name: "Tai"}; // Giả lập thêm dữ liệu
      next(); // Chuyển tiếp
    },
    (req, res) => { 
res.send(`Chào bạn: ${req.user.name}`);
    }
  );
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
- Middleware là các hàm được thực thi trong quá trình xử lý một HTTP request, trước hoặc sau Route handler. Chúng có thể:
  - Xử lý request (như xác thực, ghi log).
  - Sửa đổi đối tượng req hoặc res.
  - Chuyển tiếp request bằng next() hoặc dừng luồng xử lý bằng cách gửi response.
- Middleware hoạt động như một "lớp trung gian" trong pipeline (dây chuyền, đường ống) xử lý request, giúp tách biệt logic chung khỏi Route handler.
- Cấu trúc cơ bản
  - Middleware cũng nhận 3 tham số: req, res, và next.
  - Được đăng ký bằng app.use() (áp dụng cho tất cả route) hoặc gắn vào route cụ thể.
- Cú pháp: <pre>app.use(middlewareFunction);</pre> Ví dụ:
```javascript
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});
```
- Minh họa:  
![image](https://github.com/user-attachments/assets/4bed8f2e-81ba-4209-b458-5e72fb753931)  
- Các loại Middleware [1] Application-level middleware: áp dụng cho toàn bộ ứng dụng với app.use()
```javascript
// middleware mức ứng dụng
app.use((req, res, next) =>
{
    req.timestamp = new Date();
    next();
});
app.get('/',(req, res) => {
    res.send(`Khach truy cap web ap luc ${req.timestamp.toISOString()}`);
});
```
- [2] Router-level middleware: áp dụng cho một nhóm route cụ thể bằng express.Router()
- [3] Error-handling middleware: xử lý lỗi, nhận thêm tham số err.
- [4] Built-in middleware: các middleware do Express cung cấp sẵn như express.json(), express.static().
- [5] Third-party middleware: middleware của các nhà cung cấp khác, ví dụ body-parser, cors, morgan.

### 1.14 Lập trình trang web động
#### 1.14.1 Trang web động
- Trang web tĩnh là trang web có nội dung cố định, không thay đổi trừ khi bạn chỉnh sửa mã nguồn (HTML/CSS). Ví dụ trang giới thiệu công ty đơn giản.
- Trang web động là trang web mà nội dung hoặc giao diện có thể thay đổi dựa trên dữ liệu, hành động của người dùng, hoặc các yếu tố khác, thay vì chỉ hiển thị nội dung tĩnh cố định. Một trang web động có thể:
  - Hiển thị dữ liệu khác nhau cho từng người dùng (ví dụ: tên người dùng, danh sách sản phẩm).
  - Cập nhật giao diện mà không cần tải lại toàn bộ trang (ví dụ: thêm sản phẩm vào giỏ hàng).
  - Tương tác với người dùng theo thời gian thực (ví dụ: chat, thông báo).
- Dữ liệu có thể do người dùng cung cấp, có thể lấy từ server, hoặc lấy từ các hệ thống khác. Khi đã có dữ liệu, chúng ta sẽ kết hợp dữ liệu với HTML/CSS để tạo ra giao diện. Để tiện trình bày, chúng ta sẽ gọi giao diện động là giao diện.
- Các công cụ, kỹ thuật tạo trang web động
- Có 3 cách để tạo ra giao diện cho trang web:
  - [1] Tạo giao diện tại phía server
  - [2] Tạo giao diện tại phía client
  - [3] Tạo giao diện hỗn hợp, gồm cả ở phía server và phía client

### 1.14.2 Tạo giao diện phía server
- Tạo giao diện tại phía server (server-side rendering - SSR) là kỹ thuật tạo ra nội dung trang web (rendering) bằng cách xử lý logic và tạo ra mã HTML hoàn chỉnh trên máy chủ (server side) trước khi gửi về cho trình duyệt (client).  
![image](https://github.com/user-attachments/assets/d3c9585f-8dec-41cb-99f8-275d542848a4)  
- **Ưu điểm của SSR:**
  - Tối ưu hóa SEO (search engine optimization): các công cụ tìm kiếm có thể thu thập dữ liệu và lập chỉ mục nội dung trang web dễ dàng hơn vì nội dung đã có đầy đủ trong mã HTML.
  - Tăng tốc độ tải trang ban đầu: người dùng có thể nhìn thấy nội dung trang web nhanh hơn, đặc biệt là trên các thiết bị di động hoặc kết nối mạng chậm.
  - Hỗ trợ tốt cho các thiết bị có cấu hình phần cứng yếu: các thiết bị sẽ không phải thực thi quá nhiều Javascript, giảm tải cho thiết bị. Nhược điểm của SSR:
  - Tăng tải cho máy chủ: máy chủ phải xử lý nhiều yêu cầu hơn để tạo ra mã HTML cho mỗi trang, dẫn đến tăng tải và yêu cầu tài nguyên máy chủ cao hơn.
  - Phức tạp hơn trong việc phát triển: yêu cầu lập trình viên phải có kiến thức về cả phía máy chủ (backend) và phía trình duyệt (frontend).
  - Khả năng tương tác hạn chế: các tương tác “động” trên trang web có thể bị chậm, vì mỗi tương tác sẽ cần phải gửi một request đến máy chủ.
- **Các công cụ sử dụng SSR:**
  - Next.js (React)
  - Nuxt.js (Vue.js)
  - Angular Universal (Angular)
  - Server-side template engines
  - Nestjs

### 1.14.3 Tạo giao diện tại phía client
- Tạo giao diện tại phía client (client-side rendering - CSR) là kỹ thuật tạo ra nội dung trang web bằng cách xử lý và tạo ra mã HTML hoàn chỉnh trên trình duyệt (client) bằng Javascript. Khi người dùng truy cập một ứng dụng web sử dụng CSR, máy chủ chỉ gửi về một tập tin HTML rỗng và một tập tin Javascript. Trình duyệt sẽ nhận tập tin Javascript và thực thi mã JavaScript để tạo ra nội dung trang web.
- **Ưu điểm của CSR:**
  - Tăng tốc độ hiển thị “các trang sau”: sau khi trang web được tải lần đầu tiên, các trang tiếp theo sẽ được hiển thị nhanh hơn vì trình duyệt chỉ cần tải dữ liệu từ máy chủ mà không cần tải lại toàn bộ mã HTML.
  - Tương tác người dùng tốt hơn: CSR cho phép tạo ra các trang web tương tác cao, với các hiệu ứng động và cập nhật nội dung mà không cần tải lại trang.
  - Giảm tải cho máy chủ: máy chủ chỉ cần gửi về tập tin HTML rỗng và tập tin Javascript, giúp giảm tải cho máy chủ.
- **Nhược điểm của CSR:**
  - SEO không tốt: các công cụ tìm kiếm có thể gặp khó khăn trong việc thu thập dữ liệu và lập chỉ mục nội dung trang web vì nội dung được tạo ra bằng Javascript.
  - Tốc độ tải trang ban đầu chậm: người dùng phải chờ trình duyệt tải và thực thi tập tin Javascript trước khi nhìn thấy nội dung trang web.
  - Yêu cầu thiết bị người dùng phải mạnh: CSR yêu cầu trình duyệt của người dùng phải có khả năng xử lý Javascript tốt.
- **Các công cụ sử dụng CSR:**
  - React
  - Angular  
  - Vue  
![image](https://github.com/user-attachments/assets/a6e1553e-8d25-41eb-9b2d-8cadf799d2bb)  

#### 1.14.4 Tạo giao diện hỗn hợp, gồm cả ở phía server và phía client
- Tạo giao diện hỗn hợp là phương pháp tạo giao diện bằng cách kết hợp SSR và CSR. Mục tiêu là tận dụng ưu điểm của cả hai kỹ thuật để tạo ra các trang web có hiệu suất cao, tối ưu hóa SEO và trải nghiệm người dùng tốt.
- Cách thức sử dụng:
  - Tạo trang web ban đầu trên máy chủ (SSR), khi người dùng truy cập lần đầu tiên. Mã HTML hoàn chỉnh được gửi về cho trình duyệt, giúp hiển thị nội dung nhanh chóng và tối ưu hóa SEO.
  - Sau khi trang web được tải, các tương tác của người dùng sẽ được xử lý bằng JavaScript trên trình duyệt (CSR). Điều này cho phép tạo ra các trang web tương tác cao, với các hiệu ứng động và cập nhật nội dung mà không cần tải lại trang.

### 1.15 Express-handlebars
#### 1.15.1 Server-side template engine
- Server-side template engine là công cụ phần mềm được sử dụng trên server để tạo ra giao diện web (HTML động) bằng cách kết hợp dữ liệu (data) với các mẫu giao diện (templates). Với các thành phần và cách hoạt động như sau:
  - Mẫu giao diện (template): một tập tin chứa mã HTML, kết hợp với cú pháp đặc biệt (placeholder, vòng lặp, điều kiện) để chèn dữ liệu.
  - Dữ liệu: được cung cấp từ server (từ cơ sở dữ liệu, API, hoặc xử lý logic tại backend).
  - Kết xuất (rendering): template engine xử lý các template, thay thế các placeholder bằng dữ liệu thực tế, tạo ra HTML hoàn chỉnh.
  - Trả về client: server gửi HTML hoàn chỉnh về trình duyệt để hiển thị.
- **Một ví dụ đơn giản khi sử dụng template:**
  - Template: <h1>Hello {{name}}</h1>
  - Dữ liệu: { name: "Ngô Bá Tài" }
  - Kết quả HTML hoàn chỉnh: <h1>Hello Ngô Bá Tài</h1>
- **Ưu điểm khi sử dụng template engine:**
  - Tạo giao diện động: hiển thị nội dung thay đổi dựa trên dữ liệu (danh sách sản phẩm, thông tin người dùng).
  - Tách biệt logic xử lý và giao diện: backend xử lý dữ liệu, template engine xử lý hiển thị.
  - Hỗ trợ SEO: với HTML hoàn chỉnh sẽ tốt cho công cụ tìm kiếm.
  - Dễ sử dụng
  - Tải nhanh lần đầu
- **Nhược điểm:**
  - Không phù hợp với ứng dụng nặng về tương tác (SPA), vì cần tải lại trang khi thay đổi nội dung.

### 1.15.2 Express-handlebars
- Express-handlebars là một server-side template engine được tích hợp vào framework Express để tạo ra “HTML động” từ phía server. Express-handlebars dựa trên cú pháp Mustache, cho phép bạn tạo các template với các placeholder <pre>({{variable}})</pre> và các cấu trúc điều khiển như vòng lặp <pre>({{#each}})</pre> hoặc điều kiện <pre>({{#if}})</pre>.
- **Thực hiện cài đặt** E:\TeoShop>pnpm i -s express-handlebars
  - Lệnh trên sẽ tải express-handlebars từ npm registry về máy và cài đặt
  - Nếu không có thông báo lỗi, nghĩa là việc cài đặt đã thành công
  - Mở tập tin package.json trong dự án, mục dependencies sẽ thấy có thông tin của  
![image](https://github.com/user-attachments/assets/cae2a961-0300-42a2-9276-ad79dbb615bd)

#### 1.15.3 Sử dụng Express-handlebars trong Express
- Khai báo để sử dụng gói express-handlebars const expressHandlebars = require(expressHandlebars);
- **Tổ chức thư mục, tập tin**
```javascript
express_handlebars/
├── views/
│   ├── layouts/ 
│   │   └── main.hbs 
│   ├── partials/
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── index.hbs
│   └── cart.hbs
└── index.js
```
  - Thư mục views: là thư mục chứa tất cả các template của ứng dụng. Express sẽ tìm kiếm các template trong thư mục này khi bạn gọi phương thức res.render().
  - Thư mục layouts: chứa các layout chính (main layout - main.hbs) của ứng dụng. Main layout là một template HTML chung, là bộ khung thống nhất cho các giao diện có bố cục tương tự nhau. Ví dụ: main.hbs có thể chứa cấu trúc HTML cơ bản, header, footer. Việc sử dụng layout giúp bạn tránh việc lặp lại mã HTML trên nhiều trang.
  - Thư mục partials: chứa các template con. Partial nghĩa là các thành phần con. Partials là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Ví dụ: bạn có thể tạo một partial cho header, footer, hoặc một form đăng nhập. Việc sử dụng partials giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.
- Việc tổ chức thư mục, tập tin như trên có một số ưu điểm là:
  - Tách biệt logic xử lý và giao diện: giúp dễ đọc mã nguồn, dễ bảo trì và dễ mở rộng.
  - Tái sử dụng mã: tránh lặp lại mã HTML, giảm thiểu lỗi và tăng tốc độ phát triển.
  - Quản lý giao diện dễ dàng: cho phép bạn thay đổi giao diện một cách nhất quán trên toàn bộ ứng dụng.  
![image](https://github.com/user-attachments/assets/4d769256-6585-45bf-83e3-3fad6cdaf3b7)  
- Cấu hình để sử dụng express-handlebars trong mã nguồn Trong tập tin index.js, thêm đoạn mã sau:
```javascript
const port = process.env.PORT || 9000
const expressHandlebars = require('express-handlebars');
// cau hinh de su dung express handlebars, dinh nghia engine
app.engine('hbs', expressHandlebars.engine({
    // thu muc chua cac layout
    layoutsDir: __dirname + '/views/layouts',
    // thu muc chua cac template con
    partialsDir: __dirname + '/views/partials',
    // duoi cua tap tin layout
    extname: 'hbs',
    // tap tin layout chinh la
    defaultLayout: 'main'
}));
// khai bao de su dung engine da dinh nghia
app.set('view engine', 'hbs');
```
- Ví dụ trong express_handlebars
- Tạo các tập tin template, gồm mã HTML và cú pháp của express-handlebars
- Trong thư mục views/layouts chúng ta sẽ tạo main.hbs bao gồm mã nguồn của header và footer.
- Cách làm:
  - Trong trình duyệt, bạn mở trang http://localhost:9000/index.html
  - Dùng chế độ inspect để phân tích giao diện, để biết đoạn mã nguồn nào là của phần header, của “nội dung trang con” và của footer.
  - Chép toàn bộ mã nguồn của trang public\index.html vào tập tin main.hbs
  - Trong main.hbs, giữ lại mã nguồn phần header và footer, cắt đi mã nguồn phần chính giữa (“nội dung trang con”) đưa vào tập tin index.hbs (bạn tạo tập tin index.hbs trong views, nếu bạn chưa tạo)

### 1.16 Tạo giao diện các trang con
- Chúng ta sẽ tạo giao diện cho các trang con theo các bước sau:
  - Bước 1: Di chuyển toàn bộ các trang từ thư mục public sang thư mục views.
  - Bước 2: Đổi đuôi tập tin của các trang con từ .html sang .hbs
  - Bước 3: Vào mỗi tập tin xóa đi mã nguồn từ đầu đến hết phần header, và từ phần footer đến hết tập tin (giống như bạn đã làm cho tập tin index.hbs). Xem hình minh họa về cấu trúc các tập tin trong views.
  - Bước 4: Vào tập tin main.hbs, sửa lại URL của các liên kết thành giá trị mới sau: [giá trị cũ > giá trị mới] VD: index.html thành /index
  - Bước 5: Vào tập tin index.js, thêm đoạn mã xử lý để hiển thị các trang con.
```javascript
app.get('/:page', (req, res) =>{
    res.render(req.params.page);
});
```
  - Bước 6: Lưu lại các tập tin mã nguồn, khởi động lại server, vào trình duyệt, mở lại web app, bấm vào các mục của menu sẽ thấy giao diện đã hoạt động tốt.

#### 1.15.3 Sử dụng partial
- Partial là các thành phần con, là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Việc sử dụng partial giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.

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
