// connect to node.js
fetch('http://localhost:3000/files')
    .then(response => {
        if(!response.ok){
            throw new Error('network response not ok');
        }
        return response.json();
    })
    .then(files => {
        const ul = document.getElementById('track');
        const regex = /^eg - (.*)\.wav$/;

        files.forEach(file => {
            if(file === '.DS_Store'){
                return;
            }
            const match = file.match(regex);
            const li = document.createElement('li');
            li.textContent = match ? match[1]: file;

            // add click event
            li.addEventListener('click', () => {
                console.log('song selected:', li.textContent);
            });
            ul.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error:', error)
    });

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

    })});