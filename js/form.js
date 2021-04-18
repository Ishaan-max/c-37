class Form{
    constructor(){
    this.title = createElement('h1')
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    };
    display(){
        
        this.title.html("car racing game");
        this.title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(130,160);
        })
    }
}