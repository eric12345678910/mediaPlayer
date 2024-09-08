// Connect to node.js server
document.addEventListener('DOMContentLoaded', ()=> {
    const audioPlayer = document.getElementById('audioPlayer');
    const ul = document.getElementById('trackId');
    // fetch files from /audio folder
    fetch('http://localhost:3000/files')
        .then(response => {
            if (!response.ok) {
                throw new Error('network response not ok');
            }
            return response.json();
        })
        .then(files => {
            // create regex pattern to clean display name
            const regex = /^eg - (.*?)(?: copy)?\.wav$/;

            // Perform function on each file
            files.forEach(file => {

                console.log("file: ", file)

                // create <li> element
                const li = document.createElement('li');

                // create <audio> element
                const audio = document.createElement('audio');
                audio.src = file;

                // create <button>
                const button = document.createElement('button');

                // update file to url encoding
                const encodedUrl = "/audio/" + encodeURIComponent(file);
                console.log('encodedUrl: ', encodedUrl);

                /*
                // set li path
                li.setAttribute('data-audio-src', audio);
                li.setAttribute('data-path', encodedUrl);
                console.log('audio src: ', li.getAttribute('data-audio-src'));
                console.log('path: ', li.getAttribute('data-path'));
*/

                // add cleaned text to li text
                const match = file.match(regex);
                const trackName = match ? match[1] : file;
                console.log("Track Name: ", trackName);
                li.textContent = trackName;
                // add click event
                button.addEventListener('click', () => {
                    console.log('song selected:', li.textContent);

                    // set audio source
                    //const audioSrc = audio;
                    //console.log('audioSrc: ', encodedUrl);
                    audioPlayer.src = encodedUrl;
                    console.log('audioPlayer.src: ', encodedUrl);

                    audioPlayer.style.display = 'block';
                    console.log('audio player set as block');
                    audioPlayer.play().catch(error => {
                        console.error('Error:', error);
                    });
                });

                // output to html
                ul.appendChild(li);
                li.appendChild(audio);
                li.appendChild(button);
                console.log('\n')
                });
        })
        .catch(error => {
            console.error('Error:', error)
        });
});


/*

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
    })});*/