// Atributos da Questão
var strQuestion, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, answer, strTestamento, strSecao;

function createQuestion(): void{
	strQuestion = (( < HTMLInputElement > document.getElementById("txtQuestao")).value);
	alt_A = (( < HTMLInputElement > document.getElementById("txtAlternativa_A")).value);
	alt_B = (( < HTMLInputElement > document.getElementById("txtAlternativa_B")).value);
	alt_C = (( < HTMLInputElement > document.getElementById("txtAlternativa_C")).value);
	alt_D = (( < HTMLInputElement > document.getElementById("txtAlternativa_D")).value);
	biblicalText = (( < HTMLInputElement > document.getElementById("txtTextoBiblico")).value);
	levelQuestion = parseInt( (( < HTMLInputElement > document.getElementById("levelQuestion")).value));
	answer = ((( < HTMLInputElement > document.getElementById("radioAnswerA")).checked) ? 0 :
                    ((( < HTMLInputElement > document.getElementById("radioAnswerB")).checked) ? 1 :
                        ((( < HTMLInputElement > document.getElementById("radioAnswerC")).checked) ? 2 :
                            ((( < HTMLInputElement > document.getElementById("radioAnswerD")).checked) ? 3 : "")
                        )
                    )
                );

	strTestamento = (	(( < HTMLInputElement > document.getElementById("radioAntigoTestamento")).checked) ? 1 : 
						(	(( < HTMLInputElement > document.getElementById("radioNovoTestamento")).checked) ? 2 : ""
						)
					);
	
	strSecao =	(	(( < HTMLInputElement > document.getElementById("radioPentateuco")).checked) ? "Pentateuco" :
					(	(( < HTMLInputElement > document.getElementById("radioHistoria_A")).checked) ? "História 1" :
						(	(( < HTMLInputElement > document.getElementById("radioPoesia")).checked) ? "Poesia" :
							(	(( < HTMLInputElement > document.getElementById("radioProfetasMaiores")).checked) ? "Profetas Maiores" :
								(	(( < HTMLInputElement > document.getElementById("radioProfetasMenores")).checked) ? "Profetas Menores" :
									(	(( < HTMLInputElement > document.getElementById("radioEvangelhos")).checked) ? "Evangelhos" :
										(	(( < HTMLInputElement > document.getElementById("radioHistoria_B")).checked) ? "História 2" :
											(	(( < HTMLInputElement > document.getElementById("radioCartas")).checked) ? "Cartas" :
												(	(( < HTMLInputElement > document.getElementById("radioProfecia")).checked) ? "Profecia" : ""
												)
											)
										)
									)
								)
							)
						)
					)
				);

	if (!verifyFields()){
	    alert("False");
	} else {
	    var question = new Question(strQuestion, answer, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, strTestamento, strSecao);
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
	
	if (	strQuestion != "" && 
			alt_A != "" && 
			alt_B != "" && 
			alt_C != "" && 
			alt_D != "" && 
			levelQuestion != "" && 
			(answer == 0 || answer == 1 || answer == 2 || answer == 3) && 
			(strTestamento == 1 || strTestamento == 2) && 
			strSecao != ""
		)
		return true;
	else
		return false;
}