myscore=0;
cross=true;
document.onkeydown=function(e){
  console.log("key code is :"+e.keyCode);
  if(e.keyCode==38){
    dino=document.getElementById("dino")
    dino.classList.add('animatedino');
    setTimeout(() => {
        dino.classList.remove('animatedino')
     }, 800);
  }

 
 if(e.keyCode==39){
    dino=document.getElementById("dino")
    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    console.log(dx)
    dino.style.left=(dx+130)+"px";
  }
  if(e.keyCode==37){
    dino=document.getElementById("dino")
    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left=(dx-130)+"px";
  }
}

setInterval(() => {
    
    dino=document.getElementById("dino")
    gameover=document.querySelector(".gameover")
    //console.log(gameover)
   obstacle=document.querySelector(".obstacleAni")
   
    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))
    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))
  
    let x=Math.abs(dx-ox)
    let y=Math.abs(dy-oy)
    
    
    if(x<150 && y<120){
        console.log(gameover)
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacle')
        myscore=myscore+0;
        
    }
    else if(x<144 &&cross) {
        myscore=myscore+1;
       updateScore(myscore)
       cross=false;
       setTimeout(() => {
        cross=true;
       }, 1000);
       setTimeout(() => {//increases the dragon speed after this much time
        dur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
        newDur=dur-0.02
        obstacle.style.animationDuration=newDur+'s'
       }, 500);
    }
}, 100);
  function updateScore(myscore){
         score.innerHTML="YOUR SCORE: "+myscore;
  }
  

