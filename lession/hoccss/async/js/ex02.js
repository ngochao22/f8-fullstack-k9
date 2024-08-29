const learning = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = { id: 1, name: "test 1" };
            resolve(result);
        }, 100);
    });
};
learning()
    .then((data) => {
        console.log("data", data);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log("done process");
    });
