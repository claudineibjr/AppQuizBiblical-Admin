class Question{

    idQuestion: number;
    strQuestion: string;
    strAnswer: string;
    strAlternative_A: string;
    strAlternative_B: string;
    strAlternative_C: string;
    strAlternative_D: string;
    strTextBiblical: string;
    intLevelQuestion: string;
    strTestamento: string;
    strSecao: string;

    constructor(_strQuestion: string, _strAnswer: string, _strAltA: string, _strAltB: string, _strAltC: string, _strAltD: string, _strTextBiblical: string, _intLevelQuestion: string, _strTestamento: string, _strSecao: string){
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
    }

    // Criação da pergunta no banco de dados do Firebase
    public addQuestion(){

        var nextQuestionNum;

        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            nextQuestionNum = snapshot.val();
        });

        //TODO
        alert("Espera um pouco... s� um pouco!");
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
