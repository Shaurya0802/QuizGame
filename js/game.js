class Game{
    constructor(){
        this.puzzle1 = createElement('h2');
        this.option1 = createButton("");
        this.option2 = createButton("");
        this.option3 = createButton("");
        this.option4 = createButton("");

        this.option1.style("background-color","#ffdb58");
        this.option2.style("background-color","#ffdb58");
        this.option3.style("background-color","#ffdb58");
        this.option4.style("background-color","#ffdb58");

        this.nextButton = createButton("Next");

        this.correct = createElement('h2');
        this.wrong = createElement('h2');

        this.finalScore = createElement('h1');
        this.finalScore2 = createElement('h1');

        this.feedback = createElement('h1');

        this.number = createElement('h2');
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player;
            form = new Form;
            form.display();
            ques = new Questions();
        }
    }

    play(){
        form.hide();

        /*if(counter > 0 && frameCount%60 === 0){
               counter--; 
        }

        if(counter === 0){
            questionNum += 1;
        }*/

        var display_position = 50;

        Questions.getEachQuestion(questionNum);
        if(question!== undefined){
            //Questions.getEachQuestion(questionNum);
            display_position += 100;
            this.puzzle1.html(question.ques);
            this.puzzle1.position(windowWidth/2 - 200, windowHeight/2 - 200);
            this.puzzle1.style("background-color","black");
            this.puzzle1.style("color","white");
            this.puzzle1.style("font-family","Comic Sans MS");

            this.option1.html(question.option1);
            this.option2.html(question.option2);
            this.option3.html(question.option3);
            this.option4.html(question.option4);
            
            this.option1.position(windowWidth/2 - 150,windowHeight/2 - 110);
            this.option2.position(windowWidth/2 - 150,windowHeight/2 - 80);
            this.option3.position(windowWidth/2 - 150,windowHeight/2 - 50);
            this.option4.position(windowWidth/2 - 150,windowHeight/2 - 20);

            this.option1.style("font-family","Comic Sans MS");
            
            this.option1.style("color","#0000ff");

            this.option2.style("font-family","Comic Sans MS");
            this.option2.style("color","#0000ff");

            this.option3.style("font-family","Comic Sans MS");
            this.option3.style("color","#0000ff");

            this.option4.style("font-family","Comic Sans MS");
            this.option4.style("color","#0000ff");

            this.number.html("Q." + no + ":");
            this.number.position(windowWidth/2 - 275,windowHeight/2 - 200);
            this.number.style("background-color","black");
            this.number.style("color","white");
            this.number.style("font-family","Comic Sans MS");

            this.option1.mousePressed(()=>{
                /*this.option2.hide();
                this.option3.hide();
                this.option4.hide();*/
                userAnswers =  this.option1.html();
                sound1.play();

                this.changeColor(question.Answer);
            });

            this.option2.mousePressed(()=>{
                /*this.option1.hide();
                this.option3.hide();
                this.option4.hide();*/
                userAnswers =  this.option2.html();
                sound1.play();

                this.changeColor(question.Answer);
            });

            this.option3.mousePressed(()=>{
                /*this.option1.hide();
                this.option2.hide();;
                this.option4.hide();*/
                userAnswers =  this.option3.html();
                sound1.play();

                this.changeColor(question.Answer);
            });
            
            this.option4.mousePressed(()=>{
                /*this.option1.hide();
                this.option2.hide();
                this.option3.hide();*/
                userAnswers =  this.option4.html();
                sound1.play();

                this.changeColor(question.Answer);
            });

            this.nextButton.position(windowWidth/2 + 150,windowHeight/2 + 75);

            this.nextButton.style("font-family","Comic Sans MS");
            this.nextButton.style("background-color","#ffdb58");
            this.nextButton.style("color","#0000ff");

            if(counter === 15){
                counter = -1;
                questionNum = questionNum + 1;

                sound3.play();
            }
            
            this.nextButton.mousePressed(()=>{
                counter = -1;

                this.option1.style("background-color","#ffdb58")
                this.option2.style("background-color","#ffdb58")
                this.option3.style("background-color","#ffdb58")
                this.option4.style("background-color","#ffdb58")

                no++;

                questionNum = questionNum + 1;
                sound1.play();

                this.option1.show();
                this.option2.show();
                this.option3.show();
                this.option4.show();

                if(userAnswers === question.Answer){
                    score = score + 10;

                    sound2.play();
    
                    player.score = score;
                    player.update();
                }
    
                if(userAnswers !== question.Answer){
                    sound3.play();
                }

                this.correct.hide();
                this.wrong.hide();
            })

            if(questionNum === 10){
                this.nextButton.html("Finish");
                gameState = 2;
            }
        }
    }

    changeColor(answer){
        switch(answer){
            case this.option1.html():
                this.option1.style("background-color", "#00FF00");

                this.option2.style("background-color", "#FF0000");

                this.option3.style("background-color", "#FF0000");

                this.option4.style("background-color", "#FF0000");

                break;

            case this.option2.html():
                this.option1.style("background-color", "#FF0000");

                this.option2.style("background-color", "#00FF00");

                this.option3.style("background-color", "#FF0000");

                this.option4.style("background-color", "#FF0000");

                break;

            case this.option3.html():
                this.option1.style("background-color", "#FF0000");

                this.option2.style("background-color", "#FF0000");

                this.option3.style("background-color", "#00FF00");

                this.option4.style("background-color", "#FF0000");

                break;    

            case this.option4.html():
                this.option1.style("background-color", "#FF0000");

                this.option2.style("background-color", "#FF0000");

                this.option3.style("background-color", "#FF0000");

                this.option4.style("background-color", "#00FF00");

                break;     
                
            default : break;    
        }
    }

    end(){
        this.nextButton.mousePressed(()=>{
            counter = counter - 1;
            this.puzzle1.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.number.hide();

            this.nextButton.hide();

            this.correct.hide();
            this.wrong.hide();

            this.finalScore.html("Your Score : ");
            this.finalScore.position(windowWidth/2 - 180,windowHeight/2 - 200);

            this.finalScore2.html(player.score);
            this.finalScore2.position(windowWidth/2 + 20,windowHeight/2 - 200);

            this.finalScore.style("font-family","Comic Sans MS");
            this.finalScore.style("background-color","#000080");
            this.finalScore.style("color","orange");

            this.finalScore2.style("font-family","Comic Sans MS");
            this.finalScore2.style("background-color","#000080");
            this.finalScore2.style("color","orange");

            if(player.score <= 30){
                this.feedback.html("Better luck next time 😩😩");
                this.feedback.position(windowWidth/2 - 260,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }else if(player.score <= 60){
                this.feedback.html("Satisfactory 😐🥱");
                this.feedback.position(windowWidth/2 - 380,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }else if(player.score <= 90){
                this.feedback.html("Well Done 👍👍👌👌");
                this.feedback.position(windowWidth/2 - 170,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }else if(player.score <= 120){
                this.feedback.html("Amazing! 🥳🤩😊😎");
                this.feedback.position(windowWidth/2 - 300,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }else if(player.score <= 150){
                this.feedback.html("Hats Off ✔✔🎂🎂😱😱🤗🤗🤐🤐👏👏✌✌");
                this.feedback.position(windowWidth/2 - 400,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }else if(player.score === 180){
                this.feedback.html("Incredible!! 👨‍🎓👩‍🎓👨‍🎓👩‍🎓✨✨🎊🎊🎉🎉");
                this.feedback.position(windowWidth/2 - 400,windowHeight/2 - 150);
                this.feedback.style("font-family","Comic Sans MS");
                this.feedback.style("background-color","#000080");
                this.feedback.style("color","orange");
            }
        
        })
    }


}