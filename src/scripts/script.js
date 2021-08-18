let navmenu = document.querySelector('.navmenu-container');
let navmenu_list = document.querySelector('.navmenu-list');
let btn_navmenu = document.querySelector('.btn-navmenu');

let articles = document.querySelector('.section-container').children;

// * events
window.onresize = () => {
    if(innerWidth >= 576) {
        close_menu();
    }
};
window.onscroll= () => {
    if(window.scrollY > 0) navmenu_list.classList.add("active");
    else navmenu_list.classList.remove("active");

    if(window.scrollY < articles[1].offsetTop) {
        console.log('hola');
        activeItem(0);
    }else if(window.scrollY < articles[2].offsetTop-10) {
        activeItem(1);
    }else if(window.scrollY < articles[3].offsetTop-10) {
        activeItem(2);
    }else if(window.scrollY < articles[4].offsetTop-10) {
        activeItem(3);
    }else {
        activeItem(4);
    }
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
const activeItem = index => {
    for (let i = 0; i < navmenu_list.children.length; i++) {
        if(index == i) {
            navmenu_list.children[i].classList.add('active');
            continue;
        }
        navmenu_list.children[i].classList.remove('active');
    }
}