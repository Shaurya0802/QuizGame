class Form{
    constructor(){
        this.puzzle1 = createElement('h2');
        this.option1 = createButton("");
        this.option2 = createButton("");
        this.option3 = createButton("");
        this.option4 = createButton("");

        this.puzzle2 = createElement('h2');
        this.option5 = createRadio();
        this.option6 = createRadio();
        this.option7 = createRadio();
        this.option8 = createRadio();
    }

    display(){
        var title = createElement('h1');
        title.html("Quiz Game");
        title.position(displayWidth/2 - 110,10);
        title.style("font-family","Comic Sans MS");

        var button = createButton("Play");
        button.position(displayWidth/2 - 70,displayHeight/2 - 100);
        
        button.style("font-family","Comic Sans MS");
        button.style("background-color",255,100,30);
        button.style("color","black");
        
        button.mousePressed(function(){
            button.hide();

            sound3.play();

            playerCount += 1;

            //player.updateCount(playerCount);

            ques = new Questions();

            ques.getQuestions();

            var button2 = createButton("Next");
            button2.position(displayWidth/2 + 150,displayHeight/2 + 75);
                    
            button2.style("font-family","Comic Sans MS");
            button2.style("background-color","dark grey");
            button2.style("color","black");
        })    
    }

    play(){
        var display_position = 50;

        Questions.getEachQuestion();
        //console.log("In Play");
        Questions.getEachQuestion(questionNum);
        if(question!== undefined){
            Questions.getEachQuestion(questionNum);
            display_position += 100;
            //text(allQuestions[q].ques + allQuestions[q].option1 + allQuestions[q].option2 + allQuestions[q].option3 + allQuestions[q].option4 + allQuestions[q].Answer,displayWidth/2 - 250,display_position);
            this.puzzle1.html(question + questionNum.ques);
            this.puzzle1.position(displayWidth/2 - 150, displayHeight/2 - 200);
            this.puzzle1.style('color',"black");

            this.option1.html(question + questionNum.option1);
            //console.log(allQuestions[q].option1);
            this.option2.html(question + questionNum.option2);
            this.option3.html(question + questionNum.option3);
            this.option4.html(question + questionNum.option4);
            
            this.option1.position(displayWidth/2 - 150,displayHeight/2 - 150);
            this.option2.position(displayWidth/2 - 150,displayHeight/2 - 120);
            this.option3.position(displayWidth/2 - 150,displayHeight/2 - 90);
            this.option4.position(displayWidth/2 - 150,displayHeight/2 - 60);

            this.option1.style("font-family","Comic Sans MS");
            this.option1.style("background-color","#fff");
            this.option1.style("color","#00f");

            this.option2.style("font-family","Comic Sans MS");
            this.option2.style("background-color","fff");
            this.option2.style("color","#00f");

            this.option3.style("font-family","Comic Sans MS");
            this.option3.style("background-color","#fff");
            this.option3.style("color","#00f");

            this.option4.style("font-family","Comic Sans MS");
            this.option4.style("background-color","#fff");
            this.option4.style("color","#00f");

            this.option1.mousePressed(()=>{
                this.option1.style('background-color','red');
                userAnswers =  this.option1.html();
                sound3.play();
            });

            this.option2.mousePressed(()=>{
                this.option2.style('background-color','red');
                userAnswers =  this.option2.html();
                sound3.play();
            });

            this.option3.mousePressed(()=>{
                this.option3.style('background-color','red');
                userAnswers =  this.option3.html();
                sound3.play();
            });
            
            this.option4.mousePressed(()=>{
                this.option4.style('background-color','red');
                userAnswers =  this.option4.html();
                sound3.play();
            });

            button2.mousePressed(()=>{
                questionNum = questionNum + 1;
                sound3.play();
            })

            //console.log("userAnswer" + userAnswers)

            //if(userAnswers === question[q].Answer){
                /*var correct = createElement('h2');
                correct.html("Correct Answer!!");
                correct.position(displayWidth/2,displayHeight/2-100);
                            
                correct.style("font-family","Comic Sans MS");
                correct.style("background-color","dark grey");
                correct.style("color","black");*/
            //}
        }
    }
}