let score = JSON.parse(localStorage.getItem('score'))
myScore();



let isAutoplaying = false;
let intervalId ;

document.querySelector('.js-autoplay-button')
.addEventListener('click', () => {
    autoPlay();})

function autoPlay(){
if (!isAutoplaying){
    intervalId = setInterval(() => {
    const nonsoName =  pickNumbers();
    playGame(nonsoName);},
    1000
        )
        isAutoplaying = true;    
    } else {
        clearInterval(intervalId);
        isAutoplaying = false;
    }

    if (isAutoplaying === true){
        document.querySelector('.autoplay').innerHTML = 'STOP PLAYING'}
    else if (isAutoplaying === false){
        document.querySelector('.autoplay').innerHTML = 'AUTO PLAY'}}


document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock')
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper')
})


document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors')
})



document.body.addEventListener('keydown', (event) => {
   if (event.key === 'r'){
    playGame('Rock')}
    else if (event.key === 'p'){
        playGame('Paper')}
    else if (event.key === 's'){
        playGame('Scissors')}    
})


function playGame (playerMove){
const computerMove = pickNumbers();

let result = '';
if (playerMove === 'Scissors'){
    if (computerMove === 'Rock'){
    result = 'You Loose!'}
else if(computerMove === 'Paper'){
    result = 'You Win!'}
else if (computerMove === 'Scissors'){
    result = 'Tie!'}}

if (playerMove === 'Paper'){
    if (computerMove === 'Rock'){
    result = 'You Win!'}
else if(computerMove === 'Paper'){
    result = 'Tie!'}
else if (computerMove === 'Scissors'){
    result = 'You Loose!'}}

if (playerMove === 'Rock'){
    if (computerMove === 'Rock'){
    result = 'Tie!'}
else if(computerMove === 'Paper'){
    result = 'You Loose!'}
else if (computerMove === 'Scissors'){
    result = 'You Win!'}}

if (result === 'You Win!'){
    score.Wins += 1}
else if (result === 'You Loose!'){
    score.Losses += 1}
else if (result === 'Tie!'){
    score.Ties += 1}

localStorage.setItem('score',JSON.stringify(score));
myScore();

document.querySelector('.js-moves')
.innerHTML = `You 
<img class="move" src="c:/Users/Chinonso/Desktop/ADVANCED PROJECTS 2/ALL HTML/${playerMove}.png">, <img class="move" src="c:/Users/Chinonso/Desktop/ADVANCED PROJECTS 2/ALL HTML/${computerMove}.png"> COMPUTER `

document.querySelector('.js-result')
.innerHTML = result;}
   
document.querySelector('.js-reset-button')
.addEventListener('click', () => {
    document.querySelector('.js-confirmatory-button')
    .innerHTML = `Are you sure you want to reset the score ? 
    <div class="confirmDiv"><button class="yes js-yes-button">Yes</button>  <button class="no js-no-button">No</button></div>`

    document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
       myResetScore()
        myScore()
        document.querySelector('.js-confirmatory-button').innerHTML = ''
        })

     

    document.querySelector('.js-no-button')
    .addEventListener('click', () => {
    document.querySelector('.js-confirmatory-button').innerHTML = ''})})


    const myResetScore = () => {
    score.Wins = 0,
    score.Losses = 0,
    score.Ties = 0
   }

function myScore (){
document.querySelector('.js-score')
.innerHTML = `You: ${score.Wins}\nComputer: ${score.Losses}\nTies: ${score.Ties}`;
}

function pickNumbers (){
let computerMove = '';
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock'}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper'}
else if (randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'Scissors'}
return computerMove;
}

 localStorage.setItem('SCORE', JSON.stringify(myScore))