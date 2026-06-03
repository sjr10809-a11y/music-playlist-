quiz[currentQuestion].answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(button);
});


const quiz = [
    {
        question: "How many players are on a basketball team on the court at one time?",
        answers: ["4", "5", "6", "7"],
        correct: "5"
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        answers: ["France", "Brazil", "Argentina", "Germany"],
        correct: "Argentina"
    },
    {
        question: "How many points is a touchdown worth in football?",
        answers: ["3", "6", "7", "8"],
        correct: "6"
    },
    {
        question: "Which sport uses a puck?",
        answers: ["Soccer", "Hockey", "Tennis", "Baseball"],
        correct: "Hockey"
    },
    {
        question: "How many innings are in a standard baseball game?",
        answers: ["7", "8", "9", "10"],
        correct: "9"
    },
    {
        question: "What is the highest score possible in ten-pin bowling?",
        answers: ["200", "250", "300", "350"],
        correct: "300"
    },
    {
        question: "Which sport is known as 'the beautiful game'?",
        answers: ["Basketball", "Football (Soccer)", "Baseball", "Golf"],
        correct: "Football (Soccer)"
    },
    {
        question: "How many holes are played in a standard round of golf?",
        answers: ["9", "12", "18", "24"],
        correct: "18"
    },
    {
        question: "Which NBA player is known as 'King James'?",
        answers: ["Stephen Curry", "Kevin Durant", "LeBron James", "Kobe Bryant"],
        correct: "LeBron James"
    },
    {
        question: "How many players are on a soccer team on the field?",
        answers: ["9", "10", "11", "12"],
        correct: "11"
    },
    {
        question: "What sport does Serena Williams play?",
        answers: ["Golf", "Tennis", "Volleyball", "Track"],
        correct: "Tennis"
    },
    {
        question: "Which country invented basketball?",
        answers: ["Canada", "United States", "England", "Australia"],
        correct: "Canada"
    },
    {
        question: "How long is an NBA game?",
        answers: ["40 minutes", "48 minutes", "60 minutes", "50 minutes"],
        correct: "48 minutes"
    },
    {
        question: "In volleyball, how many players are on the court per team?",
        answers: ["5", "6", "7", "8"],
        correct: "6"
    },
    {
        question: "Which sport features the term 'home run'?",
        answers: ["Soccer", "Cricket", "Baseball", "Basketball"],
        correct: "Baseball"
    },
    {
        question: "What color card results in an immediate ejection in soccer?",
        answers: ["Blue", "Yellow", "Green", "Red"],
        correct: "Red"
    },
    {
        question: "Which NFL team has won the most Super Bowls?",
        answers: ["Cowboys", "Patriots", "Steelers", "Patriots and Steelers"],
        correct: "Patriots and Steelers"
    },
    {
        question: "How many rings are on the Olympic flag?",
        answers: ["4", "5", "6", "7"],
        correct: "5"
    },
    {
        question: "Which sport is played at Wimbledon?",
        answers: ["Golf", "Tennis", "Cricket", "Rugby"],
        correct: "Tennis"
    },
    {
        question: "What is the maximum score in a single dart throw?",
        answers: ["50", "60", "75", "100"],
        correct: "60"
    }
];

 function checkAnswer(answer) {
      const result = document.getElementById("result");

      if (answer === "Basketball") {
        result.innerHTML = "✅ Correct!";
        result.style.color = "#22c55e";
      } else {
        result.innerHTML = "❌ Wrong Answer!";
        result.style.color = "#ef4444";
      }
    }

    // Example JSON quiz data
    const quizData = [
      {
        question: "Which sport uses a slam dunk?",
        answer: "Basketball"
      },
      {
        question: "How many players are on a soccer team?",
        answer: "11"
      },
      {
        question: "How many players are on a basketball team on the court?",
        answers: ["4", "5", "6", "7"],
        correct: "5"
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        answers: ["France", "Brazil", "Argentina", "Germany"],
        correct: "Argentina"
    },
    {
        question: "How many points is a touchdown worth?",
        answers: ["3", "6", "7", "8"],
        correct: "6"
    },
    {
        question: "Which sport uses a puck?",
        answers: ["Soccer", "Hockey", "Tennis", "Baseball"],
        correct: "Hockey"
    },
    {
        question: "How many innings are in baseball?",
        answers: ["7", "8", "9", "10"],
        correct: "9"
    },
    {
        question: "What is the maximum score in bowling?",
        answers: ["200", "250", "300", "350"],
        correct: "300"
    },
    {
        question: "How many holes are in a golf round?",
        answers: ["9", "12", "18", "24"],
        correct: "18"
    },
    {
        question: "Who is known as King James?",
        answers: ["Curry", "Jordan", "LeBron James", "Durant"],
        correct: "LeBron James"
    },
    {
        question: "How many players are on a soccer team?",
        answers: ["9", "10", "11", "12"],
        correct: "11"
    },
    {
        question: "What sport does Serena Williams play?",
        answers: ["Golf", "Tennis", "Volleyball", "Track"],
        correct: "Tennis"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const questionNumber = document.getElementById("questionNumber");

function loadQuestion() {
    const q = quiz[currentQuestion];

    questionNumber.innerText =
        `Question ${currentQuestion + 1} of ${quiz.length}`;

    questionElement.innerText = q.question;

    answersElement.innerHTML = "";
    nextBtn.style.display = "none";

    q.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => selectAnswer(button, answer));

        answersElement.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    const correctAnswer = quiz[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (answer === correctAnswer) {
        score++;
    } else {
        button.classList.add("wrong");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h1>Quiz Complete!</h1>
            <h2>Your Score: ${score} / ${quiz.length}</h2>
            <button onclick="location.reload()">Play Again</button>
        `;
    }
});

loadQuestion();

    console.log(quizData);