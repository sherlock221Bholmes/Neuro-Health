function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(1) {
        this.score+=answer;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    if(quiz.score<=13){
    gameOverHTML += '<h2>YOU HAVE LOW STRESS</h2><img src="assets/img/low.png" class="emoji"><a href="stress.html" class="getback">GO BACK</a>';
    }
    else if(quiz.score<=27){
        gameOverHTML += '<h2>YOU HAVE MODERATE STRESS</h2><img src="assets/img/modrate.png" class="emoji"><a href="stress.html"  class="getback">GO BACK</a>';
    }
    else
    { gameOverHTML += '<h2>YOU HAVE HIGH STRESS</h2><img src="assets/img/high.png" class="emoji"><a href="stress.html"  class="getback">GO BACK</a>';}
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("1. In the last month, how often have you been upset because of something that happened unexpectedly?", [0, 1, 2, 3, 4]),
    new Question("2. In the last month, how often have you felt that you were unable to control the important things in your life?", [0, 1, 2, 3, 4]),
    new Question("3. In the last month, how often have you felt nervous and stressed?", [0, 1, 2, 3, 4]),
    new Question("4. In the last month, how often have you felt confident about your ability to handle your personal problems?", [4, 3, 2, 1, 0]),
    new Question("5. In the last month, how often have you felt that things were going your way", [4, 3, 2, 1, 0]),
    new Question("6. In the last month, how often have you found that you could not cope with all the things that you had to do?", [0, 1, 2, 3, 4]),
    new Question("7. In the last month, how often have you been able to control irritations in your life?", [4, 3, 2, 1, 0]),
    new Question("8. In the last month, how often have you felt that you were on top of things?", [4, 3, 2, 1, 0]),
    new Question("9. In the last month, how often have you been angered because of things that happened that were outside of your control?", [0, 1, 2, 3, 4]),
    new Question("10. In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?", [0, 1, 2, 3, 4])
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();