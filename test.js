const cursor = document.getElementById('cursor');
const options = [
    "Mechanical Engineer ",
    "Product Designer ",
    "Software Developer ",
    "Backend Developer ",

];
let currentOptionIndex = 0;
let currentOption = options[currentOptionIndex];
let currentCharIndex = 0;

function typeCursor() {
    cursor.style.display = 'inline-block';
    cursor.textContent = ' ';

    const intervalId = setInterval(() => {
        if (currentCharIndex >= currentOption.length) {
            clearInterval(intervalId);
            cursor.style.display = 'none';
            currentOptionIndex = (currentOptionIndex + 1) % options.length;
            currentOption = options[currentOptionIndex];
            currentCharIndex = 0;
            setTimeout(typeCursor, 500); // Delay before typing the next option
        } else {
            cursor.textContent = currentOption.substring(0, currentCharIndex);
            currentCharIndex++;
        }
    }, 110); // Typing speed (milliseconds per character)
}

typeCursor();

function showCertificatePopup() {
    var popup = document.getElementById("certificatePopup");
    var img = document.getElementById("certificateImg");
    var certificateImage = document.querySelector(".certificate-img");

    img.src = certificateImage.src;
    popup.style.display = "block";
}

function closeCertificatePopup() {
    var popup = document.getElementById("certificatePopup");
    popup.style.display = "none";
}