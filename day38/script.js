function showMessageAfterDelay(message, delayInSeconds) {
  return new Promise((resolve, reject) => {
    if (!message || isNaN(delayInSeconds) || delayInSeconds < 0) {
      reject("Invalid input");
    } else {
      setTimeout(() => {
        resolve(message);
      }, delayInSeconds * 1000);
    }
  });
}

document.getElementById("showBtn").addEventListener("click", () => {
  const message = document.getElementById("message").value;
  const delay = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  output.textContent = "Waiting...";

  showMessageAfterDelay(message, delay)
    .then((msg) => {
      output.textContent = msg;
    })
    .catch((err) => {
      output.textContent = `Error: ${err}`;
    });
});
