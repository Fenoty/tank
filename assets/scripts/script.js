const menu = document.getElementById('menu');
const header = document.getElementById('header');

function toggleMenu() {
    if (menu.classList.contains('flex!')) {
        menu.classList.remove('flex!');
        header.classList.remove('flex', 'flex-col');
        document.documentElement.style.overflow = 'auto';
        document.getElementsByTagName('header')[0].style.height = 'auto';
        return
    }
    
    menu.classList.add('flex!');
    header.classList.add('flex', 'flex-col');
    document.documentElement.style.overflow = 'hidden';
    document.getElementsByTagName('header')[0].style.height = '100svh';
}

