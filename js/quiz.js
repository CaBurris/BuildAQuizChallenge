var questions = [
    ['Should you pet a dog who is baring his teeth and growling? ', 'No'],
    ['Is it okay to pull a dogs tail?', 'No'],
    ['Can you feed a dog chocolate?', 'No'],
    ['Should you always ask a dogs owner for permission before you pet the dog?', 'Yes']
];
var correctAnswers = 0;
var question;
var answer;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i +=1  ){
    question = questions[i][0];
    answer = questions[i][1];
    response = (prompt(question));
    if (response === answer) {
        correctAnswers += 1;
    }
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);
