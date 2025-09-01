const text = document.getElementById("text");

function changeText() {
    text.innerHTML = "Denne har endret seg";
}

setTimeout(changeText, 5000);