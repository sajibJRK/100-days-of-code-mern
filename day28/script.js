const form = document.getElementById("studentForm");
const output = document.getElementById("output");
form.addEventListener("submit", function (info) {
    info.preventDefault();
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const grade = document.getElementById("grade").value;

    const student = {
        name,
        age,
        grade,
        showInfo: function () {
            return ` name : ${this.name}, age: ${this.age} , grade: ${this.grade}`;

        }

    };
    const studentDiv = document.createElement("div");
    studentDiv.textContent = student.showInfo();
    output.appendChild(studentDiv);
    form.reset();
});