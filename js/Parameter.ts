class Parameter{

    nextQuestionNum: number;

    public getNextQuestionNum(){

        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            this.nextQuestionNum = snapshot.val();
        });

        return this.getNextQuestionNum

    }

}