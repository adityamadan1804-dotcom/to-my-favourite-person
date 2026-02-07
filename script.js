document.addEventListener("DOMContentLoaded", function () {

/*********************************
 QUIZ DATA (ALL QUESTIONS)
*********************************/

const quizData = [
  {
    question: "Where did we first meet and everything quietly changed?",
    options: [
      "Fig at Museo",
      "Hinge",
      "Dev and Pulkit’s house"
    ],
    correct: 2
  },
  {
    question: "What is my favourite thing to do to you 😏",
    options: [
      "Licku",
      "Stand behind you when you cook",
      "Ragebait"
    ],
    correct: 2
  },
  {
    question: "What’s our favorite trip together?",
    options: [
      "Montreal",
      "Niagara",
      "Shehdi Chaand"
    ],
    correct: 2
  },
  {
    question: "What is our favourite hobby?",
    options: [
      "Attending concerts",
      "Napping",
      "Reading our chats about when I was apparently more romantic 😒"
    ],
    correct: 2
  },

  // ❤️ FINAL QUESTION (Valentine ask)
  {
    question: "Will you be my Valentine? 💕",
    options: [
      "YES",
      "Obviously Yes",
      "No"
    ],
    correct: 1
  }
];



/*********************************
 SETUP
*********************************/

let current = 0;
const quizDiv = document.getElementById("quiz");



/*********************************
 HEART EXPLOSION
*********************************/

function heartExplosion() {
  confetti({
    particleCount: 250,
    spread: 80,
    shapes: ["heart"],
    scalar: 1.2,
    origin: { y: 0.6 }
  });
}



/*********************************
 LOAD QUESTION
*********************************/

function loadQuestion() {
  const q = quizData[current];

  quizDiv.innerHTML = "";

  const questionEl = document.createElement("p");
  questionEl.innerText = q.question;
  quizDiv.appendChild(questionEl);

  const feedback = document.createElement("p");
  feedback.id = "feedback";
  quizDiv.appendChild(feedback);

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    quizDiv.appendChild(btn);
  });
}



/*********************************
 CHECK ANSWER
*********************************/

function checkAnswer(selected) {
  const correct = quizData[current].correct;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {

    heartExplosion();
    feedback.innerText = "Correct 😌💕";

    setTimeout(() => {
      current++;

      // 🎉 if last question → go to countdown
      if (current >= quizData.length) {
        window.location.href = "countdown.html";
      } else {
        loadQuestion();
      }

    }, 800);

  } else {

    const wrongMessages = [
      "Try again 😝",
      "Nope 😂",
      "You know the answer",
      "Hmmmm think harder"
