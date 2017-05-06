// Atributos da Questão
var question, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, answer, strTestamento, strSecao, strReferencia;
function onLoad() {
}
function createQuestion() {
    question = (document.getElementById("txtQuestao").value);
    alt_A = (document.getElementById("txtAlternativa_A").value);
    alt_B = (document.getElementById("txtAlternativa_B").value);
    alt_C = (document.getElementById("txtAlternativa_C").value);
    alt_D = (document.getElementById("txtAlternativa_D").value);
    biblicalText = (document.getElementById("txtTextoBiblico").value);
    levelQuestion = parseInt((document.getElementById("levelQuestion").value));
    strReferencia = (document.getElementById("txtReferenciaBiblica").value);
    answer = parseInt(getChecado("alternativas"));
    strTestamento = getChecado("testamentos");
    strSecao = getChecado("secoes");
    if (!verifyFields()) {
        alert("False");
    }
    else {
        var question = new Question(question, answer, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, strTestamento, strSecao, strReferencia);
        question.addQuestion();
        limpaTela();
    }
}
function getChecado(nomeRadioButton) {
    var opcoes = document.getElementsByName(nomeRadioButton);
    var checado;
    for (var iCount = 0; iCount < opcoes.length; iCount++) {
        if (opcoes[iCount].checked)
            checado = opcoes[iCount].value;
    }
    return checado;
}
function limpaTela() {
    document.getElementById("txtQuestao").value = "";
    document.getElementById("txtAlternativa_A").value = "";
    document.getElementById("txtAlternativa_B").value = "";
    document.getElementById("txtAlternativa_C").value = "";
    document.getElementById("txtAlternativa_D").value = "";
    document.getElementById("txtTextoBiblico").value = "";
    document.getElementById("txtReferenciaBiblica").value = "";
    document.getElementById("levelQuestion").value = "0";
    document.getElementById("radioAnswerA").checked = false;
    document.getElementById("radioAnswerB").checked = false;
    document.getElementById("radioAnswerC").checked = false;
    document.getElementById("radioAnswerD").checked = false;
    document.getElementById("radioAntigoTestamento").checked = false;
    document.getElementById("radioNovoTestamento").checked = false;
    document.getElementById("radioPentateuco").checked = false;
    document.getElementById("radioHistoria_A").checked = false;
    document.getElementById("radioPoesia").checked = false;
    document.getElementById("radioProfetasMaiores").checked = false;
    document.getElementById("radioProfetasMenores").checked = false;
    document.getElementById("radioEvangelhos").checked = false;
    document.getElementById("radioHistoria_B").checked = false;
    document.getElementById("radioCartas").checked = false;
    document.getElementById("radioProfecia").checked = false;
}
function verifyFields() {
    if (question != "" &&
        alt_A != "" &&
        alt_B != "" &&
        alt_C != "" &&
        alt_D != "" &&
        levelQuestion != "" &&
        (answer == 0 || answer == 1 || answer == 2 || answer == 3) &&
        strTestamento != "" &&
        strSecao != "" &&
        strReferencia != "")
        return true;
    else
        return false;
}
