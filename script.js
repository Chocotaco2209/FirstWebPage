//this script is to turn the normal navbar to black navbar when scroll down to give transparent effect!
const nav = document.querySelector("nav");

const addNavBg = () => {
    if (document.documentElement.scrollTop > nav.scrollHeight) {
        nav.classList.add("nav-bg");
        nav.classList.remove("no-nav-bg");
    } else {
        nav.classList.add("no-nav-bg");
        nav.classList.remove("nav-bg");
    }
};

document.addEventListener("scroll", addNavBg);
