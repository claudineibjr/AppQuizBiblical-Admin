var firebase;
var Question = (function () {
    function Question(_strQuestion, _strAnswer, _strAltA, _strAltB, _strAltC, _strAltD, _strTextBiblical, _intLevelQuestion, _strTestamento, _strSecao) {
        this.idQuestion;
        this.strQuestion = _strQuestion;
        this.strAnswer = _strAnswer;
        this.strAlternative_A = _strAltA;
        this.strAlternative_B = _strAltB;
        this.strAlternative_C = _strAltC;
        this.strAlternative_D = _strAltD;
        this.strTextBiblical = _strTextBiblical;
        this.intLevelQuestion = _intLevelQuestion;
        this.strTestamento = _strTestamento;
        this.strSecao = _strSecao;
    }
    // Criação da pergunta no banco de dados do Firebase
    Question.prototype.addQuestion = function () {
        var nextQuestionNum;
        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            nextQuestionNum = snapshot.val();
        });
        //TODO
        alert("Espera um pouco... s� um pouco!");
        firebase.database().ref('question/' + nextQuestionNum).set({
            idQuestion: nextQuestionNum,
            question: this.strQuestion,
            answer: this.strAnswer,
            alternative_A: this.strAlternative_A,
            alternative_B: this.strAlternative_B,
            alternative_C: this.strAlternative_C,
            alternative_D: this.strAlternative_D,
            textBiblical: this.strTextBiblical,
            levelQuestion: this.intLevelQuestion,
            testamento: this.strTestamento,
            secaoBiblia: this.strSecao
        });
        var updates = {};
        nextQuestionNum++;
        updates['/parameters/nextQuestionNum'] = nextQuestionNum;
        firebase.database().ref().update(updates);
        limpaTela();
    };
    return Question;
}());
