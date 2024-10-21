let books = []

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Verifica si los valores ingresados en los campos no están vacíos (bookName, authorName y bookDescription), y además comprueba que pagesNumber sea un número válido (!isNaN(pagesNumber)).
    // Si el usuario no ha ingresado un nombre para el libro, el valor será una cadena vacía y esta parte de la condición será false
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        //  se crea un objeto book que contiene los datos del libro con las propiedades name, authorName, bookDescription, y pagesNumber
        const book= {
            name : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pagesNumber : pagesNumber
        };
        books.push(book);
        showBooks();
        ClearInputs();
    } else {
        alert('Please fill all fields correctly.')
    }
}

function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function ClearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}