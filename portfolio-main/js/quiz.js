const quizData = {
    "Quelle balise est utilisée pour créer des liens hypertexte en HTML?": {
        a: '<link>',
        b: '<a>', 
        c: '<href>',
        correct: '<a>'
    },
    "Comment insérer une image dans une page HTML?": {
        a: '<img src="image.jpg" alt="Description">',
        b: '<picture>',
        c: '<image>',
        correct: '<img src="image.jpg" alt="Description">'
    },
    "Quelle version de HTML a introduit les éléments sémantiques tels que <header>, <footer> et <nav>?": {
        a: 'HTML4',
        b: 'HTML5',
        c: 'HTMLx',
        correct: 'HTML5'
    },
    "Quel attribut est utilisé pour définir une classe en HTML?": {
        a: 'class',
        b: 'style',
        c: 'id',
        correct: 'class'
    },
    "Quelle balise est utilisée pour créer un paragraphe en HTML?": {
        a: '<p>',
        b: '<para>',
        c: '<paragraph>',
        correct: '<p>'
    },
    "Comment sélectionnez-vous tous les éléments <p> dans CSS?": {
        a: 'p { }',
        b: '#p { }',
        c: '.p { }',
        correct: 'p { }'
    },
    "Quelle propriété CSS est utilisée pour définir la couleur du texte?": {
        a: 'text-color',
        b: 'color',
        c: 'font-color',
        correct: 'color'
    },
    "Comment centrer un élément horizontalement en CSS?": {
        a: 'align: center;',
        b: 'margin: auto;',
        c: 'position: center;',
        correct: 'margin: auto;'
    },
    "Quelle propriété est utilisée pour ajouter une ombre à un élément en CSS?": {
        a: 'shadow',
        b: 'box-shadow',
        c: 'text-shadow',
        correct: 'box-shadow'
    },
    "Quelle unité de mesure est relative à la taille du texte actuel en CSS?": {
        a: 'px',
        b: 'em',
        c: '%',
        correct: 'em'
    },
    "Comment déclarez-vous une variable en JavaScript?": {
        a: 'variable x;',
        b: 'var x;',
        c: 'int x;',
        correct: 'var x;'
    },
    "Quelle fonction est utilisée pour afficher une boîte de dialogue dans JavaScript?": {
        a: 'alert()',
        b: 'messageBox() ',
        c: 'prompt()',
        correct: 'alert()'
    },
    "Comment déclarez-vous une fonction en JavaScript?": {
        a: 'function myFunction() {}',
        b: 'def myFunction() {}',
        c: 'func myFunction() {}',
        correct: 'function myFunction() {}'
    },
    "Quel opérateur est utilisé pour la concaténation de chaînes en JavaScript?": {
        a: '.',
        b: '||',
        c: '+',
        correct: '+'
    },
    "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript?": {
        a: 'push()',
        b: 'append()',
        c: 'add()',
        correct: 'push()'
    },
    "Quel mot-clé est utilisé pour définir une fonction en Python?": {
        a: 'func',
        b: 'def',
        c: 'define',
        correct: 'def'
    },
    "Comment commenter une seule ligne de code en Python?": {
        a: '// Comment',
        b: '# Comment', 
        c: '/* Comment */',
        correct: '# Comment'
    },
    "Quelle boucle est utilisée pour itérer sur une séquence connue à l'avance en Python?": {
        a: 'loop',
        b: 'while',
        c: 'for',
        correct: 'for'
    },
    "Quel opérateur est utilisé pour la division entière en Python?": {
        a: '/',
        b: '//',
        c: '%',
        correct: '//'
    },
    "Quelle est la méthode utilisée pour obtenir la longueur d'une liste en Python?": {
        a: 'length()',
        b: 'size()',
        c: 'len()', 
        correct: 'len()'
    },
    "Quel mot-clé est utilisé pour déclarer une fonction en C?": {
        a: 'func',
        b: 'function', 
        c: 'void',
        correct: 'function'
    },
    "Comment déclarez-vous une variable en C?": {
        a: 'variable x;',
        b: 'var x;',
        c: 'int x;',
        correct: 'int x;'
    },
    "Quel opérateur est utilisé pour l'allocation dynamique de mémoire en C?": {
        a: 'alloc',
        b: 'malloc',
        c: 'new',
        correct: 'malloc'
    },
    "Quelle fonction est utilisée pour imprimer du texte dans la console en C?": {
        a: 'console.print()',
        b: 'printf()',
        c: 'print()',
        correct: 'printf()'
    },
    "Quel est le symbole d'affectation en C?": {
        a: '==',
        b: '=',
        c: ':=',
        correct: '='
    },
    "Quelle commande SQL est utilisée pour sélectionner toutes les colonnes d'une table?": {
        a: 'SELECT *', 
        b: 'SELECT ALL',
        c: 'SELECT COLUMN',
        correct: 'SELECT *'
    },
    "Quelle clause SQL est utilisée pour filtrer les résultats d'une requête SELECT?": {
        a: 'WHERE',
        b: 'FILTER',
        c: 'SELECTIF',
        correct: 'WHERE'
    },
    "Comment supprimer une table dans une base de données SQL?": {
        a: 'REMOVE TABLE table_name;',
        b: 'DELETE TABLE table_name;',
        c: 'DROP TABLE table_name;',
        correct: 'DROP TABLE table_name;'
    },
    "Comment insérez-vous des données dans une table en SQL?": {
        a: 'INSERT INTO table_name VALUES (value1, value2, ...);',
        b: 'ADD INTO table_name (value1, value2, ...);',
        c: 'UPDATE table_name SET (value1, value2, ...);',
        correct: 'INSERT INTO table_name VALUES (value1, value2, ...);'
    },
    "Quelle fonction SQL est utilisée pour trouver le nombre total de lignes dans une table?": {
        a: 'COUNT()', 
        b: 'TOTAL()',
        c: 'SUM()',
        correct: 'COUNT()'
    },
};  
const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const timerElement = document.getElementById('time');
const nextButton = document.getElementById('button');
let currentQuestionIndex = 0;
let timeRemaining = 20;
let timer;
let score = 0;
// console.log(timerElement)
function startQuiz() {
document.getElementsByClassName('start')[0].style.display="none";
  nextButton.style.display = 'none';
  document.getElementById('timer').style.display='block';
  showQuestion();
  timer = setInterval(updateTimer, 1000);
  nextButton.addEventListener('click', showNextQuestion);
}

function showQuestion() {
  const currentQuestion = Object.keys(quizData)[currentQuestionIndex];
  questionContainer.textContent = currentQuestion;
  optionsContainer.innerHTML = "";

  Object.values(quizData[currentQuestion]).forEach((option, index) => {
    if (index !== 3) {
      const optionElement = document.createElement('button');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    }
  });

  timeRemaining = 20;
  timerElement.textContent = timeRemaining;
  currentQuestionIndex++;
}

function showNextQuestion() {
  timerElement.style.display = 'block !important';
  console.log(timerElement.style.display)
  const resultContainer = document.getElementById('result');
  resultContainer.style.display = 'none';
  if (currentQuestionIndex < Object.keys(quizData).length) {
      startQuiz();
    } else {
    endQuiz();
  }
}

function checkAnswer(selectedOption) {
  nextButton.style.display = 'block';
  clearInterval(timer);
  disableOptions();
  const resultContainer = document.getElementById('result');
  const timerElement = document.getElementById('timer');
  resultContainer.textContent = "";

  if (selectedOption === quizData[Object.keys(quizData)[currentQuestionIndex - 1]].correct) {
    resultContainer.textContent = "Correct!";
    score++;
  } else {
    resultContainer.textContent = "Wrong answer!";
  }

  resultContainer.style.display = 'block';
  timerElement.style.display = 'none';

  nextButton.textContent = 'Next Question';

}

function disableOptions() {
  for (let i = 0; i < document.getElementsByClassName('option').length; i++) {
    document.getElementsByClassName('option')[i].disabled = true;
  }
}

function updateTimer() {
  timeRemaining--;
  if (timeRemaining >= 0) {
    timerElement.textContent = timeRemaining;
  } else {
    clearInterval(timer);
    checkAnswer(null);
  }
}

function endQuiz() {
  const quizContainer = document.getElementById('container');
  quizContainer.innerHTML = "<h2>Quiz completed! </h2><br> <p style='padding:120px;font-weight:600;font-size:30px'>Your score is " + score + "  / 30 </p>"
}

document.getElementById('start').addEventListener('click', startQuiz);