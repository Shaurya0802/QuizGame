class Questions{
    constructor(){
        this.ques;
        this.option1;
        this.option2;
        this.option3;
        this.option4;
        this.answer;
    }

    getQuestions(){
        /*var question1 = database.ref('questions/q1/ques');
        question1.on("value",(data)=>{
            ques1 = data.val();
        })

        var option1 = databse.ref('questions/q1/option1');
        option1.on("value",(data)=>{
            opt1 = data.val();
        })

        var option2 = databse.ref('questions/q1/option2');
        option2.on("value",(data)=>{
            opt2 = data.val();
        })

        var option3 = databse.ref('questions/q1/option3');
        option3.on("value",(data)=>{
            opt3 = data.val();
        })

        var option4 = databse.ref('questions/q1/option4');
        option4.on("value",(data)=>{
            opt4 = data.val();
        })
        
        var answer1 = databse.ref('questions/q1/Answer');
        answer1.on("value",(data)=>{
            ans1 = data.val();
        })

        var puzzle1 = createElement('h2');
        puzzle1.html(ques1);
        puzzle1.position(displayWidth/2,displayHeight/2 - 150)*/

        var getQuestionInfo = database.ref('questions');
        getQuestionInfo.on("value",(data)=>{
            allQuestions = data.val();
            console.log(allQuestions);
        })
    }      
}