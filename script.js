const itemMenu = document.querySelector("body > header > nav > ul");
const btnNav = document.querySelector("body > main > section.portfolio > .container_button");
let Picture = document.querySelector("body > main > section.portfolio > .container_portfolio");
const form = document.forms[0];

//const Ok_button = document.getElementById ("Ok_button");
const elmName = document.getElementById('client_name');
const elmMail = document.getElementById('client_mail');
let resultValueSubject = '';
let resultValueDetails = '';

let step = 0;
const slider = document.querySelector("body > main > div")

//slider without click button
let counter = 0;
let interval_left = setInterval(function(){
    counter -= 10;
    document.querySelectorAll('.slider').forEach((item) => {
        
       
        if (item.style.left === '-1020px'){
            clearInterval(interval_left);
            return;
        }
         
        item.style.left = `${counter}px`;

        })
    }, 50);

    //slider.addEventListener('click')

/*let interval_right = setInterval(function(){
    document.querySelectorAll('.item').forEach((item) => {
        counter += 1;
        item.style.left = `${counter}px`;
        if (item.style.left === '0px'){
            clearInterval(interval_right);
            return;
        }
            
        })
    }, 100);*/


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




/*const linkHash = (event) =>{
    step++;
    console.log(`step ${step}`, event.target);
    console.log(`step ${step}`, event.currentTarget);
   console.log(`step ${step}`, event.target.parentElement);
   console.log(`step ${step}`, event.currentTarget.parentElement);
   console.log(event.target.children[0]);
   if (event.target === 'li'){        
       //console.log(hash);
      //event.target.children[0].linkHash();
      //addEventListener('click', (=> )); 

       //console.log(document.querySelector(event.target.children[0]).hash);
}
}*/

//itemMenu.addEventListener('click', linkHash);



