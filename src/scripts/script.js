let header_main = document.querySelector('.header-main');

let navmenu = document.querySelector('.navmenu-container');
let btn_navmenu = document.querySelector('.btn-navmenu');

btn_navmenu.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu(e);
});
header_main.addEventListener('click', e => {
    close_menu(e);
});

const toggleMenu = e => {
    if(!navmenu.classList.contains('active')) open_menu(e);
    else close_menu(e);
}

const open_menu = () => {
    navmenu.classList.add('active');
    btn_navmenu.classList.add('active');
};
const close_menu = () => {
    navmenu.classList.remove('active');
    btn_navmenu.classList.remove('active');
};

window.addEventListener('resize', () => {
    if(innerWidth >= 768) {
        close_menu();
    }
})