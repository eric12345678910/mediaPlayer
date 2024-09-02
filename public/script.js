
function addFile(text) {
    const ul = document.getElementById('track');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    addFile('track one');
    addFile('track two');
    addFile('track three');
});
