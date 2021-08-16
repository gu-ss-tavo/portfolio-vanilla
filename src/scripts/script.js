let header_main = document.querySelector('.header-main');

let navmenu = document.querySelector('.navmenu-container');
let navmenu_list = document.querySelector('.navmenu-list');
let btn_navmenu = document.querySelector('.btn-navmenu');

// * events
window.onresize = () => {
    if(innerWidth >= 576) {
        close_menu();
    }
};
window.onscroll= () => {
    if(window.scrollY > 0) navmenu_list.classList.add("active");
    else navmenu_list.classList.remove("active");
};

// * nav menu
btn_navmenu.onclick = e => {
    e.stopPropagation();
    toggleMenu(e);
};
navmenu.onclick = e => {
    e.stopPropagation();
    close_menu(e);
};

const toggleMenu = e => {
    navmenu.classList.toggle('active');
    btn_navmenu.classList.toggle('active');
};
const close_menu = e => {
    navmenu.classList.remove('active');
    btn_navmenu.classList.remove('active');
};