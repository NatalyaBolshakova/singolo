let itemMenu = document.querySelector("body > header > nav > ul");
let step = 0;


const selectItem = (event) => {
    step++;
    
    // click - change color text
    //console.log(`step ${step}`, event.target);

    if (event.target.closest('li').classList[0] != 'active_li' & event.target.tagName === 'A') {
        document.querySelectorAll('li').forEach(li => li.classList.remove('active_li'));
        event.target.closest('li').classList.add('active_li');         
    }    
}
   
itemMenu.addEventListener('click', selectItem);


/*const linkHash = (event) =>{
    step++;
    console.log(`step ${step}`, event.target);
    /*console.log(`step ${step}`, event.currentTarget);
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



