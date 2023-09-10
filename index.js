// clicking mouse buttons

var n = document.querySelectorAll(".drum").length

for (var i = 0 ; i < n ; i++){

document.querySelectorAll("button")[i].addEventListener("click" , function(){


     //this.style.color = "white";
     

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

 } );

}

// Detecting keyboard press

document.addEventListener("keydown" , function(pressed){

    makeSound(pressed.key);

    buttonAnimation(pressed.key);

} )



// sound of buttons

function makeSound(click){

    switch (click) {
        case "w":
         
        // adding sound 
         var tom1 = new Audio('./sounds/tom-1.mp3');
         tom1.play();

        // sound syntax 
         break;
           
        case "a":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
         var tom4 = new Audio('./sounds/tom-4.mp3');
         tom4.play();
         break;

         case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

            case "k":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;   
        
                case "l":
                    var kick = new Audio('./sounds/kick-bass.mp3');
                    kick.play();
                    break;
       
        default: console.log(buttonInnerHTML)            
    }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector( "." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
        
    }, 100);
}


