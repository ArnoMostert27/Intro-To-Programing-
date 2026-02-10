var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
var answers = [];

submit.addEventListener("click", getAnswer);

askQuestion(0);

function askQuestion(questionNumber) {
    answer.style.display = "block";
    answers.length = questionNumber;

    switch (questionNumber) {
        case 0:
            question.innerHTML = "Are you ready to race?";
            break;
        case 1:
            question.innerHTML = "Take the Funky Forest shortcut, or stick to the Highway?";
            break;
        case 2:
            question.innerHTML = "Final choice: Funky Forest or Highway?";
            break;
        default:
            break;
    }
}

function getAnswer() {
    let cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;
        case 1:
            if (answers[1] === "FUNKY FOREST") {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                setTimeout(() => {
                    let rand = Math.random();
                    if (rand < 0.25) {
                        story.innerHTML += document.getElementById("bonusHerbertArno").innerHTML;
                    } else if (rand < 0.5) {
                        story.innerHTML += document.getElementById("bonusAwonke").innerHTML;
                    } else {
                        story.innerHTML += document.getElementById("bonusKeisha").innerHTML;
                    }
                    theEnd();
                }, 1000);
            } else if (answers[1] === "HIGHWAY") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                setTimeout(() => {
                    story.innerHTML += document.getElementById("bonusVincent").innerHTML;
                    theEnd();
                }, 1000);
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;
        default:
            story.innerHTML += "<p>The story is over!</p>";
            break;
    }
}

function theEnd() {
    story.innerHTML += "<p>The End.</p>";
    question.innerHTML = "";
    answer.style.display = "none";
}
