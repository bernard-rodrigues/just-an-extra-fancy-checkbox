const checkbox = document.getElementById('switch');
const body = document.body;

const text = document.getElementById("text");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.style.backgroundColor = '#282a36'; // Or any color you want
        text.style.color = "white";
    } else {
        body.style.backgroundColor = 'white'; // Or your default color
        text.style.color = "#282a36";
    }
});