console.log("Countdown starting...");

for (let i = 10; i >= 0; i--) {
  if (i === 5) {
    console.log("Skip 5");
    continue;
  }

  if (i === 2) {
    console.log("Break 2");
    break;
  }

  console.log(i);
}
