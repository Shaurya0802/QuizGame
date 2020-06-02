class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement('h1');
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.title.html("Quiz Game");
        this.title.position(displayWidth/2 - 110,10);
        this.title.style("font-family","Comic Sans MS");

        this.button.position(displayWidth/2 - 70,displayHeight/2 - 100);
        
        this.button.style("font-family","Comic Sans MS");
        this.button.style("background-color","#ffff00");
        this.button.style("color","#0000ff");

        this.input.position(displayWidth/2 - 70,displayHeight/2 - 140);
        
        this.button.mousePressed(()=>{
            this.button.hide();

            this.input.hide();

            sound1.play();

            playerCount += 1;

            player.name = this.input.value();

            player.updateCount(playerCount);

            gameState = 1;

            player.index += 1;
        }) 
    }
}