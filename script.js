const itemMenu = document.querySelector("body > header > nav > ul");
const btnNav = document.querySelector("body > main > section.portfolio > .container_button");
let Picture = document.querySelector("body > main > section.portfolio > .container_portfolio");
const form = document.forms[0];


const elmName = document.getElementById('client_name');
const elmMail = document.getElementById('client_mail');
let resultValueSubject = '';
let resultValueDetails = '';

//переменные для slider
const slider = document.querySelectorAll('.slider');
const btnLeft = document.querySelector(".switch-left");
const btnRight = document.querySelector(".switch-right");


let counter = 0;
let counter1 = 0;
let counter2 = 0;
let step = 0;

//slider switchRight
/*! сделать блокировку кнопок , иначе уходит в бесконечность или обработать бесконечность*/
const switchRight = (event) => {
    if (slider[0].style.left === '0%' || slider[0].style.left === '') {
        counter = 0;
        
        let intervalRight = setInterval(function(){
        counter -= 1;
        slider.forEach((item) => {         
        
            if (item.style.left === '-100%'){
                clearInterval(intervalRight);
                return;
            }            
            item.style.left = `${counter}%`;
           

            })
        }, 10);
        
    } else {
        
        counter1 = 100;
        counter2 = -100;
        intervalRight = setInterval(function(){
            counter1 -= 1;
            counter2 -= 1;

            slider.forEach((item) => {
                     
                if (slider[0].style.left === '0%' & slider[1].style.left === '-200%'){
                    clearInterval(intervalRight);
                    return;
                }
                slider[0].style.left = `${counter1}%`;
                slider[1].style.left = `${counter2}%`;
                                            
            })
        }, 10);
        
    };    
}


//slider switchLeft
const switchLeft = (event) => {
    if (slider[0].style.left === '0%' || slider[0].style.left === '') {
        slider[1].style.left = '-200%'
        counter1 = 0;
        counter2 = -200;
        
        let intervalLeft = setInterval(function(){
        counter1 += 1;
        counter2 += 1;
        slider.forEach((item) => {
        
            if (slider[0].style.left === '100%' & slider[1].style.left === '-100%'){
                clearInterval(intervalLeft);
                return;
            }
            
            slider[0].style.left = `${counter1}%`;
            slider[1].style.left = `${counter2}%`;           

            })
        }, 10);
        
    } else {        
        counter = -100;

        intervalLeft = setInterval(function(){
            counter += 1;
            slider.forEach((item) => {
                    
                if (item.style.left === '0%'){
                    clearInterval(intervalLeft);
                    return;
                }
                item.style.left = `${counter}%`;
            })
        }, 10);
        
    };   
}
/* Не мой код
let switchLock = 0;
let switchTransition = 'left 1.2s ease 0.1s';
let switchLockMs = 1500;
//slider switchRight
const switchRight = (event) => {

    function doSwitch() { 
        if (slider[0].style.left === '') {
            slider[0].style.transition = switchTransition;
            slider[1].style.transition = switchTransition;
            slider[0].style.left = `0%`;
            slider[1].style.left = `-200%`;
        };
        if (slider[0].style.left === '0%') {
            slider[1].style.transition = '';
            slider[1].style.left = `0%`;
            let intervalLeft = setInterval(function(){
                clearInterval(intervalLeft);
                slider[1].style.transition = switchTransition;
                slider[0].style.left = `-100%`;
                slider[1].style.left = `-100%`;
              }, 10);
        } else {
            slider[0].style.transition = '';
            slider[0].style.left = `100%`;
            let intervalLeft = setInterval(function(){
                clearInterval(intervalLeft);
                slider[0].style.transition = switchTransition;
                slider[0].style.left = `0%`;
                slider[1].style.left = `-200%`;            
              }, 10);
        };
    };

    if (switchLock > 0) {
        if (switchLock < 2) {
            switchLock++;        
        }    
    } else {
        switchLock = 1;
        doSwitch();        
        let intervalLock = setInterval(function(){
            switchLock--;
            if (switchLock > 0) { 
                doSwitch();
            } else {    
                clearInterval(intervalLock); 
            }
        },  switchLockMs);
    }
}

//slider switchLeft
const switchLeft = (event) => {
    
    function doSwitch() { 
        if (slider[0].style.left === '') {
            slider[0].style.transition = switchTransition;
            slider[1].style.transition = switchTransition;
            slider[0].style.left = `0%`;
            slider[1].style.left = `0%`;
        };
        if (slider[0].style.left === '0%') {
            slider[1].style.transition = '';
            slider[1].style.left = `-200%`;
            let intervalLeft = setInterval(function(){
                clearInterval(intervalLeft);
                slider[1].style.transition = switchTransition;
                slider[0].style.left = `100%`;
                slider[1].style.left = `-100%`;
            }, 10);
        } else {
            slider[0].style.transition = '';
            slider[0].style.left = `-100%`;
            let intervalLeft = setInterval(function(){
                clearInterval(intervalLeft);
                slider[0].style.transition = switchTransition;
                slider[0].style.left = `0%`;
                slider[1].style.left = `0%`;            
              }, 10);
        };    
    };

    if (switchLock > 0) {
        if (switchLock < 2) {
            switchLock++;        
        }    
    } else {
        switchLock = 1;
        doSwitch();        
        let intervalLock = setInterval(function(){
            switchLock--;
            if (switchLock > 0) { 
                doSwitch();
            } else {    
                clearInterval(intervalLock); 
            }
        }, switchLockMs);
    }
}
*/

btnLeft.addEventListener('click', switchLeft);
btnRight.addEventListener('click', switchRight);

//slider without click button
/*let counter = 0;
let interval_left = setInterval(function(){
    counter -= 10;
    document.querySelectorAll('.slider').forEach((item) => {
        
       
        if (item.style.left === '-1020px'){
            clearInterval(interval_left);
            return;
        }
         
        item.style.left = `${counter}px`;

        })
    }, 10);*/

// click - change active links of header
const selectItem = (event) => {

    if (/*event.target.closest('li').classList[0] != 'active_li' & */event.target.tagName === 'A') {
        document.querySelectorAll('li').forEach(li => li.classList.remove('active_li'));
        event.target.closest('li').classList.add('active_li');         
    }    
}

// click - change the active portfolio button and image rotation position
const selectButton = (event) => { 

   if (event.target.classList[1] != 'button_active' & event.target.tagName === 'BUTTON') {
        document.querySelectorAll('.container_button>button').forEach(button => button.classList.remove('button_active'));
        event.target.classList.add('button_active');

        document.querySelectorAll('.container_portfolio>img').forEach(img => img.style.order = Math.floor(Math.random() * document.querySelectorAll('.container_portfolio>img').length));         
    }
}

// click - active image
const activePicture = (event) => {        
    if (event.target.tagName === 'IMG'){
        document.querySelectorAll('.container_portfolio>img').forEach(img => img.classList.remove('img_active'));
        event.target.classList.add('img_active');
    };    
}

//submit form and generation message window
const messageWindowForm = (event) => {
    step++;
    event.preventDefault();
    
    const elmSubject = document.getElementById('client_subject');
    const elmDetails = document.getElementById('client_details');

    const atrElmName = elmName.getAttribute('')
    
    let valueSubject = elmSubject.value.toString();
    let valueDetails = elmDetails.value.toString();
    
    

    if(valueSubject === ''){
        resultValueSubject = 'No subject';
    } else {
        resultValueSubject = `Subject: ${valueSubject}`;
    };

    if(valueDetails === ''){
        resultValueDetails = 'No description';
    } else {
        resultValueDetails = `Description: ${valueDetails}`;
    };

    document.getElementById('subject_text').innerText = resultValueSubject;
    document.getElementById('details_text').innerText = resultValueDetails;

     
    if (document.getElementById('message_box').classList[0]!='hidden'){
        document.getElementById('message_box').classList.add('hidden');
        elmName.setAttribute("required", '');
        elmMail.setAttribute("required", '');
    } else {        
        elmName.removeAttribute("required");
        elmMail.removeAttribute("required");

        elmName.value = elmName.defaultValue;
        elmMail.value = elmMail.defaultValue;        
        document.getElementById('client_subject').value = document.getElementById('client_subject').defaultValue;
        document.getElementById('client_details').value = document.getElementById('client_details').defaultValue;
        
        document.getElementById('message_box').classList.remove('hidden');
           
    };    
}

/*
если окно не в форме
const hiddenMessageWindow =(event) =>{

    document.getElementById('message_box').classList.add('hidden');

    elmName.value = elmName.defaultValue;
    elmMail.value = elmMail.defaultValue;        
    document.getElementById('client_subject').value = document.getElementById('client_subject').defaultValue;
    document.getElementById('client_details').value = document.getElementById('client_details').defaultValue;
   };  
   Ok_button.addEventListener('click', hiddenMessageWindow);
*/

itemMenu.addEventListener('click', selectItem);
btnNav.addEventListener('click', selectButton);
Picture.addEventListener('click', activePicture);
form.addEventListener('submit', messageWindowForm);

/*
    step++;
    console.log(`step ${step}`, event.target);
    console.log(`step ${step}`, event.currentTarget);
   console.log(`step ${step}`, event.target.parentElement);
   console.log(`step ${step}`, event.currentTarget.parentElement);
   console.log(event.target.children[0]);
   
*/
