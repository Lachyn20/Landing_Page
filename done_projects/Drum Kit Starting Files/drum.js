var x=document.querySelectorAll(".drum").length;

for(var i=0; i<x; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var y=this.innerHTML;
        sound(y);
        shadow(y);
    })
}


document.addEventListener("keypress", function(event){

    sound(event.key);
    shadow(event.key);

})

function shadow(paramt){
    document.querySelector("."+paramt).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("."+paramt).classList.remove("pressed");
    }, 100);
}


function sound(key){
    
    switch(key){

        case "w":
        var one=new Audio("./sounds/tom-1.mp3");
        one.play();
        break;

        case "a":
        var two=new Audio("./sounds/tom-2.mp3");
        two.play();
        break;

        case "s":
        var three=new Audio("./sounds/tom-3.mp3");
        three.play();
        break;

        case "d":
        var four=new Audio("./sounds/tom-4.mp3");
        four.play();
        break;

        case "j":
        var five=new Audio("./sounds/crash.mp3");
        five.play();
        break;

        case "k":
        var six=new Audio("./sounds/kick-bass.mp3");
        six.play();
        break;

        case "l":
        var sev=new Audio("./sounds/snare.mp3");
        sev.play();
        break;

        default: console.log("letter");

          }
        
        }
    
    