let header_main = document.querySelector('.header-main');

let navmenu = document.querySelector('.navmenu-container');
let btn_navmenu = document.querySelector('.btn-navmenu');

// * events
window.onresize = () => {
    if(innerWidth >= 576) {
        close_menu();
    }
};

// * nav menu
btn_navmenu.onclick =  e => {
    e.stopPropagation();
    toggleMenu(e);
};
header_main.onclick = e => {
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

