/*********************************
 QUIZ DATA
*********************************/

const quizData = [
  {
    question: "Where did we first meet and everything quietly changed?",
    options: [
      "Fig at Museo",
      "Dev and Pulkit’s house",
      "Hinge"
    ],
    correct: 2
  },
  {
    question: "What is my favourite thing to do to you 😏",
    options: [
      "Licku",
      "Ragebait",
      "Stand behind you when you cook"
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
    correct: 3
  },
  {
    question: "Who is more dramatic?",
    options: [
      "Me",
      "Me",
      "Me"
    ],
    correct: 1
  }
];



/*********************************
 SETUP
*********************************/

let current = 0;
const quizDiv = document.getElementById("quiz");

const correctSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3");
const wrongSound = new Audio("https://assets.mixkit.co/active_storage/sfx/294/294-preview.mp3");



/*********************************
 HEART EXPLOSION
*********************************/

function heartExplosion() {
  confetti({
    particleCount: 40,
    spread: 70,
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

  quizDiv.classList.add("fade-out");

  setTimeout(() => {
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

    quizDiv.classList.remove("fade-out");
    quizDiv.classList.add("fade-in");

  }, 250);
}



/*********************************
 CHECK ANSWER
*********************************/

function checkAnswer(selected) {
  const correct = quizData[current].correct;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {

    correctSound.play();
    heartExplosion();

    feedback.innerText = "Correct 😌💕";

    setTimeout(() => {
      current++;

      if (current < quizData.length) {
        loadQuestion();
      } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("valentine").classList.remove("hidden");

        // ❤️ Typewriter message appears
        typeWriter(
          "romanticText",
          "So… after all this… there’s just one thing left to ask you 💕",
          40
        );
      }
    }, 700);

  } else {
    wrongSound.play();

    const wrongMessages = [
      "Hmm try again 😝",
      "Nopeee 😂",
      "Close but not quite",
      "You know this one 😏"
    ];

    feedback.innerText =
      wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
  }
}



/*********************************
 TYPEWRITER TEXT
*********************************/

function typeWriter(elementId, text, speed = 40) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.innerText = "";

  function typing() {
    if (i < text.length) {
      el.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}



/*********************************
 FLOATING HEARTS BACKGROUND
*********************************/

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



/*********************************
 FINAL YES BUTTON
*********************************/

function celebrate() {
  confetti({
    particleCount: 300,
    spread: 90,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href = "countdown.html";
  }, 1500);
}



/*********************************
 START
*********************************/

window.onload = loadQuestion;

