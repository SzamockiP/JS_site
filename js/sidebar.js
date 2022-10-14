let sidebar_state = false;

function switch_sidebar() {
    if(sidebar_state) open_siedbar();
    else close_sidebar();
    sidebar_state = !sidebar_state;
}

function open_siedbar(){
    document.querySelectorAll("div")[0].style.width="15%";
    document.querySelector("header").style.width="85%";
    document.querySelector("main").style.width="85%";
    document.querySelector("footer").style.width="85%";

    document.querySelector("header").style.marginLeft="15%";
    document.querySelector("main").style.marginLeft="15%";
    document.querySelector("footer").style.marginLeft="15%";
}

function close_sidebar(){
    document.querySelectorAll("div")[0].style.width="0%";

    document.querySelector("header").style.width="100%";
    document.querySelector("main").style.width="100%";
    document.querySelector("footer").style.width="100%";

    document.querySelector("header").style.marginLeft="0%";
    document.querySelector("main").style.marginLeft="0%";
    document.querySelector("footer").style.marginLeft="0%";
}