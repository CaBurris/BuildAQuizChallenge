var questions = [
    ['How many letters are in the alphabet? ', 26],
    ['How many colors are in the rainbow?', 7],
    ['How many sides does a square have?', 4],
];
var correctAnswers = 0;
var question;
var answer;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr){
    var listHTML = '<ol>';
        for (var i = 0; i < arr.length; i +=1){
            listHTML += '<li>' + arr[i] + '</li>';
        }
        listHTML += '</ol>';
        return listHTML;
}

for (var i = 0; i < questions.length; i +=1  ){
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    //response = parseInt(prompt(question));
    //will transform number responses into strings
    //I need to get it to .toUpperCase();
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else{
        wrong.push(question);
    }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:<h2>';
html +=buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
