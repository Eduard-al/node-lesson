const colors = require("colors/safe");

/* console.log(colors.red("Hello World!")); */



const userNumber = process.argv[2];
const list = [];

nextPrime:
for (let i = 2; i <= userNumber; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    list.push(i);
}

for (let i = 0; i < list.length; i += 3) {
    console.log(colors.green(list[i]));
    if (list[i + 1] != undefined) {
        console.log(colors.yellow(list[i + 1]));
    }


    if (list[i + 2] != undefined) {
        console.log(colors.red(list[i + 2]));
    }



}
