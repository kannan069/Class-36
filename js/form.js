class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(130,20);

        var input = createInput('name');
        input.position(130,160);
        
        var button = createButton('play');
        button.position(250,200);
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            var greet = createElement('h3');
            greet.html('hello' + name);
            greet.position(130,160);
        })


    }
}