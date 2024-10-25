const colors = ["red", "blue", "green", "purple", "orange", "pink"];
// Cada color aparece dos veces, lo que permite crear pares. Esos pares serán las cartas del juego
let cards = shuffle(colors.concat(colors));
// se está duplicando el arreglo colors con colors.concat(colors) para que haya dos conjuntos de cartas con los mismos colores, lo que permite emparejarlas
// La función shuffle se usa para mezclar el arreglo resultante de forma aleatoria
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score")
const timerElement = document.getElementById("timer");

function generateCards() {
    gameContainer.innerHTML = ""; // Limpiar contenedor antes de generar nuevas cartas
    for (const color of cards) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.color = color;
        card.textContent = "?";
        gameContainer.appendChild(card);
    }
    console.log(`Generated ${cards.length} cards.`); // Agrega este log
}


function shuffle(array){
    // Se inicia un bucle for que recorre el arreglo desde el último elemento (array.length - 1) hasta el primer elemento. La variable i se inicializa con el índice del último elemento y se va decrementando en cada iteración.
    for (let i = array.length -1 ; i > 0; i--){
        // Se inicia un bucle for que recorre el arreglo desde el último elemento (array.length - 1) hasta el primer elemento. La variable i se inicializa con el índice del último elemento y se va decrementando en cada iteración.
        // Multiplicamos este número decimal por (i + 1), lo cual da un número en el rango [0, i + 1) (esto asegura que el índice j pueda ser cualquier número entre 0 e i, ambos incluidos).
        // Math.floor() redondea hacia abajo para obtener un número entero, garantizando que j esté en el rango [0, i].
        const j = Math.floor(Math.random()*(i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        // Al realizar este intercambio, el elemento en la posición i se coloca en una posición aleatoria, y el elemento en la posición j se mueve a la posición i.
    }
    return array;
}


function handleCardClick(event){
    // Se obtiene el elemento que disparó el evento (event.target), que es la carta que el jugador ha clicado. Esta carta se almacena en la variable card.
    const card = event.target;
    // Si el elemento clicado no tiene la clase 'card', no se ejecuta el resto del código.
    //  Si la carta ya tiene la clase 'matched', significa que ya ha sido emparejada correctamente en una jugada anterior.
    if (!card.classList.contains("card") || card.classList.contains("matched")){
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    // La carta seleccionada se agrega al arreglo selectedCards, que rastrea las cartas que han sido seleccionadas en la jugada actual.
    selectedCards.push(card);
    // Se verifica si el número de cartas seleccionadas es igual a 2. Si es así, se llama a la función checkMatch después de un retraso de 500 milisegundos (medio segundo).
    if (selectedCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color){
        card1.classList.add("matched");
        card2.classList.add("matched");
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = "?";
        card2.textContent = "?";
        card1.style.backgroundColor = "#ddd";
        card2.style.backgroundColor = "#ddd";
    }
    selectedCards = [];
}

function startGame (){
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = "";
    generateCards();
    gameContainer.addEventListener("click", handleCardClick);
}

function startGameTimer(){
    timerElement.textContent = `Time Left: ${timeLeft}`;
    clearInterval(gameInterval);
    gameInterval = setInterval(( )=> {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert("Game Over!");
            startbtn.disabled = false;
            gameContainer.removeEventListener("click", handleCardClick); // Desactivar los clics en el juego
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);