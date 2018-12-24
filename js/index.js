
$(document).ready(() => {

    const optionToChoice = ['Rock', 'Paper', 'Scissor'];
    let uChoice;
    let uScore = 0;
    let cScore = 0;

    function wirteScores(userScore, computerScore){
        $('#userScore').text(userScore);
        $('#computerScore').text(computerScore);
    }

    function clearScores(){
        $('#userScore').text('');
        $('#computerScore').text('');
    }

    function writeTheRound(text){
        let elem = `<p>${text}</p>`
        $('#roundsHistorys').prepend(elem);
    }

    function computerChoice(){
        let cChoice = Math.floor(Math.random() * 3);
        return optionToChoice[cChoice];
    }

    function handEvent(){
        $('#paper').on("click", () => getUserChoice('Paper'));
        $('#scissors').on("click", () => getUserChoice('Scissor'));
        $('#rock').on("click", () => getUserChoice('Rock'));
    }

    function verifyWinner(uHande,cHand){
        let winner;

        if(uHande === cHand){
            return 'Tie';            
        }

        switch(uHande){
            case 'Paper':
                if(cHand === 'Rock') {winner = 'User'}
                if(cHand === 'Scissor') {winner = 'Computer'}
                break;
            case 'Scissor':
                if(cHand === 'Paper') {winner = 'User'}
                if(cHand === 'Rock') {winner = 'Computer'}
                break;
            case 'Rock':
                if(cHand === 'Paper') {winner = 'Computer'}
                if(cHand === 'Scissor') {winner = 'User'}
                break;
        }

        return winner;
    }

    function getUserChoice(choice){
        uChoice = choice;
        game();
    }

    function game(){

        let handPlayer = uChoice;
        let handComputer = computerChoice();
  
        let winner = verifyWinner(handPlayer,handComputer);
        let msg = ' win this round.';

        if(winner === 'Tie'){
            msg = '';
        }

        if(winner === 'User'){
            uScore++;
        }

        if(winner === 'Computer'){
            cScore++;
        }

        clearScores();
        wirteScores(uScore,cScore);

        let output = `Player choice[ ${handPlayer} ] and Computer choice[ ${handComputer} ],  ${winner} ${msg}`;
        writeTheRound(output);
    }    

   handEvent();

});