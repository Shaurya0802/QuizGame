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

        var button = createButton("Play");
        button.position(displayWidth/2 - 70,displayHeight/2 - 100);

        button.mousePressed(function(){
            button.hide();

            sound3.play();

            playerCount += 1;

            //player.updateCount(playerCount);

            ques = new Questions();

            ques.getQuestions();
        })    
    }

    play(){
        var display_position = 50;
        //console.log("In Play");
        if(allQuestions!== undefined){
            for(var q in allQuestions){
                display_position += 100;
                //text(allQuestions[q].ques + allQuestions[q].option1 + allQuestions[q].option2 + allQuestions[q].option3 + allQuestions[q].option4 + allQuestions[q].Answer,displayWidth/2 - 250,display_position);
                this.puzzle1.html(allQuestions[q].ques);
                this.puzzle1.position(displayWidth/2 - 150, displayHeight/2 - 200);

                this.option1.html(allQuestions[q].option1);
                //console.log(allQuestions[q].option1);
                this.option2.html(allQuestions[q].option2);
                this.option3.html(allQuestions[q].option3);
                this.option4.html(allQuestions[q].option4);
                
                this.option1.position(displayWidth/2 - 150,displayHeight/2 - 150);
                this.option2.position(displayWidth/2 - 150,displayHeight/2 - 120);
                this.option3.position(displayWidth/2 - 150,displayHeight/2 - 90);
                this.option4.position(displayWidth/2 - 150,displayHeight/2 - 60);

                this.option1.mousePressed(()=>{
                    this.option1.style('background-color','red');
                    userAnswers =  this.option1.html();
                });

                this.option2.mousePressed(()=>{
                    this.option2.style('background-color','red');
                    userAnswers =  this.option2.html();
                });
                this.option3.mousePressed(()=>{
                    this.option3.style('background-color','red');
                    userAnswers =  this.option3.html();
                });
                this.option4.mousePressed(()=>{
                    this.option4.style('background-color','red');
                    userAnswers =  this.option4.html();
                });

                console.log("userAnswer" + userAnswers)

                if(userAnswers === allQuestions[q].Answer){
                    console.log(allQuestions[q].Answer);
                }

                /*this.option1.option(allQuestions[q].option1);
                this.option1.option(allQuestions[q].option2);
                this.option1.option(allQuestions[q].option3);
                this.option1.option(allQuestions[q].option4);
                
                if(counter%15 === 0){
                this.puzzle1.hide();
                this.option1.hide(); 
                this.option2.hide(); 
                this.option3.hide(); 
                this.option4.hide(); 

                this.puzzle2.html(allQuestions[q].q2.ques);
                this.option5.html(allQuestions[q].q2.option1);
                this.option6.html(allQuestions[q].q2.option2);
                this.option7.html(allQuestions[q].q2.option3);
                this.option8.html(allQuestions[q].q2.option4);

                this.option5.position(displayWidth/2 - 150,display_position + 50);
                this.option6.position(displayWidth/2 - 150,display_position + 70);
                this.option7.position(displayWidth/2 - 150,display_position + 90);
                this.option8.position(displayWidth/2 - 150,display_position + 110);
                }*/
            }
    }

    }
}