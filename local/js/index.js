//sound
const right = new Audio("res/sound/right.mp3");
const wrong = new Audio("res/sound/wrong.mp3");
const countryside = new Audio("res/sound/cricketsound.mp3");

var button;
var question, score, answerTxt;

var trueAnswer;
/**
 * 0 -> 3 x 2
 * <br/>
 * 1 -> 3 : 1 = 2
 * <br/>
 * 2 -> √
 * @type {number}
 */
var mode = 0;

$(function () {
    //basic setup when start up
    question = $('#question')[0];
    score = $('#score')[0];
    answerTxt = $('#answer')[0];
    button = $('#checkAnswer')[0];

    $('#answer').on("keypress", (event) => { //imeOption for Enter key
        if(event.keyCode === 13) { // key code for enter key
            button.click();
        }
    });
    //snackbar has already been initialized at /MDCtrigger.js
    generateNewQuestion();
});

function generateNewQuestion() {
    let num1, num2;
    switch (mode) {
        case 0:
            //3 x 2
            num1 = randomBetween(100, 999);
            num2 = randomBetween(1, 99);
            question.innerHTML = `${num1} x ${num2} = `;
            trueAnswer = num1 * num2;
            break;
        case 1:
            //3 : 1 = 2
            num1 = 0, num2 = 0;
            while ((num1 + num2) < 10) {
                num1 = randomBetween(1, 99);  // 1 -> 99
                num2 = randomBetween(1, 9); // 1 -> 9
            }
            question.innerHTML = `${num1 * num2} : ${num2} = `;
            trueAnswer = num1;
            break;
        case 2:
            //√
            num1 = randomBetween(1, 9);
            question.innerHTML = `√${num1 * num1} = `;
            trueAnswer = num1;
            break;
        default:
            mode = 0;
            generateNewQuestion();
    }
}

function randomBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//button trigger
function checkAnswer() {
    if(answerTxt.value.length < 1) {
        //invalid answer
        snackbar.labelText = "Invalid answer, please try again!";
        snackbar.open();
        countryside.play();
        answerTxt.value = "";
    } else {
        try {
            if (trueAnswer === parseInt(answerTxt.value)) {
                //correct
                right.play();
                generateNewQuestion();
                score.innerHTML = parseInt(score.innerHTML) + 1;
            } else {
                //wrong
                wrong.play();
                snackbar.labelText = "Wrong answer!";
                snackbar.open();
                score.innerHTML = 0;
            }
            answerTxt.value = "";

        } catch (e) {
            //play sound
            snackbar.labelText = "Invalid answer, please try again!";
            snackbar.open();
            wrong.play();
            answerTxt.value = "";
            console.log(e);

        }
    }
}
function multiplyMode() {
    mode = 0;
    generateNewQuestion();
}
function divisionMode() {
    mode = 1;
    generateNewQuestion();
}
function squareRootMode() {
    mode = 2;
    generateNewQuestion();
}
