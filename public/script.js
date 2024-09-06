// Connect to node.js server
fetch('http://localhost:3000/files')
    .then(response => {
        if(!response.ok){
            throw new Error('network response not ok');
        }
        return response.json();
    })
    .then(files => {
        const ul = document.getElementById('track');
        const regex = /^eg - (.*?)(?: copy)?\.wav$/;

        // Perform function on each file
        files.forEach(file => {
            // remove .DS_Store file
            if(file === '.DS_Store'){
                return;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');

            // set text and href
            const match = file.match(regex);
            a.textContent = match ? match[1]: file;
            a.href = `audio/${file}`;


            // add click event
            a.addEventListener('click', () => {
                console.log('song selected:', a.textContent);

                // audio source
                const audioSrc = a.href;
                audioPlayer.src = audioSrc;
                audioPlayer.style.display = 'block';
                audioPlayer.play().catch(error => {
                    console.error('Error:', error);
                });
            });

            // output to html
            ul.appendChild(a);
        });
    })
    .catch(error => {
        console.error('Error:', error)
    });


// User Input (practice)
addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded...');
    document.getElementById('button').addEventListener('click', () => {

        // get value from user input
        let inputValue = document.getElementById('textInput').value;

        // create new list item
        const li = document.createElement('li');
        li.textContent = inputValue;

        // append new input
        document.getElementById('list').appendChild(li);

        // clear text field
        let placeholderText = "enter text here..."




    })});