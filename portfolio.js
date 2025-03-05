var typed = new Typed(".text",{
    strings: ["Artificial intelligence (AI)", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("manu-icon");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu a");

    // Toggle menu on clicking menu icon
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Hide menu when a menu item is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});

