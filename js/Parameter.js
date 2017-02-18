function Parameter() {   

    this.teste = function () {

        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            this.nextQuestionNum = snapshot.val();
        });

        return this.nextQuestionNum;
    }

}