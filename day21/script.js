const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("enter a number :", (num) => {
    if (isNaN(num) || num.trim() === ""){
        console.log("please enter valid number")
        readline.close();
    } else { for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i} `);
    }
    readline.close()}
    
})

