document.addEventListener("DOMContentLoaded", function () {

/* =================================
   QUIZ DATA (WITH YOUR PHOTOS)
================================= */

const quizData = [
  {
    question: "Where did we first meet and everything quietly changed?",
    image: "photos/Q1.jpg",
    options: ["Fig at Museo", "Hinge", "Dev and Pulkit’s house"],
    correct: 2
  },
  {
    question: "What is my favourite thing to do to you 😏",
    image: "photos/Q2.jpg",
    options: ["Licku", "Stand behind you when you cook", "Ragebait"],
    correct: 2
  },
  {
    question: "What’s our favorite trip together?",
    image: "photos/Q3.jpg",
    options: ["Montreal", "Niagara", "Shehdi Chaand"],
    correct: 2
  },
  {
    question: "What is our favourite hobby?",
    image: "photos/Q4.jpg",
    options: [
      "Attending concerts",
      "Napping",
      "Reading our chats about when I was apparently more romantic 😒"
    ],
    correct: 2
  },
  {
    question: "Who is more dramatic?",
    image: "photos/Q5.jpg",
    options: ["Me", "Me", "Me"],
    correct: 1
  },
  {
    question: "Will you be my Valentine? 💕",
    image: "photos/Q6.jpg",
    options: ["YES", "Obviously Yes", "No"],
    correct: 1
  }
];


/* =================================
   SETUP
================================= */

let current = 0;
const quizDiv = document.getElementById("quiz");


/* =================================
   CONFETTI HEART BURST
================================= */

function heartExplosion() {
  confetti({
    particleCount: 250,
    spread: 80,
    shapes: ["heart"],
    origin: { y: 0.6 }
  });
}


/* =================================
   LOAD QUESTION
================================= */

function loadQuestion() {
  const q = quizData[current];

  quizDiv.innerHTML = "";

  // Question text
  const questionEl = document.createElement("p");
  questionEl.innerText = q.question;
  quizDiv.appendChild(questionEl);

  // Photo
  const img = document.createElement("img");
  img.src = q.image;
  img.className = "quiz-image";
  quizDiv.appendChild(img);

  // Feedback
  const feedback = document.createElement("p");
  feedback.id = "feedback";
  quizDiv.appendChild(feedback);

  // Buttons
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    quizDiv.appendChild(btn);
  });
}


/* =================================
   CHECK ANSWER
================================= */

function checkAnswer(selected) {
  const correct = quizData[current].correct;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {

    heartExplosion();
    feedback.innerText = "Correct 😌💕";

    setTimeout(() => {
      current++;

      if (current >= quizData.length) {
        window.location.href = "countdown.html";
      } else {
        loadQuestion();
      }

    }, 700);

  } else {
    feedback.innerText = "Try again 😝";
  }
}


/* =================================
   FLOATING HEARTS BACKGROUND
================================= */

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);


/* =================================
   START QUIZ
================================= */

loadQuestion();

});
