const scrollbtn = document.getElementById("scroll");
window.onscroll = function () {
    scrollbtn.style.display = window.scrollY > 300 ? "block":"none";
};
scrollbtn.onclick = function () {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
};