const menu_nav = document.getElementById('menu');

menu_nav.addEventListener('click', () => {
    const nav_header = document.getElementById('drop_menu');
    nav_header.classList.toggle('show');
});


const list_menu = document.getElementById('list_menu');

list_menu.addEventListener('click', () => {
    const nav_header = document.getElementById('drop_menu');
    nav_header.classList.toggle('show');
});

