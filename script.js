
function darkmode() {
    document.getElementById('button-on').style.display='none';   
    document.getElementById('button-off').style.display='block';
}

function lightmode() {
    document.getElementById('button-off').style.display='none';   
    document.getElementById('button-on').style.display='block';
   
}

function languageOn() {
   document.getElementById('lang-selection').style.display='none';
    document.getElementById('lang-selection').style.display='block';
}

function replierLanguage() {
    document.getElementById('lang-selection').style.display='block';
     document.getElementById('lang-selection').style.display='none';

 }


 let buttons = document.querySelector('.button');

 let body = document.querySelector('body');






         
         let title1 = document.querySelector('.more1');
         let text1 = document.querySelector('.text1');
        

         
        
        // title1.addEventListener('click', () => {
        //     text1.classList.toggle('visible');
        // })


            
        let title2 = document.querySelector('.more2');
        let text2 = document.querySelector('.text2');
        
        title2.addEventListener('click', () => {
            text2.classList.toggle('visible');
        });

             
        let title3 = document.querySelector('.more3');
        let text3 = document.querySelector('.text3');
        
        title3.addEventListener('click', () => {
            text3.classList.toggle('visible');
        });

        let title4 = document.querySelector('.more4');
        let text4 = document.querySelector('.text4');
        
        title4.addEventListener('click', () => {
            text4.classList.toggle('visible');
        });

 body.className = localStorage.getItem('theme');


 buttons.addEventListener('click', ()=> {
            body.classList.toggle('light-mode');
            localStorage.setItem("theme", body.className);
        });

/*let title1 = document.querySelector('.more1');
let text1 = document.querySelector('.text1');

title1.addEventListener('click', () => {
    text1.classList.toggle('visible');
})*/

/*-------------------------------------Andy--------------------------------------------------------------*/
function changeZindexExp() {
    if (document.getElementById('collapsible_head').checked) {
        document.getElementById('labelEdu').style.zIndex = 2;
        document.getElementById('collapsible_textEdu').style.zIndex = 1;
        document.getElementById('labelSkl').style.zIndex = 2;
        document.getElementById('collapsible_textSkl').style.zIndex = 1;
        document.getElementById('labelCon').style.zIndex = 2;
        document.getElementById('contactDetails').style.zIndex = 1  ;
    } else {
        document.getElementById('labelEdu').style.zIndex = -1;
        document.getElementById('collapsible_textEdu').style.zIndex = -1;
        document.getElementById('labelSkl').style.zIndex = -1;
        document.getElementById('collapsible_textSkl').style.zIndex = -1;
        document.getElementById('labelCon').style.zIndex = -1;
        document.getElementById('contactDetails').style.zIndex = -1;
    }
}

function changeZindexEdu() {
    if (document.getElementById('collapsible_headEdu').checked) {
        document.getElementById('labelEdu').style.left = "52%"
        document.getElementById('labelExp').style.zIndex = 2;
        document.getElementById('collapsible_text').style.zIndex = 1;
        document.getElementById('labelSkl').style.zIndex = 2;
        document.getElementById('collapsible_textSkl').style.zIndex = 1;
        document.getElementById('labelCon').style.zIndex = 2;
        document.getElementById('contactDetails').style.zIndex = 1;
    } else {
        document.getElementById('labelEdu').style.left = "0%"
        document.getElementById('labelExp').style.zIndex = -1;
        document.getElementById('collapsible_text').style.zIndex = -1;
        document.getElementById('labelSkl').style.zIndex = -1;
        document.getElementById('collapsible_textSkl').style.zIndex = -1;
        document.getElementById('labelCon').style.zIndex = -1;
        document.getElementById('contactDetails').style.zIndex = -1;
    }
}

function changeZindexSkl() {
    if (document.getElementById('collapsible_headSkl').checked) {
        document.getElementById('labelSkl').style.top = "60%"
        document.getElementById('labelExp').style.zIndex = 2;
        document.getElementById('collapsible_text').style.zIndex = 1;
        document.getElementById('labelEdu').style.zIndex = 2;
        document.getElementById('collapsible_textEdu').style.zIndex = 1;
        document.getElementById('labelCon').style.zIndex = 2;
        document.getElementById('contactDetails').style.zIndex = 1;
    } else {
        document.getElementById('labelSkl').style.top = "0%"
        document.getElementById('labelExp').style.zIndex = -1;
        document.getElementById('collapsible_text').style.zIndex = -1;
        document.getElementById('labelEdu').style.zIndex = -1;
        document.getElementById('collapsible_textEdu').style.zIndex = -1;
        document.getElementById('labelCon').style.zIndex = -1;
        document.getElementById('contactDetails').style.zIndex = -1;
    }
}