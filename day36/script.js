const quizData = [
     {
          question: "What is the capital of France?",
          options: ["London", "Paris", "Berlin", "Madrid"],
          answer: "Paris",
     },
     {
          question: "Which is the largest planet?",
          options: ["Earth", "Venus", "Jupiter", "Mars"],
          answer: "Jupiter",
     },
     {
          question: "What does ES6 stand for?",
          options: [
               "ECMAScript 6",
               "EasyScript 6",
               "ECMAStandard 6",
               "ElectronScript 6",
          ],
          answer: "ECMAScript 6",
     },
];
let currentIndex = 0;
let score = 0;

const loadQuestion = () => {
     const { question, options } = quizData[currentIndex];
     document.getElementById("question").innerText = question;

     const optionsHTML = options
          .map(
               (option) =>
                    `<button onclick="selectOption('${option}')">${option}</button>`
          )
          .join("");
     document.getElementById("options").innerHTML = optionsHTML;
};

const selectOption = (selected = "") => {
     const correct = quizData[currentIndex].answer;

     if (selected === correct) score++;

     document.querySelectorAll("#options button").forEach((btn) => {
          btn.disabled = true;
          if (btn.innerText === correct) {
               btn.classList.add("correct");
          } else if (btn.innerText === selected) {
               btn.classList.add("wrong");
          }
     });

     document.getElementById("score").innerText = `Current Score: ${score}`;
};

const nextQuestion = () => {
     currentIndex++;
     if (currentIndex < quizData.length) {
          loadQuestion();
          document.getElementById("score").innerText = "";
     } else {
          document.getElementById("quiz-container").innerHTML = `
          <h2>Quiz Over!</h2>
          <p>Your final score is ${score} out of ${quizData.length}.</p>
        `;
     }
};

loadQuestion();
