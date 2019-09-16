function isViewIn(el) {
    var rect = el.getBoundingClientRect();
    // console.log(rect);
    return (rect.top < window.innerHeight / 3 * 2);
}

function callbackFunc() {
    var sec2 = document.getElementById("sec2");
    if (isViewIn(sec2)) {
        document.getElementById("negative").classList.add("negativeS");
        document.getElementById("negative").classList.remove("negative");
        document.getElementById("menu").classList.add("menuS");
        document.getElementById("menu").classList.remove("menu");

        document.getElementById("sub1").classList.add("subS");
        document.getElementById("sub1").classList.remove("sub");
        document.getElementById("sub2").classList.add("subS");
        document.getElementById("sub2").classList.remove("sub");
        document.getElementById("sub3").classList.add("subS");
        document.getElementById("sub3").classList.remove("sub");
        document.getElementById("sub4").classList.add("subS");
        document.getElementById("sub4").classList.remove("sub");
    } else {
        document.getElementById("negative").classList.add("negative");
        document.getElementById("negative").classList.remove("negativeS");
        document.getElementById("menu").classList.add("menu");
        document.getElementById("menu").classList.remove("menuS");

        document.getElementById("sub1").classList.add("sub");
        document.getElementById("sub1").classList.remove("subS");
        document.getElementById("sub2").classList.add("sub");
        document.getElementById("sub2").classList.remove("subS");
        document.getElementById("sub3").classList.add("sub");
        document.getElementById("sub3").classList.remove("subS");
        document.getElementById("sub4").classList.add("sub");
        document.getElementById("sub4").classList.remove("subS");
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);