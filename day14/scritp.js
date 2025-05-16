// JS PART

const quizData = [
  {
    question: "What is the national fruit of Bangladesh?",
    answers: ["Mango", "Banana", "Jackfruit", "Litchi"],
    correct: "Jackfruit"
  },
  {
    question: "What is the longest river in Bangladesh?",
    answers: ["Padma", "Jamuna", "Meghna", "Karnaphuli"],
    correct: "Padma"
  },
  {
    question: "What is the national animal of Bangladesh?",
    answers: ["Tiger", "Elephant", "Deer", "Cow"],
    correct: "Tiger"
  },
  {
    question: "Which district is famous for Hilsa fish?",
    answers: ["Barisal", "Rangpur", "Chandpur", "Sylhet"],
    correct: "Chandpur"
  },
  {
    question: "What is the national flower of Bangladesh?",
    answers: ["Rose", "Water Lily", "Tulip", "Sunflower"],
    correct: "Water Lily"
  },
  {
    question: "What is the Mother language of Bangladesh?",
    answers: ["Hindi", "Urdu", "Bengali", "English"],
    correct: "Bengali"
  },
  {
    question: "What is the name of the largest sea beach in Bangladesh?",
    answers: ["Cox's Bazar", "Kuakata", "St. Martin's", "Teknaf"],
    correct: "Cox's Bazar"
  },
];

let currentQuestion = 0;
let score = 0;
let selected = false;

function loadQuestion() {
  selected = false;
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (selected) return;
      selected = true;

      if (answer === q.correct) {
        btn.style.backgroundColor = "green";
        score++;
      } else {
        btn.style.backgroundColor = "red";
      }

      document.querySelectorAll("#answers button").forEach(b => b.disabled = true);

      document.getElementById("next-btn").style.display = "inline-block";
    };

    answersDiv.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>You scored ${score} out of ${quizData.length}</p>
    `;
  }
});

loadQuestion();
