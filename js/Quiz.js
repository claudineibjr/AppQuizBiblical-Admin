// Atributos da Questão
var strQuestion, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, answer;

function onLoad() {
}

function createQuestion(){
	strQuestion = document.getElementById("txtQuestao").value;
	alt_A = document.getElementById("txtAlternativa_A").value;
	alt_B = document.getElementById("txtAlternativa_B").value;
	alt_C = document.getElementById("txtAlternativa_C").value;
	alt_D = document.getElementById("txtAlternativa_D").value;
	biblicalText = document.getElementById("txtTextoBiblico").value;
	levelQuestion = parseInt(document.getElementById("levelQuestion").value);
	answer = (document.getElementById("radioAnswerA").checked ? 0 :
                    (document.getElementById("radioAnswerB").checked ? 1 :
                        (document.getElementById("radioAnswerC").checked ? 2 :
                            (document.getElementById("radioAnswerD").checked ? 3 : "")
                        )
                    )
                );

	if (!verifyFields()){
	    alert("False");
	} else {
	    var question = new Question(strQuestion, answer, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion);
	    question.addQuestion();
		limpaTela();
	}
}
function limpaTela() {
    strQuestion.value = "";
    alt_A.value = "";
    alt_B.value = "";
    alt_C.value = "";
    alt_D.value = "";
    biblicalText.value = "";
    levelQuestion.value = 1;
}
function verifyFields(){
	
	if (strQuestion != "" && alt_A != "" & alt_B != "" & alt_C != "" & alt_D != "" & levelQuestion != "" & (answer == 0 || answer == 1 || answer == 2 || answer == 3))
		return true;
	else
		return false;
}