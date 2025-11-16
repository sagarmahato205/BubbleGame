function makeBubble(){
   var clutter ="";
   for(var i =1;i<=126;i++){
    var num = Math.floor(Math.random()*10);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clutter+=`<div class="bubble ">${num}</div>`;
    
   }
document.querySelector("#part2").innerHTML=clutter;
}

var Timer =60;
function runTimer(){
    var timeInt = setInterval(() => {
        if(Timer>0){
            Timer--;
            document.querySelector("#runTimer").textContent=Timer;
            document.querySelector("#runTimer").style.color="#000";
        }else{
            clearInterval(timeInt);
            document.querySelector("#part2").innerHTML=`<h1> Game Over </h1>`
        }
    }, 1000);
}
var newNum=0;
function NewHit(){
     newNum = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").innerHTML=newNum;
    document.querySelector("#hitvalue").style.color="#000";
}
var score =0;
function currentScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent=score;
    document.querySelector("#scoreValue").style.color="#000";
}
document.querySelector("#part2").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === newNum){
        currentScore();
        makeBubble();
        NewHit();
    }
});
makeBubble();
NewHit();
runTimer();
 