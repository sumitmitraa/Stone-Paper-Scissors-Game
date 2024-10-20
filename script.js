let score;
    let scoreStr = localStorage.getItem('score');
    resetScore(scoreStr);

    function resetScore(scoreStr){
      score = scoreStr ? JSON.parse(scoreStr) : {
        win:0,
        lost: 0,
        tie:0,
      }; 

      score.displayScore= function(){
          return `Score : Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`
        }
    }


    function generateComputerChoice() {
      //This will generate random number between 0 and 3
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Stone';
      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Paper';
      } else {
        return 'Scissor'
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Stone') {
        if (computerMove === 'Paper') {
          score.lost++;
          return 'Computer has won.';
        } else if (computerMove === 'Stone') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Scissor') {
          score.win++;
          return 'User won.';
        }
      } else if (userMove === 'Paper') {
        if (computerMove === 'Paper') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Stone') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Scissor') {
          score.lost++;
          return 'Computer has won';
        }
      } else {
        if (computerMove === 'Paper') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Stone') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Scissor') {
          score.tie++;
          return `It's a tie`;
        }
      }
    }

    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score', JSON.stringify(score));
      document.querySelector('.user-move').innerText=`You have chosen "${userMove}"`
      document.querySelector('.computer-move').innerText=`Computer choice is "${computerMove}"`
      document.querySelector('.result').innerText=`${result}`
      document.querySelector('.score').innerText=`${score.displayScore()}`

    }