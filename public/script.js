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
        const regex = /^eg - (.*).wav$/;

        files.forEach(file => {
            const match = file.match(regex);
            const li = document.createElement('li');
            li.textContent = match ? match[1]: file;
            ul.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error:', error)
    });
