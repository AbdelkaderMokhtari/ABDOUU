let btn = document.getElementById('btn');
let aboutpara = document.getElementById('about-para');


function other() {
    document.getElementById("about-para").style.display = "none";
    document.getElementById("para-two").style.display = "block";
    document.getElementById("btn").style.background = "#3B82F6";
    document.getElementById("btn").style.borderColor = "#fff";
    document.getElementById("btn").style.color = "#fff";
    document.getElementById("prg").style.background = "#fff";
    document.getElementById("prg").style.borderColor = "#000";
    document.getElementById("prg").style.color = "#000";

}

function returnn() {
    document.getElementById("about-para").style.display = "flex";
    document.getElementById("para-two").style.display = "none";
    document.getElementById("btn").style.background = "#fff";
    document.getElementById("btn").style.borderColor = "#000";
    document.getElementById("btn").style.color = "#3B82F6";
    document.getElementById("prg").style.background = "#3B82F6";
    document.getElementById("prg").style.borderColor = "#fff";
    document.getElementById("prg").style.color = "#fff";
}



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.hii', { origin: 'top' });
ScrollReveal().reveal('.paragraph, .about-btns, .about-para', { origin: 'bottom' });


ScrollReveal().reveal('.about-img', { origin: 'bottom' });








window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    });    
})