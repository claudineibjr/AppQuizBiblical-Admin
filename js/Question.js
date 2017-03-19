function Question(_strQuestion, _strAnswer, _strAltA, _strAltB, _strAltC, _strAltD, _strTextBiblical, _intLevelQuestion, _strTestamento, _strSecao) {

    this.idQuestion;
    this.strQuestion = _strQuestion
    this.strAnswer = _strAnswer
    this.strAlternative_A = _strAltA
    this.strAlternative_B = _strAltB
    this.strAlternative_C = _strAltC
    this.strAlternative_D = _strAltD
    this.strTextBiblical = _strTextBiblical;
    this.intLevelQuestion = _intLevelQuestion;
	this.strTestamento = _strTestamento;
	this.strSecao = _strSecao;

    //Criação da pergunta no banco de dados do Firebase
    this.addQuestion = function () {

        var nextQuestionNum;

        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            nextQuestionNum = snapshot.val();
        });

        //TODO
        alert("Espera um pouco... só um pouco!");
        firebase.database().ref('question/' + nextQuestionNum).set({
            idQuestion: nextQuestionNum,
            question: strQuestion,
            answer: answer,
            alternative_A: alt_A,
            alternative_B: alt_B,
            alternative_C: alt_C,
            alternative_D: alt_D,
            textBiblical: this.strTextBiblical,
            levelQuestion: levelQuestion
        });
        
        var updates = {};
        nextQuestionNum++
        updates['/parameters/nextQuestionNum'] = nextQuestionNum;
        firebase.database().ref().update(updates);

        limpaTela();

    }

}