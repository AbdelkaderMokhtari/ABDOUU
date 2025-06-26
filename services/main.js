let change = document.getElementById('e-change');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let body = document.body;

if (localStorage.getItem("mode") === "light") {
    body.classList.add("light-mode");
    moon.style.display = "none";
    sun.style.display = "inline";
} else {
    moon.style.display = "inline";
    sun.style.display = "none";
}

change.onclick = () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        moon.style.display = "none";
        sun.style.display = "inline";
        localStorage.setItem("mode", "light");
    } else {
        moon.style.display = "inline";
        sun.style.display = "none";
        localStorage.setItem("mode", "dark");
    }
};

function showContent(element) {
    const box = element.closest('.box');
    const paragraph = box.querySelector('p');
    const plusIcon = box.querySelector('.bx-plus');
    const minusIcon = box.querySelector('.bx-minus');

    // Show the paragraph content
    paragraph.classList.add('visible');
    
    // Hide the plus icon and show the minus icon
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'inline-block';
}

function hideContent(element) {
    const box = element.closest('.box');
    const paragraph = box.querySelector('p');
    const plusIcon = box.querySelector('.bx-plus');
    const minusIcon = box.querySelector('.bx-minus');

    // Hide the paragraph content
    paragraph.classList.remove('visible');
    
    // Show the plus icon and hide the minus icon
    plusIcon.style.display = 'inline-block';
    minusIcon.style.display = 'none';
}

// Event listeners for the icons
document.querySelectorAll('.bx-plus').forEach(icon => {
    icon.addEventListener('click', function() {
        showContent(this);
    });
});

document.querySelectorAll('.bx-minus').forEach(icon => {
    icon.addEventListener('click', function() {
        hideContent(this);
    });
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.text', { origin: 'top' });
ScrollReveal().reveal('.img, .our', { origin: 'bottom' });
ScrollReveal().reveal('.box', { origin: 'left' });



// Check saved theme
if (localStorage.getItem("mode") === "light") {
    body.classList.add("light-mode");
    moon.style.display = "none";
    sun.style.display = "inline";
} else {
    moon.style.display = "inline";
    sun.style.display = "none";
}



// scroll reveal

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header', { origin: 'top' });
ScrollReveal().reveal('.footer', { origin: 
'bottom' });
ScrollReveal().reveal('.service-box', { origin: 'left' });
ScrollReveal().reveal('.move', { origin: 'right' });

// typed js

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTube', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});