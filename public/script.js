// dummy list
let tracks = ['track 1', 'track 2', 'track 3', 'track 4', 'track 5', 'track 6'];

// add file name to
function addFile(text) {
    const ul = document.getElementById('track');

    for(let i=0; i < text.length; i++){
        const li = document.createElement('li');
        li.textContent = text[i];
        ul.appendChild(li);
    };
};

// perform functions
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');

    // functions
    addFile(tracks);
});


