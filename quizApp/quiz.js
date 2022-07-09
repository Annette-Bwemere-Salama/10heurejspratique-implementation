const quizData = [
    {
        question: 'Quel est le Chef-lieu de la province du Nord-kivu?',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'GOMA',
        d: 'BUKAVU',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province de Kinshasa ?',
        a: 'KIKWIT',
        b: 'KWILU',
        c: 'KINSHASA',
        d: 'KINDU',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province du Sud kivu?',
        a: 'GOMA',
        b: 'BUKAVU',
        c: 'KINDU',
        d: 'MBANDAGA',
        correct: 'b'
    }, {
        question: 'Quel est le Chef-lieu de la province de SANKURU ?',
        a: 'LUSAMBO',
        b: 'KIKWITI',
        c: 'KENGE',
        d: 'KISANGANI',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de Tshuapa ?',
        a: 'KIKWIT',
        b: 'KISANGANI',
        c: 'KINSHASA',
        d: 'BOENDE',
        correct: 'd'
    }, {
        question: 'Quel est le Chef-lieu de la province de Tshopo',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'Kisangani',
        d: 'BUKAVU',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province du Tanganyika?',
        a: 'Kalemie',
        b: 'NGOMA',
        c: 'Kalemire',
        d: 'BUKAVU',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province du Sud-Ubangi?',
        a: 'Gemena',
        b: 'WALUNGU',
        c: 'KINSHASA',
        d: 'KISANGANI',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province du NORD-UBANGI?',
        a: 'BARAKA',
        b: 'KADUTU',
        c: 'GBADOLITE',
        d: 'MALEMIE',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province de MONGALA?',
        a: 'INONGO',
        b: 'LISALA',
        c: 'KINDU',
        d: 'BUKAVU',
        correct: 'b'
    }, {
        question: 'Quel est le Chef-lieu de la province de MANIEMA?',
        a: 'INONGO',
        b: 'KIKWIT',
        c: 'KALEMIE',
        d: 'KINDU',
        correct: 'd'
    }, {
        question: 'Quel est le Chef-lieu de la province de MAI-NDOMBE?',
        a: 'KOLWEZI',
        b: 'KABINDA',
        c: 'INONGO',
        d: 'KENGE',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province de LUALABA?',
        a: 'GOMA',
        b: 'KINSHASA',
        c: 'KOLWEZI',
        d: 'KABINDA',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province de LOMAMI?',
        a: 'KABINDA',
        b: 'KAMINA',
        c: 'KALEMI',
        d: 'KOLWEZI',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de KWILI',
        a: 'KENGE',
        b: 'KIKWIT',
        c: 'GOMA',
        d: 'MATADI',
        correct: 'b'
    }, {
        question: 'Quel est le Chef-lieu de la province KWANGO?',
        a: 'KENGE',
        b: 'MATADI',
        c: 'ISIRO',
        d: 'ITURI',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de KONGO-CENTRAL?',
        a: 'ISIRO',
        b: 'NGOMA',
        c: 'MATADI',
        d: 'MBUJI-MAYI',
        correct: 'c'
    }, {
        question: 'Quel est le Chef-lieu de la province de KASAI-OCCIDENTAL?',
        a: 'LUEBO',
        b: 'INONGO',
        c: 'MATADI',
        d: 'ISIRO',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de KASAI ORIENTAL?',
        a: 'KANANGA',
        b: 'MBUJI-MAYI',
        c: 'KENGE',
        d: 'KINDU',
        correct: 'b'
    }, {
        question: 'Quel est le Chef-lieu de la province de KASAI CENTRAL?',
        a: 'KANANGA',
        b: 'MBUJIMAYI',
        c: 'KENGE',
        d: 'BKINDU',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province d\'ITURI',
        a: 'BOMA',
        b: 'BUNIA',
        c: 'BANDUNDU',
        d: 'BUKAVU',
        correct: 'b'
    }, {
        question: 'Quel est le Chef-lieu de la province de BAS-UELE?',
        a: 'BUTA',
        b: 'BUNIA',
        c: 'BANDUNDU',
        d: 'BUKAVU',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de HAUT-UELE?',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'GOMA',
        d: 'ISIRO',
        correct: 'd'
    }, {
        question: 'Quel est le Chef-lieu de la province de HAUT-LOMAMI?',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'GOMA',
        d: 'KAMINA',
        correct: 'd'
    }, {
        question: 'Quel est le Chef-lieu de la province de HAUT-KATANGA?',
        a: 'LUBUMBASHI',
        b: 'INOGNO',
        c: 'KIKWIT',
        d: 'KENGE',
        correct: 'a'
    }, {
        question: 'Quel est le Chef-lieu de la province de l\'EQUATEUR',
        a: 'BOMA',
        b: 'NGOMA',
        c: 'MBANDAKA',
        d: 'BUKAVU',
        correct: 'c'
    },
]
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    //console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML =
            `<h2>Tes bonnes reponses correcte sont ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Recommencer</button>`
        /*TODO: Show results
        alert("FELICITATION CHAMPION TU AS PARCOURU TOUTES LES PROVINCES DE NOTRE CHER PAYS CONGO.");
    */}

});
