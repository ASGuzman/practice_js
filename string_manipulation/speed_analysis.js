let testText = 'The quick brown fox jumps over the lazy dog.';
let startTime , endTime;

function startTest(){
    // Asigna el valor del texto de prueba (testText) al elemento HTML con el ID inputText.
    // Esto significa que cuando se inicia la prueba, el usuario verá el texto que debe escribir en el área de texto.
    document.getElementById('inputText').value = testText; 
    // Limpia cualquier contenido anterior del elemento con el ID output.
    document.getElementById('output').innerHTML = '';
    // Captura el tiempo actual en milisegundos desde el 1 de enero de 1970 (Epoch time) y lo almacena en la variable startTime.
    startTime = new Date().getTime();
    var button = document.getElementById('btn');
    // Cambia el texto del botón a "End Test". Esto le indica al usuario que ahora puede finalizar la prueba.
    button.innerHTML = 'End Test';
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();
    var timeElapsed = (endTime - startTime)/1000;
    var userTypedText = document.getElementById('userInput').value;

    var typedWords = userTypedText.split(/\s+/).filter(function (word){ // divide el texto en palabras utilizando expresiones regulares para buscar uno o más espacios en blanco como delimitadores.
        return word !== ''; // elimina cualquier entrada vacía que pueda haber resultado de espacios múltiples entre palabras.
    }).length;

    var wpm = 0;
    
    //Comprueba si timeElapsed es verdadero (es decir, no es cero) y si typedWords no es un número (!isNaN(typedWords)).
    if (timeElapsed && !isNaN(typedWords)){ 
        wpm = Math.round((typedWords/timeElapsed)*60);
    }

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Typing test result:</h2>' +
    '<p>Words Typed: ' + typedWords + '</p>' + 
    '<p>Time Elapsed: ' + timeElapsed.toFixed(2) + ' seconds </p>'+ //El tiempo total que tomó el test, formateado a dos decimales usando toFixed(2).
    '<p>Words per minute (WPM): ' + wpm + '</p>';

    var button = document.getElementById('btn');
    button.innerHTML = 'Start Test';
    button.onclick = startTest;
}


// En JavaScript, las expresiones regulares se delimitan con barras diagonales (/). Estos caracteres indican el comienzo y el final de la expresión regular. Cualquier cosa que esté entre las dos barras es parte de la expresión que se va a evaluar.
// Por ejemplo, en /\s+/,:
// El primer / indica el inicio de la expresión regular.
// El segundo / indica el final de la expresión regular.
// En el contexto de las expresiones regulares, la letra s es un metacaracter que representa "espacio en blanco".
// +: Este es un cuantificador que indica que debe haber uno o más caracteres que coincidan con el patrón anterior (en este caso, el espacio en blanco representado por \s). Esto significa que la expresión regular coincidirá con cualquier cantidad de espacios en blanco consecutivos.