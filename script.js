let menu = document.querySelector('.button-menu');
console.log(menu);
let navList = document.querySelector('.navlist');
console.log(navList);

menu.onclick = () => {
    navList.classList.toggle('open');
}


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 100,
    reset: true
});

sr.reveal('.hero-text', {delay:100, origin:'top'});
sr.reveal('.hero-img', {delay:100, origin:'bottom'});
sr.reveal('.icons', {delay:100, origin:'left'});