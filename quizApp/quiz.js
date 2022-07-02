const quizData = [
    {
        question: 'Quel est le chef lieu de la province du nord-kivu?',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'GOMA',
        d: 'BUKAVU',
        correct: 'c'
    }, {
        question: 'What is the most user programming languaga in 2012?',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'Javascript',
        correct: 'a'
    }, {
        question: 'Who is he president of Us?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'what does HTML stand for??',
        a: 'Hypert Markup langanguage',
        b: 'cascading StyLE Sheet',
        c: 'Jason Objeect Notation',
        d: 'Helicopters Terminals Motarboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was Javascript Launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }, {

    }
]
const questionEl = document.getElementById('question');
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector('#submit');

console.log(submitBtn);

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData
    [currentQuiz];


    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

submitBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: Show resultas
        alert("You finished get yourself an orange lemonade");
    }

    loadQuiz();
})