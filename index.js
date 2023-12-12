var numberofbtn= document.querySelectorAll(".drum").length;

/*for (var i=0;i < numberofbtn; i++){
document.querySelector("button").addEventListener("click",calls);
function calls(){
        alert("its clicked" + numberofbtn)
}}*/

for (var i=0;i < numberofbtn; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          var clickedbtn=this.innerHTML;
          
          switch (clickedbtn) {
                case 'w':
                        var audio=new Audio("sounds/crash.mp3");
                        audio.play();  
                        break;
          
                 case 'a':
                        var crash=new Audio("sounds/tom-4.mp3");
                        crash.play();  
                        break;
                case 's':
                        var snare=new Audio("sounds/tom-3.mp3");
                        snare.play();  
                         break;
                 case 'd':
                         var tom1=new Audio("sounds/tom-1.mp3");
                         tom1.play();  
                         break;

                case 'j':
                                var tom2=new Audio("sounds/tom-2.mp3");
                                tom2.play();  
                                break;
                                
                 case 'k':
                                        var tom3=new Audio("sounds/snare.mp3");
                                        tom3.play();  
                                        break;
                                        
                 case 'l':
                                                var tom4=new Audio("sounds/kick-bass.mp3");
                                                tom4.play();  
                                                break;

                default:
                        console.log (clickedbtn);
                        break;
          }

        });
}