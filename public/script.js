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
            const regex = /^eg - (.*?)(?: copy)?\.wav$/;


            // Perform function on each file
            files.forEach(file => {
                // remove .DS_Store file
                if (file.endsWith('.wav')) {
                    console.log("file: ", file)

                    const li = document.createElement('li');

                    /*
                    // set data source for the list element
                    li.setAttribute('data-audio-src', `/audio/${file}`);
                    console.log("Audio Src: ", li.getAttribute('data-audio-src'));
*/

                    //
                    //const regexPath = regex.exec(file);
                    const whitespaceRegEx = /\s/
                    const frontRegEx = /\(/
                    const backRegEx = /\)/
                    let newString = "/audio/"

                    for(const char of file){
                        if(whitespaceRegEx.test(char) ){
                            newString += ("%20");
                        }
                        else if(frontRegEx.test(char) ){
                            newString += ("%28");
                        }
                        else if(backRegEx.test(char) ){
                            newString += ("%29");
                        }
                        else {
                            newString += (char);
                        }

                    }

                    console.log('newString: ', newString);

                    // set li path
                    li.setAttribute('data-audio-src', newString);
                    li.setAttribute('data-path', newString);
                    console.log('audio src: ', li.getAttribute('data-audio-src'));
                    console.log('path: ', li.getAttribute('data-path'));


                    // add cleaned text to li text
                    const match = file.match(regex);
                    li.textContent = match ? match[1] : file;

                    // add click event
                    li.addEventListener('click', () => {
                        console.log('song selected:', li.textContent);

                        // audio source
                        const audioSrc = li.getAttribute('data-audio-src');
                        console.log('audioSrc: ', audioSrc);
                        audioPlayer.src = audioSrc;
                        audioPlayer.style.display = 'block';
                        audioPlayer.play().catch(error => {
                            console.error('Error:', error);
                        });
                    });

                    // output to html
                    ul.appendChild(li);
                    console.log('\n')
                }});
        })
        .catch(error => {
            console.error('Error:', error)
        });
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