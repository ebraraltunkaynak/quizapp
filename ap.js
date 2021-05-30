const quizData = [
    {
        question:   "Alex de souza Fenerbahçe ye kaç yılında gelmiştir?",
        a : "2004",
        b : "2012",
        c: "2032",
        d : "2007",
        correct: "a",
    }, {
        question: "Muslera kac yasinda ?", 
        a: "28",
        b:"32",
        c:"45",
        d: "31",
        correct : "b",
    }, {
        question: "Turkiye liginde en çok kupa kazanan teknik direktor",
        a: "Christoph Daum",
        b: " Yılmaz Vural",
        c:"Fatih Terim",
        d: "Guardiola ",
        correct:"c",
    
    },{
        question: "Milli takim teknik direktorümüz kimdir",
        a: "Fatih Terim",
        b:" Zinedine Zidane",
        c: "Aykut kocaman",
        d: "Senol Günes",
        correct: "d",

    }, {
        question: "2010-2011 sezonu sampiyonu kim olmustur?",
        a:" Fenerbahce",
        b:"Galatasaray",
        c:" Osasuna",
        d: "Besiktas",
        correct: "a",
    }
];
const questionEl= document.getElementById("question");

  const a_text= document.getElementById("a_text");
  const b_text=document.getElementById("b_text");
  const  c_Text=document.getElementById("c_text");
  const  d_text=document.getElementById("d_text");
const submitBtn = document.getElementById
("submit");
let currentQuiz= 0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTMl= quizData
    [currentQuiz];
    
    questionEl.innerText= currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

   
}
submitBtn.addEventListener("click",() => {

    currentQuiz++;
    if(currentQuiz < quizData.length ){
        loadQuiz();
    } else {
        alert("Tebrikler !");
    }
  
});