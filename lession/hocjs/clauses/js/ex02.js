//Câu lệnh switch case
// var action = 'create';
// switch (action) {
//     case "create":
//     case "insert":
//     case "add":
//         console.log("Thêm");
//         break;
//     case "update":
//     case "edit":
//         console.log("Cập nhật");
//         break;
//     case "delete":
//     case "remove":
//     case "destroy":
//         console.log("Xóa");
//         break;
//     default:
//         console.log("Danh sách");
//         break;
// }

var action = 'create';
if(action === 'create' || action === 'insert' || action === 'add') {
    console.log("Thêm");
} else if (action === 'update' || action === 'edit') {
    console.log("Cập nhật");
} else if (action === 'delete' || action === 'remove' || action === 'destroy') {
    console.log("Xóa");
} else {
    console.log("Danh sách");
}

