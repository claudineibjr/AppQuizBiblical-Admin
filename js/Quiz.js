// Atributos da Questão
var strQuestion, alt_A, alt_B, alt_C, alt_D, biblicalText, levelQuestion, answer, strTestamento, strSecao;
function createQuestion() {
    strQuestion = (document.getElementById("txtQuestao").value);
    alt_A = (document.getElementById("txtAlternativa_A").value);
    alt_B = (document.getElementById("txtAlternativa_B").value);
    alt_C = (document.getElementById("txtAlternativa_C").value);
    alt_D = (document.getElementById("txtAlternativa_D").value);
    biblicalText = (document.getElementById("txtTextoBiblico").value);
    levelQuestion = parseInt((document.getElementById("levelQuestion").value));
    answer = ((document.getElementById("radioAnswerA").checked) ? 0 :
        ((document.getElementById("radioAnswerB").checked) ? 1 :
            ((document.getElementById("radioAnswerC").checked) ? 2 :
                ((document.getElementById("radioAnswerD").checked) ? 3 : ""))));
    strTestamento = ((document.getElementById("radioAntigoTestamento").checked) ? 1 :
        ((document.getElementById("radioNovoTestamento").checked) ? 2 : ""));
    strSecao = ((document.getElementById("radioPentateuco").checked) ? "Pentateuco" :
        ((document.getElementById("radioHistoria_A").checked) ? "História 1" :
            ((document.getElementById("radioPoesia").checked) ? "Poesia" :
                ((document.getElementById("radioProfetasMaiores").checked) ? "Profetas Maiores" :
                    ((document.getElementById("radioProfetasMenores").checked) ? "Profetas Menores" :
                        ((document.getElementById("radioEvangelhos").checked) ? "Evangelhos" :
                            ((document.getElementById("radioHistoria_B").checked) ? "História 2" :
                                ((document.getElementById("radioCartas").checked) ? "Cartas" :
                                    ((document.getElementById("radioProfecia").checked) ? "Profecia" : "")))))))));
    if (!verifyFields()) {
        alert("False");
    }
    else {
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
function verifyFields() {
    if (strQuestion != "" &&
        alt_A != "" &&
        alt_B != "" &&
        alt_C != "" &&
        alt_D != "" &&
        levelQuestion != "" &&
        (answer == 0 || answer == 1 || answer == 2 || answer == 3) &&
        (strTestamento == 1 || strTestamento == 2) &&
        strSecao != "")
        return true;
    else
        return false;
}
