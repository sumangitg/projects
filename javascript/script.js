 
 
 let score=JSON.parse(localStorage.getItem('scorevalue')) ||
 {
  wins:0,
  losses:0,
  draw:0
 }
function playGame( playerMove)
{

  let computerMove = pickComputerMove();
  //console.log(playerMove);
  //console.log(computerMove);
  let result='';
  if(computerMove === playerMove)
      {result = 'draw';}
  else if(computerMove==='paper' && playerMove==='rock' || computerMove==='rock' && playerMove==='scissors' || computerMove==='scissors' && playerMove==='paper')
      {result = 'you lose'; }
  else
      {result ='you win';}
//console.log(result);

  if(result ==='you win')
    {  score.wins += 1;
     // console.log(score.wins);
    }
  else if(result === 'you lose')
    {  
      score.losses +=1;
     // console.log(score.losses);
    }
  else
     {
       score.draw += 1;
       //console.log(score.draw);
     }
//   alert(`you pick: ${playerMove}. computer pick: ${computerMove}. ${result}
// wins:${score.wins}, losses:${score.losses}, draws:${score.draw}`);
localStorage.setItem('scorevalue' , JSON.stringify(score));
document.querySelector('.your-result').innerHTML=`${result}`;

document.querySelector('.result-js').innerHTML=`
You <img src="images/${playerMove}.png" class="gameImage-result"> <img src="images/${computerMove}.png"  class="gameImage-result"> computer
`;

document.querySelector('.result-score').innerHTML=`wins:${score.wins}, losses:${score.losses}, draws:${score.draw}`;

}

function pickComputerMove()
{
  let computerMove;
 const randomValue = Math.random();
  //console.log(randomValue);
  if(randomValue>=0 && randomValue < 1/3)
  {   computerMove='rock'; 
     // console.log(computerMove);
  }
  else if(randomValue >=1/3 && randomValue <2/3)
  {
    computerMove = 'paper';
  }
  else
      computerMove='scissors';
  return computerMove;

}

function updateScoreElement()
{
  document.querySelector('.result-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, draws: ${score.draw}`;
}

// function updateScore()
// {
//   score.wins=0,
//   score.losses=0,
//   score.draw=0
//   localStorage.setItem('scorevalue' , JSON.stringify(score));
//   document.querySelector('.your-result').innerHTML=``;
//   document.querySelector('.result-js').innerHTML=``;

//   document.querySelector('.result-score').innerHTML=`wins:${score.wins}, losses:${score.losses}, draws:${score.draw}`;
// }
let autoplaying=false;
let intervalId;
function autoPlay()
{
 

  if(!autoplaying)
  {
      intervalId=setInterval(()=>{
      let playerMove=pickComputerMove();
      playGame(playerMove);
      }, 1000);
      console.log('hello');
      autoplaying= true;
      document.querySelector('.autoButton').innerHTML='Stop play';
  }
  else{
    clearInterval(intervalId);
    autoplaying=false;
    document.querySelector('.autoButton').innerHTML='auto play';
  }
}