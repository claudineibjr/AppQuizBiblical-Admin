var Parameter = (function () {
    function Parameter() {
    }
    Parameter.prototype.getNextQuestionNum = function () {
        firebase.database().ref('/parameters/nextQuestionNum').once('value').then(function (snapshot) {
            this.nextQuestionNum = snapshot.val();
        });
        return this.getNextQuestionNum;
    };
    return Parameter;
}());
