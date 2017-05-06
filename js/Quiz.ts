// Atributos da Questão
var question, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, answer, strTestamento, strSecao, strReferencia;

function onLoad(){

}

function createQuestion(): void{

	question = (( < HTMLInputElement > document.getElementById("txtQuestao")).value);
	alt_A = (( < HTMLInputElement > document.getElementById("txtAlternativa_A")).value);
	alt_B = (( < HTMLInputElement > document.getElementById("txtAlternativa_B")).value);
	alt_C = (( < HTMLInputElement > document.getElementById("txtAlternativa_C")).value);
	alt_D = (( < HTMLInputElement > document.getElementById("txtAlternativa_D")).value);
	biblicalText = (( < HTMLInputElement > document.getElementById("txtTextoBiblico")).value);
	levelQuestion = parseInt( (( < HTMLInputElement > document.getElementById("levelQuestion")).value));
	strReferencia = (( < HTMLInputElement > document.getElementById("txtReferenciaBiblica")).value);

	answer = parseInt(getChecado("alternativas"));
	strTestamento = getChecado("testamentos");
	strSecao = getChecado("secoes");
	

	if (!verifyFields()){
	    alert("False");
	} else {
	    var question = new Question(question, answer, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, strTestamento, strSecao, strReferencia);
	    question.addQuestion();
		limpaTela();
	}
}

function getChecado(nomeRadioButton: string): string{
	var opcoes: NodeListOf<HTMLElement> = document.getElementsByName(nomeRadioButton);
	var checado: string;

	for (var iCount: number = 0; iCount < opcoes.length; iCount++){
		if ( (<HTMLInputElement> opcoes[iCount]).checked )
			checado = (<HTMLInputElement> opcoes[iCount]).value;
	}

	return checado;
}

function limpaTela() {
    ( < HTMLInputElement > document.getElementById("txtQuestao")).value = "";

	( < HTMLInputElement > document.getElementById("txtAlternativa_A")).value = "";
	( < HTMLInputElement > document.getElementById("txtAlternativa_B")).value = "";
	( < HTMLInputElement > document.getElementById("txtAlternativa_C")).value = "";
	( < HTMLInputElement > document.getElementById("txtAlternativa_D")).value = "";

	( < HTMLInputElement > document.getElementById("txtTextoBiblico")).value = "";
	( < HTMLInputElement > document.getElementById("txtReferenciaBiblica")).value = "";
	
	( < HTMLInputElement > document.getElementById("levelQuestion")).value = "0";
	
	( < HTMLInputElement > document.getElementById("radioAnswerA")).checked = false;
	( < HTMLInputElement > document.getElementById("radioAnswerB")).checked = false;
	( < HTMLInputElement > document.getElementById("radioAnswerC")).checked = false;
	( < HTMLInputElement > document.getElementById("radioAnswerD")).checked = false;

	( < HTMLInputElement > document.getElementById("radioAntigoTestamento")).checked = false;
	( < HTMLInputElement > document.getElementById("radioNovoTestamento")).checked = false;

	( < HTMLInputElement > document.getElementById("radioPentateuco")).checked = false;
	( < HTMLInputElement > document.getElementById("radioHistoria_A")).checked = false;
	( < HTMLInputElement > document.getElementById("radioPoesia")).checked = false;
	( < HTMLInputElement > document.getElementById("radioProfetasMaiores")).checked = false;
	( < HTMLInputElement > document.getElementById("radioProfetasMenores")).checked = false;
	( < HTMLInputElement > document.getElementById("radioEvangelhos")).checked = false;
	( < HTMLInputElement > document.getElementById("radioHistoria_B")).checked = false;
	( < HTMLInputElement > document.getElementById("radioCartas")).checked = false;
	( < HTMLInputElement > document.getElementById("radioProfecia")).checked = false;
}
function verifyFields(){
	
	if (	question != "" && 
			alt_A != "" && 
			alt_B != "" && 
			alt_C != "" && 
			alt_D != "" && 
			levelQuestion != "" && 
			(answer == 0 || answer == 1 || answer == 2 || answer == 3) && 
			strTestamento != "" && 
			strSecao != "" &&
			strReferencia != ""
		)
		return true;
	else
		return false;
}