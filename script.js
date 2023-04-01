window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('#hamburger-menu');
    let footerLogo = document.getElementById('footer-logo').querySelector('svg');
    let footerLinks = document.querySelectorAll('#footer-links');

    Array.from(footerLinks).map(item => {
        Array.from(item.children).map(target => {
            target.addEventListener('mouseenter', () => {
                target.querySelector('path').setAttribute('fill', '#fff')
            })
            target.addEventListener('mouseleave', () => {
                target.querySelector('path').setAttribute('fill', 'hsl(167, 40%, 24%)')
            })
        })
    })

    footerLogo.querySelector('path').setAttribute('fill', 'hsl(167, 40%, 24%)');

    hamburger.addEventListener('click', displayMenu)

    function displayMenu(){
        let nav = document.querySelector('.nav-link');
        let pointer = document.querySelector('.pointer');
        
        nav.classList.toggle('invisible');
        pointer.classList.toggle('invisible');

    }

})




