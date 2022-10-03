// Select language
function languageOn() {
    document.getElementById('lang-selection').style.display = 'none';
    document.getElementById('lang-selection').style.display = 'block';
}

function replierLanguage() {
    document.getElementById('lang-selection').style.display = 'block';
    document.getElementById('lang-selection').style.display = 'none';
}


// Dark/Light mode
function darkmode() {
    document.getElementById('button-on').style.display = 'none';
    document.getElementById('button-off').style.display = 'block';
}

function lightmode() {
    document.getElementById('button-off').style.display = 'none';
    document.getElementById('button-on').style.display = 'block';
}

let buttons = document.querySelector('.button');
let body = document.querySelector('body');

body.className = document.cookie;

buttons.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    document.cookie = body.className;
    console.log(document.cookie);
});


// Open/close article
const block = document.getElementsByClassName('block');

for (i = 0; i < block.length; i++) {
    block[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}