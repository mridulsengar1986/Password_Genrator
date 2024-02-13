const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
"4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let inp1 = document.getElementById("pwd1-el")
let inp2 = document.getElementById("pwd2-el")
let random1
let random2
function pwdGenrator() {    
    inp1.value=""
    inp2.value=""
 for(let i=0 ; i<16; i++){
       random1 = characters[Math.floor(Math.random()*characters.length)]
       inp1.value += random1
    }
 for(let i=0 ; i<16; i++){
       random2 = characters[Math.floor(Math.random()*characters.length)]
       inp2.value += random2
    }
    
   
   }


























































