class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.text = createElement('h2');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.text.hide();
    }

    display(){
        this.button.position(windowWidth/2 - 40,windowHeight/2 - 30);
        
        this.button.style("font-family","Comic Sans MS");
        this.button.style("background-color","#ffdb58");
        this.button.style("color","brown");

        this.input.position(windowWidth/2 - 90,windowHeight/2 - 140);
        this.input.style("background-color","#ffdb58");
        this.input.style("color","brown");

        this.text.html("Don't try to cheat. You're being looked at 🕵️‍♀️🕵️‍♀️👮‍♂️👮‍♂️.(Just joking 🤣🤣)");
        this.text.position(windowWidth/2 - 370,windowHeight/2 - 110);
        this.text.style("background-color","#ffdb58");
        this.text.style("color","brown");
        
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