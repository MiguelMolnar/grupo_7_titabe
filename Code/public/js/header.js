window.addEventListener('load', function () {
    const liNavbar1 = document.querySelector('.liNavbar1');
    const liNavbar2 = document.querySelector('.liNavbar2');
    const liNavbar3 = document.querySelector('.liNavbar3');

    let query = location.pathname;
    if (query === '/' && !liNavbar1.classList.contains('text-warning')) {
        liNavbar1.classList.remove('text-white')
        liNavbar2.classList.remove('text-warning')
        liNavbar3.classList.remove('text-warning')
        liNavbar1.classList.add('text-warning')
        liNavbar2.classList.add('text-white')
        liNavbar3.classList.add('text-white')
    }
    else if (query.includes('/products') && !liNavbar2.classList.contains('text-warning')) {
        liNavbar2.classList.remove('text-white')
        liNavbar1.classList.remove('text-warning')
        liNavbar3.classList.remove('text-warning')
        liNavbar2.classList.add('text-warning')
        liNavbar1.classList.add('text-white')
        liNavbar3.classList.add('text-white')

    }
})