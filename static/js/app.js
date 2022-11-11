const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

$("#menu").click(() => {
    $("nav").addClass("mobileNav");
    $("nav").css({"display": "flex", "flex-direction": "column", "align-items": "end"});
    $(".nav-links").css({"display": "flex", "flex-direction": "column", "align-items": "end", "padding": "30px 20px", "height": "70%"});
    $(".social-links").css({"display": "flex", "height": "fit-content", "width": "100%", "padding": "20px", "position": "absolute", "bottom": "0"});
    $("#menu").css({"display": "none"});
    $("html").css({"height": "100vh", "overflow": "hidden"});
});

$("#closeNav").click(() => {
    $("nav").removeAttr("style");
    $(".nav-links").removeAttr("style");
    $(".social-links").removeAttr("style");
    $("#menu").removeAttr("style");
    $("html").removeAttr("style");
    $("nav").removeClass("mobileNav");
})