document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector("#navbar")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("sticky")
        }
        else {
            navbar.classList.remove("sticky")
        }
    })

    let bars = document.querySelector("#bars")
    let nav = document.querySelector("#nav")
    let nav_links = document.querySelectorAll("#nav a")

    bars.addEventListener("click", () => {
        nav.classList.toggle("show")
    })

    nav_links.forEach((links) => {
        links.addEventListener("click", () => {
            nav.classList.toggle('show')
        })
    })


    let typed = new Typed('#element', {
        strings: ['Desarrollador', 'Curioso', "Creativo"],
        typeSpeed: 50,
        loop: true
    });
});