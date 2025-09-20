    const board = document.querySelector('.game-board');
    const movesDisplay = document.getElementById('moves');
    const restartButton = document.getElementById('restart');

    let cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

    let moves = 0;
    let mySuccess = 0
    let flippedCards = [];
    let matchedCards = [];

    function shuffle (array){
    for (let i = array.length -1; i > 0; i --){
    const j = Math.floor(Math.random()* (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
    }

    function createBoard (){
    board.innerHTML = '';
    moves = 20;
    movesDisplay.textContent = moves
    flippedCards = [];
    matchedCards = [];

    const shuffled = shuffle([...cardValues]);
    shuffled.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-inner">
    <div class="card-front">NOSIBANE</div>
    <div class="card-back">${value}</div>
    </div>
    `;

    card.addEventListener('click', () => flipCard (card, value));
    board.appendChild(card);
    });
    }

    function flipCard(card,value){

    if (flippedCards.length < 2 && 
    !card.classList.contains('flipped')
    ){
    card.classList.add ('flipped');
    flippedCards.push({card, value});

    if(flippedCards.length === 2){
    moves --;
    movesDisplay.textContent = moves;
    checkForMatch();
    }
    }

    if(moves === 0){
    alert('You are out of moves\nGame Over!')
    createBoard();
    }
    }

    function checkForMatch(){
    const [first, second] = flippedCards;

    if(first.value === second.value){
    first.card.style.pointerEvents = 'none';
    second.card.style.pointerEvents = 'none';

    matchedCards.push(first.value);
    flippedCards = [];

    mySuccess ++

    if(mySuccess === 8){
    alert('Congratulations,\nYou Won')
    createBoard();
    }
    }
    else{
    setTimeout(() => {
    first.card.classList.remove('flipped');
    second.card.classList.remove('flipped');
    flippedCards = [];
    }, 1000);
    }
    }

    restartButton.addEventListener('click', createBoard);

    createBoard();

