var content = `<h1>Học lập trình tại F8.Học lập trình tại F8.Học lập trình tại F8.Học lập trình tại F8.</h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent = "";
while (position !== -1) {
    newContent +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;
    content = content.slice(position + keyword.length);
    position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent += content;
document.write(newContent);
// Gợi ý: Chia chuỗi cần xử lý thành 3 phần
// Phần 1: Từ đầu đến vị trí cần xử lý
// Phần 2: Vị trí cần xử lý
// Phần 3: Sau vị trí cần xử lý đến hết

// Ý tưởng triển khai lặp chữ
/*
Tìm và highlight từ khóa đầu tiên ==> lưu kết quả vào 1 biến (cắt từ đầu đến hết 2light)
Cắt bỏ đoạn đã tìm được và tiến hành tìm lại
*/
