const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const senumber=Math.trunc(Math.random()*20 +1)
let score2=20;
let highscore=0;
// document.querySelector('.number').textContent=senumber;

check.addEventListener('click', function() {
 if (!guess.value) {
        document.querySelector('.message').textContent = 'No number entered';
    score2--;
    document.querySelector('.score').textContent=score2
    }
    // when the players win 
    else if (guess.value == senumber){
       document.querySelector('.message').textContent= 'correct guess ' ;
       document.querySelector('body').style.backgroundColor= 'green' ;
    //    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent=senumber;
    document.querySelector('.number').style.width="30rem"
    if(score2 > highscore){
        highscore=score2;
        document.querySelector('.highscore').textContent=highscore
    }
       }
    // when the player is put number graeter than secnumber
    else if(guess.value > senumber){
if(score2 > 1){
        document.querySelector('.message').textContent='too high'
        document.querySelector('body').style.backgroundColor= 'red' ;
        score2--;
        document.querySelector('.score').textContent=score2

    }
else{
    document.querySelector('.message').textContent='you lost the game '  
    document.querySelector('.score').textContent=0
}
}
    // when the player is put number les than secnumbeelse if(guess.value < senumber){
        if(score2 > 1){
            document.querySelector('.message').textContent='too low'
            document.querySelector('body').style.backgroundColor= 'red' ;
            score2--;
            document.querySelector('.score').textContent=score2
    
        }
    else{
        document.querySelector('.message').textContent='you lost the game '  
        document.querySelector('.score').textContent=0
    }
          
    }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='start guessing'
    document.querySelector('.score').textContent=20
    document.querySelector('body').style.backgroundColor= '#333' ;
    document.querySelector('.number').style.width="15rem"
    senumber=Math.trunc(Math.random()*20 +1)

})