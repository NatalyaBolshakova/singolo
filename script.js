let itemMenu = document.querySelector("body > header > nav > ul");
let btnNav = document.querySelector("body > main > section.portfolio > .container_button");
let Picture = document.querySelector("body > main > section.portfolio > .container_portfolio");
//document.querySelector("body > main > section.portfolio > div")
let step = 0;


const selectItem = (event) => {
    step++;
    
    // click - change active links of header
    if (/*event.target.closest('li').classList[0] != 'active_li' & */event.target.tagName === 'A') {
        document.querySelectorAll('li').forEach(li => li.classList.remove('active_li'));
        event.target.closest('li').classList.add('active_li');         
    }    
}

const selectButton = (event) => {
    step++;
    // click - change the active portfolio button and image rotation position
    
   if (event.target.classList[1] != 'button_active' & event.target.tagName === 'BUTTON') {
        document.querySelectorAll('.container_button>button').forEach(button => button.classList.remove('button_active'));
        event.target.classList.add('button_active');

        document.querySelectorAll('.container_portfolio>img').forEach(img => img.style.order = Math.floor(Math.random() * document.querySelectorAll('.container_portfolio>img').length));         
    }
}

const activePicture = (event) => {        
    if (event.target.tagName === 'IMG'){
        document.querySelectorAll('.container_portfolio>img').forEach(img => img.classList.remove('img_active'));
        event.target.classList.add('img_active');
    };    
}

   
itemMenu.addEventListener('click', selectItem);
btnNav.addEventListener('click', selectButton);
Picture.addEventListener('click', activePicture);



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



