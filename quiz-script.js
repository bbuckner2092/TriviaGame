// Contains the current Question that the player is on
var currentQuestion = 0;
// Initial score will start off at 0
var score = 0;
// Keeps track of all of the questions within the document
var totQuestions = questions.length;
// Accessing all html information from this variable
var container = document.getElementById('quizContainer');
// Access all of the questions in the html
var questionEl = document.getElementById('question');
// Access all of options in the html
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
// Access the next button function within html
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
// This function allows us to load up each question.
function loadQuestion (questionIndex) {
	var q = questions [questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption) {
		alert('Please select your aswer!');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer === answer) {
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion === totQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion === totQuestions) {
		container.style.display = 'none';
		result.style.display = '';
		resultCont.textContent = 'Your Score:' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
