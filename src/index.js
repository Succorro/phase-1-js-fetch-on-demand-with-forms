const init = () => {
    //Holds all of the JS for event
    const inputForm = document.querySelector('form');
    //Grabs form from HTML doc
    inputForm.addEventListener('submit', (event) => {
        //submit event listener creates inner HTML & grabs data from db.json
        event.preventDefault();
        // DON'T FORGET THIS!
        const textInput = document.getElementById('searchByID');
        // Grabs text that has been submitted into the web page
        fetch(`http://localhost:3000/movies/${textInput.value}`)
        //fetch request from api, single object return given by input
        .then(response => response.json())
        // converts string to Java Script object
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary
        })
    })
  
}

document.addEventListener('DOMContentLoaded', init);
//Runs after HTML is loaded, calls function 'init'