function User(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function createCustomers(customers) {
    return customers
        .map(function (customer) {
            const fullName = customer.name.split(" ");
            const firstName = fullName[0];
            const lastName = fullName[fullName.length - 1];
            const user = new User(
                customer.name,
                customer.age,
                customer.address
            );
            user.shortName = `${firstName} ${lastName}`;
            return user;
        })
        .sort(function (next, prev) {
            return next.age - prev.age;
        });
}

const customers = [
    { name: "Nguyen Van A", age: 11, address: "Ha Noi" },
    { name: "Nguyen Van B", age: 2, address: "Hai Phong" },
    { name: "Nguyen Van C", age: 12, address: "TP.HCM" },
];

var result = createCustomers(customers);

console.log(result);
