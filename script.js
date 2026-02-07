document.addEventListener("DOMContentLoaded", function () {

/* ===============================
   MUSIC (100% reliable start)
=============================== */

const bgMusic = document.getElementById("bgMusic");

function startMusic() {
  if (bgMusic && bgMusic.paused) {
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {});
  }
}

/* Start on ANY interaction */
["click","touchstart","keydown"].forEach(evt => {
  document.addEventListener(evt, startMusic, { once: true });
});



/* ===============================
   QUIZ DATA
=============================== */

const quizData = [
  {
    question: "Where did we first meet and everything quietly changed?",
    image: "photos/Q1.jpg",
    song: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg",
    options: ["Fig at Museo", "Hinge", "Dev and Pulkit’s house"],
    correct: 2
  },
  {
    question: "What is my favourite thing to do to you 😏",
    image: "photos/Q2.jpg",
    song: "https://open.spotify.com/track/5MnAi6ZF7cE8pAz7wYr9Ta",
    options: ["Licku", "Stand behind you when you cook", "Ragebait"],
    correct: 2
  },
  {
    question: "What’s our favorite trip together?",
    image: "photos/Q3.jpg",
    song: "https://open.spotify.com/track/6eBK3edMW7bEzecF1eCezc",
    options: ["Montreal", "Niagara", "Shehdi Chaand"],
    correct: 2
  },
  {
    question: "What is our favourite hobby?",
    image: "photos/Q4.jpg",
    song: "https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl",
    options: ["Attending concerts", "Napping", "Reading our chats about when I was apparently more romantic 😒"],
    correct: 2
  },
  {
    question: "Who is more dramatic?",
    image: "photos/Q5.jpg",
    song: "https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY",
    options: ["Me","Me","Me"],
    correct: 1
  },
  {
    question: "Will you be my Valentine? 💕",
    image: "photos/Q6.jpg",
    song: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
    options: ["YES", "Obviously Yes", "No"],
    correct: 1
  }
];

let current = 0;



/* ===============================
   CONFETTI
=============================== */

function heartExplosion() {
  if (typeof confetti !== "undefined") {
    confetti({ particleCount: 180, spread: 80, origin:{y:0.6}});
  }
}



/* ===============================
   FLOATING HEARTS
=============================== */

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random()*100+"vw";
  heart.style.fontSize = (Math.random()*15+14)+"px";
  heart.style.animationDuration = (Math.random()*3+4)+"s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}
setInterval(createHeart, 500);



/* ===============================
   LOAD QUESTION
=============================== */

function loadQuestion() {

  const quizDiv = document.getElementById("quiz");
  const q = quizData[current];

  quizDiv.classList.add("fade-out");

  setTimeout(() => {

    quizDiv.innerHTML = "";

    const question = document.createElement("p");
    question.innerText = q.question;
    quizDiv.appendChild(question);

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

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(i);
      quizDiv.appendChild(btn);
    });

    quizDiv.classList.remove("fade-out");
    quizDiv.classList.add("fade-in");

  }, 180);
}



/* ===============================
   CHECK ANSWER
=============================== */

function checkAnswer(selected) {

  const feedback = document.getElementById("feedback");

  if (selected === quizData[current].correct) {

    heartExplosion();
    feedback.innerText = "Correct 😌💕";

    setTimeout(()=>{
      current++;
      if(current >= quizData.length){
        window.location.href="countdown.html";
      } else {
        loadQuestion();
      }
    },600);

  } else {
    const msgs = ["Try again 😝","Nope 😂","Close but not quite","You know this!"];
    feedback.innerText = msgs[Math.floor(Math.random()*msgs.length)];
  }
}



/* ===============================
   START
=============================== */

loadQuestion();

});
