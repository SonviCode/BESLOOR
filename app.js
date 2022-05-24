// responsiv navbar
const menu = document.querySelector('.list-header');
const bodyFixed = document.querySelector('body');
const btnMenu = document.querySelector('.btn-toggle-container');

// ajout des classes actives aux menu et au body 
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu')
    bodyFixed.classList.toggle('active-body')
})
    

// supprimer menu des 730px 
window.addEventListener('resize', (e) =>{

    if (window.innerWidth >= 730){
        menu.classList.remove('active-menu')
        bodyFixed.classList.remove('active-body')
        btn.classList.remove('active')
    }
})


// animation icone hamburger
const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation(){
    btn.classList.toggle('active')
}






// Effet de rotation pour la carte

const btnImage = document.querySelectorAll('.btnImg');
const descriImg = document.querySelectorAll('.partie-invisible');

btnImage.forEach(function (btnImage) {
    
    btnImage.addEventListener("click", () => {

        btnImage.classList.toggle('active');
    });
});

descriImg.forEach(function (descriImg) {
    
    descriImg.addEventListener("click", () => {

        descriImg.classList.toggle('active');
    });
});

 