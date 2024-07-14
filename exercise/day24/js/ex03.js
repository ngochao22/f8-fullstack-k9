function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

function handleRegister(name, password, email) {
    const newUser = new User(name, password, email);
    data.push(newUser);
    return newUser;
}

function handleLogin(email, password) {
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        if (user.email === email && user.password === password) {
            return user;
        }
    }
    console.log("Thông tin đăng nhập không hợp lệ");
}

const data = [];
const dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
const dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvana@email.com", "123456");

console.log(data);
console.log(dataLogin);
