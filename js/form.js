class Form{
    constructor(){
        this.puzzle1 = createElement('h2');
        this.option1 = createRadio();
    }

    display(){
        var title = createElement('h1');
        title.html("Quiz Game");
        title.position(displayWidth/2 - 100,10);

        var button = createButton("Play");
        button.position(displayWidth/2 - 70,displayHeight/2 - 100);

        button.mousePressed(function(){
            button.hide();

            playerCount += 1;

            //player.updateCount(playerCount);

            ques = new Questions();

            ques.getQuestions();
        })    
    }

    play(){
        var display_position = 50;

        for(var q in allQuestions){
            display_position += 100;

            //text(allQuestions[q].ques + allQuestions[q].option1 + allQuestions[q].option2 + allQuestions[q].option3 + allQuestions[q].option4 + allQuestions[q].Answer,displayWidth/2 - 250,display_position);
            this.puzzle1.html(allQuestions[q].ques);
            this.puzzle1.position(displayWidth/2 - 150, display_position);

            this.option1.html(allQuestions[q].option1);
            /*this.option1.option(allQuestions[q].option1);
            this.option1.option(allQuestions[q].option2);
            this.option1.option(allQuestions[q].option3);
            this.option1.option(allQuestions[q].option4);*/
            this.option1.position(displayWidth/2 - 150,display_position + 50);
            break;
        }
    }
}