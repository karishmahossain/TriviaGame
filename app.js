//Variables

var Questions = ["What team does James Harden play for?", "Which country won the World Cup 2018?", "What is the capital city of Texas?"];
var q1Answers = ["Rockets", "Lakers", "Warriors", "Thunder", "Mexico", "France", "USA", "England", "Houston", "Dallas", "Austin", "San Antonio"];
var q2Answers = ["Mexico", "France", "USA", "England"];
var q3Answers = ["Houston", "Dallas", "Austin", "San Antonio"];
var AnswerKey = ["A", "B", "C"]
var userChoice = "";
var correctCount = 0;
var incorrectCount = 0;
var x = 0;
var questionNumber = 0;

function loadNextQuestion(x){
    $("#question").text(Questions[x]);
    $("#answer-A").text(q1Answers[x+3]);
    $("#answer-B").text(q1Answers[x+4]);
    $("#answer-C").text(q1Answers[x+5]);
    $("#answer-D").text(q1Answers[x+6]);
}
window.onload = function() {

    $("#question").text(Questions[0]);
    $("#answer-A").text(q1Answers[0]);
    $("#answer-B").text(q1Answers[1]);
    $("#answer-C").text(q1Answers[2]);
    $("#answer-D").text(q1Answers[3]);

    $("#A-button").on("click", AnswerA);
    $("#B-button").on("click", AnswerB);
    $("#C-button").on("click", AnswerC);
    $("#D-button").on("click", AnswerD);

    $("#restart-button").on("click", restart);
  };

  function AnswerA (){
      userChoice = "A"
      if (userChoice == AnswerKey[x]){
        correctCount = correctCount + 1
        $("#correct-count").text(correctCount);
        x = x+1
        loadNextQuestion(x);
    }
    else {
       
        incorrectCount = incorrectCount + 1
        $("#incorrect-count").text(incorrectCount);
        x = x+1
        loadNextQuestion(x);
    }
    }

    function AnswerB (){
        userChoice = "B"
        if (userChoice == AnswerKey[x]){
          correctCount = correctCount + 1
          $("#correct-count").text(correctCount);
          x = x+1
          loadNextQuestion(x);
      }
      else {
        
          incorrectCount = incorrectCount + 1
          $("#incorrect-count").text(incorrectCount);
          x = x+1
          loadNextQuestion(x);
      }
      }

      function AnswerC (){
        userChoice = "C"
        if (userChoice == AnswerKey[x]){
          correctCount = correctCount + 1
          $("#correct-count").text(correctCount);
          x = x+1
          loadNextQuestion(x);
      }
      else {
         
          incorrectCount = incorrectCount + 1
          $("#incorrect-count").text(incorrectCount);
          x = x+1
          loadNextQuestion(x);
      }
      }

      function AnswerD (){
        userChoice = "D"
        if (userChoice == AnswerKey[x]){
          
          correctCount = correctCount + 1
          $("#correct-count").text(correctCount);
          x = x+1
          loadNextQuestion(x);
      }
      else {
        
          incorrectCount = incorrectCount + 1
          $("#incorrect-count").text(incorrectCount);
          x = x+1
          loadNextQuestion(x);
      }
      }

   