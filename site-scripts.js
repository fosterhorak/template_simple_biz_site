const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//function to display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);




//funtion to show the "active" section (section currently being viewed) in the menu selection
    //NOTE - only want this feature on desktop (not mobile)
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');

    const selection1 = document.querySelector('#section1-link');
    const selection2 = document.querySelector('#section2-link');
    const selection3 = document.querySelector('#section3-link');
    const selection4 = document.querySelector('#section4-link');
    const selection5 = document.querySelector('#section5-link');
    const selection6 = document.querySelector('#section6-link');

    let scrollPos = window.scrollY;
    console.log(scrollPos);

    let section1_2Break = 550;
    let section2_3Break = 1400;
    let section3_4Break = 2400;
    let section4_5Break = 3200;
    let section5_6Break = 3900;


    // adds 'highlight' class to my menu items 
    if (window.innerWidth > 960 && scrollPos < section1_2Break) {
        selection1.classList.add('highlight');
        selection2.classList.remove('highlight');
        selection3.classList.remove('highlight');
        selection4.classList.remove('highlight');
        selection5.classList.remove('highlight');
        selection6.classList.remove('highlight');
        return;
        
    }    else if (window.innerWidth > 960 && scrollPos < section2_3Break) {
        selection2.classList.add('highlight');
        selection1.classList.remove('highlight');
        selection3.classList.remove('highlight');
        selection4.classList.remove('highlight');
        selection5.classList.remove('highlight');
        selection6.classList.remove('highlight');
        return;
        
    }   else if (window.innerWidth > 960 && scrollPos < section3_4Break) {
        selection3.classList.add('highlight');
        selection1.classList.remove('highlight');
        selection2.classList.remove('highlight');
        selection4.classList.remove('highlight');
        selection5.classList.remove('highlight');
        selection6.classList.remove('highlight');
        return;
        
    }  else if (window.innerWidth > 960 && scrollPos < section4_5Break) {
        selection4.classList.add('highlight');
        selection1.classList.remove('highlight');
        selection2.classList.remove('highlight');
        selection3.classList.remove('highlight');
        selection5.classList.remove('highlight');
        selection6.classList.remove('highlight');

        return;
    
    } else if (window.innerWidth > 960 && scrollPos < section5_6Break) {
        selection5.classList.add('highlight');
        selection1.classList.remove('highlight');
        selection2.classList.remove('highlight');
        selection3.classList.remove('highlight');
        selection4.classList.remove('highlight');
        selection6.classList.remove('highlight');

        return;
    }   else if (window.innerWidth > 960 && scrollPos >= section5_6Break) {
        selection6.classList.add('highlight');
        selection1.classList.remove('highlight');
        selection2.classList.remove('highlight');
        selection3.classList.remove('highlight');
        selection4.classList.remove('highlight');
        selection5.classList.remove('highlight');
        return;
    
    }


    if ( (elem && window.innerWidth > 960 && scrollPos < 600) || elem ){
        elem.classList.remove('highlight');
        return;
        
    }
    
        

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);




// function to close mobile menu after clicking a menu item...
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);