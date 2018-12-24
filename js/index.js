
$(document).ready(() => {

    let computerScore = 0;
    let userScore = 0;
    const optionToChoice = ['Rock', 'Paper', 'Scissor'];

    let userChoice;
    let computerChoice;


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
        $('.roundsHistorys').append(elem);
    }

    function userChoice(){
            
    }

    function game(){
        setup();

        let gameEnd = false;

        while(gameEnd){

            


            clearScores(cScore);
            wirteScores(uScore);

            let output = `Player choice[${handPlayer}] and Computer choice[${handComputer}],  ${winner} win this round.`;
            writeTheRound(output);
        }


    }    




    

});