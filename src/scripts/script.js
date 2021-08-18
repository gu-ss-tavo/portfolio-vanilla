let navmenu = document.querySelector('.navmenu-container');
let navmenu_list = document.querySelector('.navmenu-list');
let btn_navmenu = document.querySelector('.btn-navmenu');

let articles = document.querySelector('.section-container').children;

console.log(articles);

// * events
window.onresize = () => {
    if(innerWidth >= 576) {
        close_menu();
    }
};
window.onscroll= () => {
    let scroll_y = window.scrollY;

    if(scroll_y > 0) navmenu_list.classList.add("active");
    else navmenu_list.classList.remove("active");


    if(scroll_y < articles[1].offsetTop-100) activeItem(0);
    else if(scroll_y < articles[2].offsetTop-100) activeItem(1);
    else if(scroll_y < articles[3].offsetTop-100) activeItem(2);
    else if(scroll_y < articles[4].offsetTop-100) activeItem(3);
    else activeItem(4);

    let moves_home = scroll_y > articles[1].offsetTop - (window.innerHeight/1.4);
    if(moves_home && scroll_y < articles[2].offsetTop - (window.innerHeight/1.4)) activeSection(articles[1]);
    else if(moves_home && scroll_y < articles[3].offsetTop - (window.innerHeight/1.4)) activeSection(articles[2]);
    else if(moves_home && scroll_y < articles[4].offsetTop - (window.innerHeight/1.4)) activeSection(articles[3]);
    else if(moves_home && scroll_y > articles[4].offsetTop - (window.innerHeight/1.4)) activeSection(articles[4]);
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
const activeSection = section => {
    section.classList.add('active');
}