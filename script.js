document.addEventListener("DOMContentLoaded", function () {

/* ================= MUSIC ================= */

const bgMusic = document.getElementById("bgMusic");

["click","touchstart","keydown"].forEach(e=>{
  document.addEventListener(e, ()=> bgMusic.play(), {once:true});
});


/* ================= QUIZ DATA ================= */

const quizData = [
  {
    question:"Where did we first meet and everything quietly changed?",
    image:"photos/Q1.jpg",
    options:["Fig at Museo","Hinge","Dev and Pulkit’s house"],
    correct:2
  },
  {
    question:"What is my favourite thing to do to you 😏",
    image:"photos/Q2.jpg",
    options:["Licku","Stand behind you when you cook","Ragebait"],
    correct:2
  },
  {
    question:"What’s our favorite trip together?",
    image:"photos/Q3.jpg",
    options:["Montreal","Niagara","Shehdi Chaand"],
    correct:2
  },
  {
    question:"What is our favourite hobby?",
    image:"photos/Q4.jpg",
    options:["Attending concerts","Napping","Reading our chats about when I was apparently more romantic 😒"],
    correct:2
  },
  {
    question:"Who is more dramatic?",
    image:"photos/Q5.jpg",
    options:["Me","Me","Me"],
    correct:1
  },
  {
    question:"Will you be my Valentine? 💕",
    image:"photos/Q6.jpg",
    options:["YES","Obviously Yes","No"],
    correct:1
  }
];

let current = 0;

const quizDiv = document.getElementById("quiz");
const countdownPage = document.getElementById("countdownPage");


/* ================= HEARTS ================= */

function createHeart(){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerText="💗";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(Math.random()*3+4)+"s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}
setInterval(createHeart,500);


/* ================= CONFETTI ================= */

function heartExplosion(){
  if(typeof confetti!=="undefined"){
    confetti({particleCount:150,spread:80});
  }
}


/* ================= QUIZ ================= */

function loadQuestion(){

  const q = quizData[current];

  quizDiv.innerHTML = "";

  const question = document.createElement("p");
  question.innerText = q.question;
  quizDiv.appendChild(question);

  const img = document.createElement("img");
  img.src = q.image;
  img.className = "quiz-image";
  quizDiv.appendChild(img);

  const feedback = document.createElement("p");
  feedback.id = "feedback";
  quizDiv.appendChild(feedback);

  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.innerText=opt;
    btn.onclick=()=>checkAnswer(i);
    quizDiv.appendChild(btn);
  });
}


function checkAnswer(selected){

  if(selected===quizData[current].correct){

    heartExplosion();
    current++;

    if(current>=quizData.length){
      showCountdown();   // ⭐ NO redirect anymore
    } else {
      loadQuestion();
    }
  }
}


/* ================= COUNTDOWN SCREEN ================= */

function showCountdown(){

  quizDiv.style.display="none";
  countdownPage.classList.remove("hidden");

  startTypewriter();
  startCountdown();
}


/* TYPEWRITER */

function startTypewriter(){

  const text="Every second with you feels special… and I can’t wait for our Valentine’s Day 💕";
  const el=document.getElementById("typeText");

  let i=0;

  function type(){
    if(i<text.length){
      el.innerHTML+=text.charAt(i++);
      setTimeout(type,40);
    }
  }
  type();
}


/* COUNTDOWN */

function startCountdown(){

  const el=document.getElementById("countdown");
  const target=new Date("February 14, 2026 00:00:00").getTime();

  setInterval(()=>{

    const d=target-Date.now();

    const days=Math.floor(d/86400000);
    const hrs=Math.floor((d%86400000)/3600000);
    const min=Math.floor((d%3600000)/60000);
    const sec=Math.floor((d%60000)/1000);

    el.innerHTML=
      `<div>${days}<span>days</span></div>
       <div>${hrs}<span>hrs</span></div>
       <div>${min}<span>min</span></div>
       <div>${sec}<span>sec</span></div>`;

  },1000);
}


/* START */

loadQuestion();

});
