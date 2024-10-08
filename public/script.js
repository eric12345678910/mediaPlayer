// Connect to node.js server
document.addEventListener('DOMContentLoaded', ()=> {
    const audioPlayer = document.getElementById('audioPlayer');

    // set the style of the audio player
    audioPlayer.style.display = 'flex';
    audioPlayer.style.width = '100%';
    audioPlayer.style.justifyContent ='center'
    audioPlayer.style.opacity = '75%';

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
                // create <li> element
                const li = document.createElement('li');

                // create span element to show active track
                const nowPlaying = document.createElement('span');
                nowPlaying.id = 'nowPlaying';
                nowPlaying.textContent = ''

                // create <audio> element
                const audio = document.createElement('audio');
                audio.src = file;

                // update file to url encoding
                const encodedUrl = "/audio/" + encodeURIComponent(file);

                // Clean track name and assign
                const match = file.match(regex);
                const trackName = match ? match[1] : file;
                console.log("Track Name: ", trackName);
                li.textContent = trackName;

                // add click to play
                li.addEventListener('click', () => {
                    console.log('now playing:', li.textContent);

                    const reset = document.getElementById('nowPlaying');
                    if(reset){
                        reset.remove();
                    }
                    // set audio source
                    audioPlayer.src = 'http://localhost:3000' + encodedUrl;
                    console.log('audioPlayer.src: ', audioPlayer.src);


                    nowPlaying.textContent = 'now playing...'
                    li.appendChild(nowPlaying);

                    audioPlayer.play().catch(error => {
                        console.error('Error:', error);

                    });
                });

                // output to html
                ul.appendChild(li);

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