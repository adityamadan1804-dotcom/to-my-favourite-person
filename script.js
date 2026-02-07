document.addEventListener("DOMContentLoaded", function () {

const quizData = [
  {
    question: "Where did we first meet and everything quietly changed?",
    image: "photos/Q1.jpg",
    song: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=c3fd9a46570c4da6",
    options: ["Fig at Museo", "Hinge", "Dev and Pulkit’s house"],
    correct: 2
  },
  {
    question: "What is my favourite thing to do to you 😏",
    image: "photos/Q2.jpg",
    song: "https://open.spotify.com/track/5MnAi6ZF7cE8pAz7wYr9Ta?si=3b90c923e5464aeaZ",
    options: ["Licku", "Stand behind you when you cook", "Ragebait"],
    correct: 2
  },
  {
    question: "What’s our favorite trip together?",
    image: "photos/Q3.jpg",
    song: "https://open.spotify.com/track/6eBK3edMW7bEzecF1eCezc?si=51315a5fc0884d44",
    options: ["Montreal", "Niagara", "Shehdi Chaand"],
    correct: 2
  },
  {
    question: "What is our favourite hobby?",
    image: "photos/Q4.jpg",
    song: "https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl?si=375935c6cfc64641",
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
    song: "https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY?si=ce6b224ff60c459c",
    options: ["Me", "Me", "Me"],
    correct: 1
  },
  {
    question: "Will you be my Valentine? 💕",
    image: "photos/Q6.jpg",
    song: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ?si=f92448ff4ed74eb3",
    options: ["YES", "Obviously Yes", "No"],
    correct: 1
  }
];

let current = 0;
const quizDiv = document.getElementById("quiz");

function heartExplosion() {
  confetti({
    particleCount: 250,
    spread: 80,
    shapes: ["heart"],
    origin: { y: 0.6 }
  });
}

function loadQuestion() {
  const q = quizData[current];

  quizDiv.innerHTML = "";

  const questionEl = document.createElement("p");
  questionEl.innerText = q.question;
  quizDiv.appendChild(questionEl);

  const img = document.createElement("img");
  img.src = q.image;
  img.className = "quiz-image";
  quizDiv.appendChild(img);

  const songBtn = document.createElement("a");
  songBtn.href = q.song;
  songBtn.target = "_blank";
  songBtn.innerText = "🎵 Play our song";
  songBtn.className = "spotify-btn";
  quizDiv.appendChild(songBtn);

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

function checkAnswer(selected) {
  if (selected === quizData[current].correct) {
    heartExplosion();
    current++;

    setTimeout(() => {
      if (current >= quizData.length) {
        window.location.href = "countdown.html";
      } else {
        loadQuestion();
      }
    }, 700);
  }
}

loadQuestion();

});
