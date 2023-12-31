const button = document.querySelector(".button");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const tieScore = document.querySelector(".tie-score");
const playerName = document.querySelector(".player1");
const you = document.querySelector('.you')
const text = document.querySelector('#text')
const display = document.querySelector('.display')
const restart = document.querySelector('.restart')
const profile = document.querySelector('.profile')
const profilee = document.querySelector('.profilee')
const player = document.querySelector('.player')
const beforeP = document.querySelector('.before-p')
const me = document.querySelector('.me')
const playerName1 = document.querySelector('.player-name1')
const buttonCon = document.querySelector('.button-container')


let computerMove = '';


function computer(e) {
    const randomNumber = (Math.floor(Math.random() * 15 ) + 1);
    if (randomNumber <= 5) {
        computerMove = 'Rock';
    } else if (randomNumber <= 10 && randomNumber > 5) {
        computerMove = 'Paper';
    }else if (randomNumber <= 15 && randomNumber > 10) {
       computerMove = 'Scissors';
    }


    let result = '';
    let saveTo = ''
    let tie = ''
    let com = ''
    let play1 = ''
    const player = e.target.value || e.target.id;
    
    if (computerMove === player) {
        result = 'Tie';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName}, 
                 YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML== 'You lost, better luck next time !'

            }

            return;
        } else{ 

           tie =  tieScore.innerHTML++
           saveToStorage(tie)
        }
        display.innerHTML = `You picked ${player} and Meek(AI) picked ${computerMove}, that's a ${result} !`;
    } else if (computerMove === 'Paper' && player === 'Rock') {
        result = 'You Lose';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName},
                 YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time'
            }
            return;
        } else{
        
             com = computerScore.innerHTML++;
            saveToStorage(com)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    } else if (computerMove === 'Scissors' && player === 'Rock' ) {
        result = 'You Win';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName}, 
                YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time !'
            }
            return;
        } else{
         
            play1 = playerScore.innerText++;
            saveToStorage(play1)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    } else if (computerMove === 'Paper' && player === 'Scissors') {
        result = 'You Win';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName}, 
                YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time !'
            }
            return;
        } else{
            
            play1 = playerScore.innerText++;
            saveToStorage(play1)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    } else if (computerMove === 'Scissors' && player === 'Paper' ) {
        result = 'You Lose';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName},
                 YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time !'
            }
            return;
        } else{
            
           com = computerScore.innerHTML++;
           saveToStorage(com)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    } else if (computerMove === 'Rock' && player === 'Scissors' ) {
        result = 'You Lose';
      
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName}, 
                 YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time !'
            }
            return;
        } else{
            
             com = computerScore.innerHTML++;
            saveToStorage(com)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    } else if (computerMove === 'Rock' && player === 'Paper' ) {
        result = 'You Win';
        if (tieScore.innerHTML == 5 ||computerScore.innerHTML == 5 ||playerScore.innerHTML == 5 ){
            alert("This round has ended")
            if (playerScore.innerHTML == 5) {
                display.innerHTML = `CONGRATULATIONS ${userName},
                 YOU WON !`
                display.style.color = 'rgb(72, 203, 90)'
                alert('Congratulations, you won !')
            } else if (tieScore.innerHTML == 5){
                display.innerHTML = 'This  round ended in a draw, play again!'
                alert('This round ended in a draw, play again to see winner')
            } else  {
                display.style.color = 'red'
                alert('You lost, better luck next time !')
                display.innerHTML == 'You lost, better luck next time !'
            }
            return;
        } else{
            play1 = playerScore.innerText++;
            saveToStorage(play1)
        }
        display.innerHTML =`You picked ${player} and Meek(AI) picked ${computerMove}, ${result} !`;
    }
    saveToStorage(result)
}
// saveToStorage(computer())

function saveToStorage(player1) {
    // create a storage
    let itemFromStorage;
    // check if there's an item in the LS
    if (localStorage.getItem('name') === null) {
        itemFromStorage = [];
    } else {
        itemFromStorage = JSON.parse(localStorage.getItem('name'));
    }
    // if there is, then get it as array and add your own item to it using push 
    itemFromStorage.push(player1);

    // after adding, you then send them back to localStorage as string 
    localStorage.setItem('names', JSON.stringify(itemFromStorage));
}


restart.addEventListener('click', () =>{
    computerScore.innerHTML = " ";
    tieScore.innerHTML = " ";
    playerScore.innerText = " ";
    display.innerHTML = " ";
    display.style.color = 'white'

})

let userName = '';

function addInfo(e) {
    e.preventDefault();
    userName = text.value;
    playerName1.innerHTML = `${userName} :`;
    playerScore.innerHTML = ' '
    me.appendChild(playerName1)
    me.appendChild( playerScore)
    
    // This empties the text box after submitting
    text.value = '';


    saveToStorage(userName)
    JSON.parse(localStorage.getItem('names'))
}


function container() {
    if (playerName1.innerText == '') {
        alert('Please fill in your name to proceed')
        return computer()
         }
}



rock.addEventListener('click', computer)
paper.addEventListener('click',computer)
scissors.addEventListener('click',computer)
submit.addEventListener('click', addInfo)
rock.addEventListener('click', container)
paper.addEventListener('click', container)
scissors.addEventListener('click', container)

