function toUpperCase() {
     const input = document.getElementById("text-input").value;
     document.getElementById("text-output").innerText = input.toUpperCase();
}
function toLowerCase() {
     const input = document.getElementById("text-input").value;
     document.getElementById("text-output").innerText = input.toLowerCase();
}
function capitalizeFirst() {
     const input = document.getElementById("text-input").value;
     const capitalized = input
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
     document.getElementById("text-output").innerText = capitalized;
}
function generatePassword() {
     const length =
          parseInt(document.getElementById("pass-length").value) || 10;
     const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&";
     let password = "";
     for (let i = 0; i < length; i++) {
          const randIndex = Math.floor(Math.random() * chars.length);
          password += chars[randIndex];
     }
     document.getElementById("password-output").innerText = password;
}
