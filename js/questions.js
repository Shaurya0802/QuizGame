class Questions{
    constructor(){}

    getQuestions(){
        var getQuestionInfo = database.ref('questions');
        getQuestionInfo.on("value",(data)=>{
            allQuestions = data.val();
        })
    }      

    static getEachQuestion(questionNum){
        var getQuestion = database.ref('questions/q' + questionNum);
        getQuestion.on("value",function(data){
            question = data.val();
        })
    }
}