const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter first number: ", (num1Input) => {
  readline.question("Enter operator (+, -, *, /): ", (operator) => {
    readline.question("Enter second number: ", (num2Input) => {
      const num1 = parseFloat(num1Input);
      const num2 = parseFloat(num2Input);
      let result;

      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      } else {
        result = "Invalid operator!";
      }

      console.log("Result:", result);
      readline.close();
    });
  });
});
