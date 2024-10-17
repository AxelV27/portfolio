// navbar scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

// class active au clique et au scroll
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("header ul li a");
    
// Fonction ajouter active au lien qui a été cliqué.
function setActiveLink(link) {
        link.classList.add('active');
}
    
// Gérer le clic sur les liens
links.forEach(link => {
    link.addEventListener("click", function(event) {
        setActiveLink(this);
    });
});

// Change d'activation en fonction de la section en cours lors du scroll
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight / 3 && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
            const currentId = section.getAttribute("id");
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

//Menu déroulant 
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header ul");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); 
    });

    menu.addEventListener("click", function(){
        menu.classList.remove("active")
    })
;
});

// Animation au scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Utilise la vue de la fenêtre
        rootMargin: '0px',
        threshold: 0.3 // Lorsque 30% de la section est visible, déclencher l'animation
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajoute la classe visible pour l'animation
                observer.unobserve(entry.target); // Ne pas surveiller à nouveau
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); // Commencer à surveiller chaque section
    });
});


