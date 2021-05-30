quiztaker1_name = localStorage.getItem("quiztaker1_name");
quiztaker2_name = localStorage.getItem("quiztaker2_name");

quiztaker1_score = 0;
quiztaker2_score = 0;

document.getElementById("quiztaker1_name").innerHTML = quiztaker1_name + " :";
document.getElementById("quiztaker2_name").innerHTML = quiztaker2_name + " :";

document.getElementById("player1_score").innerHTML = quiztaker1_score;
document.getElementById("player2_score").innerHTML = quiztaker2_score;

document.getElementById("quiztaker_question").innerHTML = "Question Turn - " + quiztaker1_name;
document.getElementById("quiztaker_answer").innerHTML = "Answer Turn - " + quiztaker2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    question_number = "<h4>"+ number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

question_turn = "quiztaker1";
answer_turn = "quiztaker2";