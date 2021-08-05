console.log("Hello World");


function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span")
    let deleteBtn = document.createElement('button');
    let crossOff = document.createElement('span')
    

    
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    document.querySelector("ul").appendChild(movie)

    
    // Delete
    deleteBtn.textContent = "x";
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie);

    // Cross
    crossOff.textContent = "";
    movie.appendChild(crossOff)
    crossOff.addEventListener('click', crossOffMovie);

    inputField.value = ""

}


function deleteMovie(event) {
    event.target.parentNode.remove()
}

function crossOffMovie (event) {
    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage();
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie)


