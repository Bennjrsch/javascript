const button = document.getElementById('myButton');
const textElement = document.getElementById('myText');

button.addEventListener('click', function() {
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => {
        const randomWord = data[0];
        textElement.textContent = randomWord;
        console.log('New word:', randomWord);
    })
    .catch(error => {
        console.error('Error fetching word:', error);
        textElement.textContent = 'Error loading word';
    });
});