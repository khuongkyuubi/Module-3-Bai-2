function checkMoney(value) {
    new Promise((resolve, reject) => {
        console.log("Calculating...")
        setTimeout(() => {
            if (value > 1000000000) {
                resolve(value + " is enough to buy a car!")
            } else {
                reject(new Error(value + " is not enough to buy a car"))
            }

        }, 1000)
    })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err.message)
        })
}

checkMoney(20000000);
checkMoney(3330000000);
checkMoney(330000000);