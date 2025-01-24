document.addEventListener("DOMContentLoaded", function () {

    //Scroll animation for dividers
    window.addEventListener('scroll', function() {
        const scrollAnimations = document.querySelectorAll('#scroll');
        const scrollPosition = window.scrollY;
        scrollAnimations.forEach(scrollAnimation => {
            scrollAnimation.style.transform = `translateX(${scrollPosition * 0.5}px)`;
        });
    });

    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('es') ? 'es' : 'en';
    const translationsUrl = lang === 'en' ? 'https://raw.githubusercontent.com/exluyt/Porfolio/refs/heads/main/languages/en.json' : 'https://raw.githubusercontent.com/exluyt/Porfolio/refs/heads/main/languages/es.json';

    fetch(translationsUrl)
        .then(response => response.json())
        .then(translations => {
            // Barra de navegación
            document.querySelector('#navbar-home span').textContent = translations.navbar.home;
            document.querySelector('#navbar-education span').textContent = translations.navbar.education;
            document.querySelector('#navbar-technologies span').textContent = translations.navbar.technologies;
            document.querySelector('#navbar-projects span').textContent = translations.navbar.projects;
            document.querySelector('#navbar-contact span').textContent = translations.navbar.contact;

            // Sección de inicio
            let helloElement = document.querySelector('#hero-hello');
            let spanContent = helloElement.querySelector('span').outerHTML;
            helloElement.innerHTML = translations.hero.hello + ' ' + spanContent;
            document.querySelector('#hero-description').textContent = translations.hero.description;
            document.querySelector('#hero-resume').textContent = translations.hero.resume;
            document.querySelector('#hero-contact').textContent = translations.hero.contact;

            // Links
            document.querySelector('#resume-link').setAttribute('href', lang === 'en' ? 'pdf/ArpadKiss_Resume_developer.pdf' : 'pdf/ArpadKiss_CV_programador.pdf');
            document.querySelector('#linkedin-link').setAttribute('href', 'https://www.linkedin.com/in/arpad-kiss-dev' + (lang === 'en' ? '/?locale=en_US' : ''));

            // Traducir "Soy" a "I'm" o viceversa
            document.querySelector('#hero-typed').innerHTML = translations.hero.typed + ' <span id="element"></span>';

            // Reinicializar Typed.js con las nuevas cadenas
            let typed = new Typed('#element', {
                strings: lang === 'en' ? ['Developer', 'Curious', 'Creative'] : ['Desarrollador', 'Curioso', 'Creativo'],
                typeSpeed: 50,
                loop: true
            });

            // Sección de proyectos
            document.querySelector('#projects-title').textContent = translations.projects.title;
            document.querySelectorAll('.code').forEach(element => {
                element.textContent = translations.projects.code;
            });
            document.querySelector('#rsb').textContent = translations.projects.rsb;
            document.querySelector('#cine').textContent = translations.projects.cine;
            document.querySelector('#mini').textContent = translations.projects.mini;
            document.querySelector('#galaxy-title').textContent = translations.projects.galaxyTitle;
            document.querySelector('#galaxy').textContent = translations.projects.galaxy;
            document.querySelector('#fortytwo-title').textContent = translations.projects.fortytwoTitle;
            document.querySelector('#fortytwo').textContent = translations.projects.fortytwo;
            document.querySelector('#ppt-title').textContent = translations.projects.pptTitle;
            document.querySelector('#ppt').textContent = translations.projects.ppt;

            // Sección de educación
            document.querySelector('#education-title').textContent = translations.education.title;
            translations.education.timeline.forEach((item, index) => {
                document.querySelector(`#education-year-${index}`).textContent = item.year;
                document.querySelector(`#education-title-${index}`).textContent = item.title;
                document.querySelector(`#education-description-${index}`).textContent = item.description;
            });

            // Sección de tecnologías
            document.querySelector('#technologies-title').textContent = translations.technologies.title;
            document.querySelector('#technologies-frontEnd').textContent = translations.technologies.frontEnd;
            document.querySelector('#technologies-backEnd').textContent = translations.technologies.backEnd;
            document.querySelector('#technologies-learning').textContent = translations.technologies.learning;
            document.querySelector('#technologies-tools').textContent = translations.technologies.tools;

            // Formulario de contacto
            let contactTitle = document.querySelector('#contact-title');
            contactTitle.firstChild.textContent = translations.contact.title + ' ';
            document.querySelector('#contact-subtitle').textContent = translations.contact.subtitle;
            document.querySelector('#contact-description').textContent = translations.contact.description;

            // Pie de página
            document.querySelector('#footer-home').textContent = translations.footer.home;
            document.querySelector('#footer-technologies').textContent = translations.footer.technologies;
            document.querySelector('#footer-projects').textContent = translations.footer.projects;
            document.querySelector('#footer-education').textContent = translations.footer.education;
            document.querySelector('#footer-contact').textContent = translations.footer.contact;
            let footerElement = document.querySelector('#footer-createdBy');
            let spanElements = footerElement.querySelectorAll('span');
            spanElements[0].textContent = translations.footer.site;

            let textNode = footerElement.childNodes[1];
            textNode.textContent = ' ' + translations.footer.createdBy + ' ';
            document.querySelector('#small').textContent = translations.footer.partiallyCreated;
        });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    let navbar = document.querySelector("#navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    let bars = document.querySelector("#bars");
    let nav = document.querySelector("#nav");
    let nav_links = document.querySelectorAll("#nav a");

    bars.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    nav_links.forEach((links) => {
        links.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !bars.contains(event.target)) {
            nav.classList.remove("show");
        }
    });

    let typed = new Typed('#element', {
        strings: ['Desarrollador', 'Curioso', 'Creativo'],
        typeSpeed: 50,
        loop: true
    });

    fetch('https://raw.githubusercontent.com/exluyt/Porfolio/refs/heads/main/languages/en.json')
        .then(response => response.json())
        .then(translations => {
            document.querySelector('#uk-flag').addEventListener('click', () => {
                // Barra de navegación
                document.querySelector('#navbar-home span').textContent = translations.navbar.home;
                document.querySelector('#navbar-education span').textContent = translations.navbar.education;
                document.querySelector('#navbar-technologies span').textContent = translations.navbar.technologies;
                document.querySelector('#navbar-projects span').textContent = translations.navbar.projects;
                document.querySelector('#navbar-contact span').textContent = translations.navbar.contact;

                // Sección de inicio
                let helloElement = document.querySelector('#hero-hello');
                let spanContent = helloElement.querySelector('span').outerHTML;
                helloElement.innerHTML = translations.hero.hello + ' ' + spanContent;
                document.querySelector('#hero-description').textContent = translations.hero.description;
                document.querySelector('#hero-resume').textContent = translations.hero.resume;
                document.querySelector('#hero-contact').textContent = translations.hero.contact;

                // Links
                document.querySelector('#resume-link').setAttribute('href', 'pdf/ArpadKiss_Resume_developer.pdf');
                document.querySelector('#linkedin-link').setAttribute('href', 'https://www.linkedin.com/in/arpad-kiss-dev/?locale=en_US');

                // Traducir "Soy" a "I'm"
                document.querySelector('#hero-typed').innerHTML = translations.hero.typed + ' <span id="element"></span>';

                // Reinicializar Typed.js con las nuevas cadenas
                typed.destroy();
                typed = new Typed('#element', {
                    strings: ['Developer', 'Curious', 'Creative'],
                    typeSpeed: 50,
                    loop: true
                });

                // Sección de proyectos
                document.querySelector('#projects-title').textContent = translations.projects.title;
                document.querySelectorAll('.code').forEach(element => {
                    element.textContent = translations.projects.code;
                });
                document.querySelector('#rsb').textContent = translations.projects.rsb;
                document.querySelector('#cine').textContent = translations.projects.cine;
                document.querySelector('#mini').textContent = translations.projects.mini;
                document.querySelector('#galaxy-title').textContent = translations.projects.galaxyTitle;
                document.querySelector('#galaxy').textContent = translations.projects.galaxy;
                document.querySelector('#fortytwo-title').textContent = translations.projects.fortytwoTitle;
                document.querySelector('#fortytwo').textContent = translations.projects.fortytwo;
                document.querySelector('#ppt-title').textContent = translations.projects.pptTitle;
                document.querySelector('#ppt').textContent = translations.projects.ppt;
                

                // Sección de educación
                document.querySelector('#education-title').textContent = translations.education.title;
                translations.education.timeline.forEach((item, index) => {
                    document.querySelector(`#education-year-${index}`).textContent = item.year;
                    document.querySelector(`#education-title-${index}`).textContent = item.title;
                    document.querySelector(`#education-description-${index}`).textContent = item.description;
                });

                // Sección de tecnologías
                document.querySelector('#technologies-title').textContent = translations.technologies.title;
                document.querySelector('#technologies-frontEnd').textContent = translations.technologies.frontEnd;
                document.querySelector('#technologies-backEnd').textContent = translations.technologies.backEnd;
                document.querySelector('#technologies-learning').textContent = translations.technologies.learning;
                document.querySelector('#technologies-tools').textContent = translations.technologies.tools;

                // Formulario de contacto
                let contactTitle = document.querySelector('#contact-title');
                contactTitle.firstChild.textContent = translations.contact.title + ' ';
                document.querySelector('#contact-subtitle').textContent = translations.contact.subtitle;
                document.querySelector('#contact-description').textContent = translations.contact.description;
/*                 document.querySelector('#contact-form-name').setAttribute('placeholder', translations.contact.form.name);
                document.querySelector('#contact-form-email').setAttribute('placeholder', translations.contact.form.email);
                document.querySelector('#contact-form-subject').setAttribute('placeholder', translations.contact.form.subject);
                document.querySelector('#contact-form-message').setAttribute('placeholder', translations.contact.form.message);
                document.querySelector('#contact-form-button').textContent = translations.contact.form.button; */

                // Pie de página
                document.querySelector('#footer-home').textContent = translations.footer.home;
                document.querySelector('#footer-technologies').textContent = translations.footer.technologies;
                document.querySelector('#footer-projects').textContent = translations.footer.projects;
                document.querySelector('#footer-education').textContent = translations.footer.education;
                document.querySelector('#footer-contact').textContent = translations.footer.contact;
                let footerElement = document.querySelector('#footer-createdBy');
                let spanElements = footerElement.querySelectorAll('span');
                spanElements[0].textContent = translations.footer.site;

                let textNode = footerElement.childNodes[1];
                textNode.textContent = ' ' + translations.footer.createdBy + ' ';
                document.querySelector('#small').textContent = translations.footer.partiallyCreated;
            });
        });

    fetch('https://raw.githubusercontent.com/exluyt/Porfolio/refs/heads/main/languages/es.json')
        .then(response => response.json())
        .then(translations => {
            document.querySelector('#es-flag').addEventListener('click', () => {
                // Barra de navegación
                document.querySelector('#navbar-home span').textContent = translations.navbar.home;
                document.querySelector('#navbar-education span').textContent = translations.navbar.education;
                document.querySelector('#navbar-technologies span').textContent = translations.navbar.technologies;
                document.querySelector('#navbar-projects span').textContent = translations.navbar.projects;
                document.querySelector('#navbar-contact span').textContent = translations.navbar.contact;

                // Sección de inicio
                let helloElement = document.querySelector('#hero-hello');
                let spanContent = helloElement.querySelector('span').outerHTML;
                helloElement.innerHTML = translations.hero.hello + ' ' + spanContent;
                document.querySelector('#hero-description').textContent = translations.hero.description;
                document.querySelector('#hero-resume').textContent = translations.hero.resume;
                document.querySelector('#hero-contact').textContent = translations.hero.contact;

                // Links
                document.querySelector('#resume-link').setAttribute('href', 'pdf/ArpadKiss_CV_programador.pdf');
                document.querySelector('#linkedin-link').setAttribute('href', 'https://www.linkedin.com/in/arpad-kiss-dev');

                // Traducir "I'm" a "Soy"
                document.querySelector('#hero-typed').innerHTML = translations.hero.typed + ' <span id="element"></span>';

                // Reinicializar Typed.js con las nuevas cadenas
                typed.destroy();
                typed = new Typed('#element', {
                    strings: ['Desarrollador', 'Curioso', 'Creativo'],
                    typeSpeed: 50,
                    loop: true
                });
                // Sección de proyectos
                document.querySelector('#projects-title').textContent = translations.projects.title;
                document.querySelectorAll('.code').forEach(element => {
                    element.textContent = translations.projects.code;
                });
                document.querySelector('#rsb').textContent = translations.projects.rsb;
                document.querySelector('#cine').textContent = translations.projects.cine;
                document.querySelector('#mini').textContent = translations.projects.mini;
                document.querySelector('#galaxy-title').textContent = translations.projects.galaxyTitle;
                document.querySelector('#galaxy').textContent = translations.projects.galaxy;
                document.querySelector('#fortytwo-title').textContent = translations.projects.fortytwoTitle;
                document.querySelector('#fortytwo').textContent = translations.projects.fortytwo;
                document.querySelector('#ppt-title').textContent = translations.projects.pptTitle;
                document.querySelector('#ppt').textContent = translations.projects.ppt;

                // Sección de educación
                document.querySelector('#education-title').textContent = translations.education.title;
                translations.education.timeline.forEach((item, index) => {
                    document.querySelector(`#education-year-${index}`).textContent = item.year;
                    document.querySelector(`#education-title-${index}`).textContent = item.title;
                    document.querySelector(`#education-description-${index}`).textContent = item.description;
                });

                // Sección de tecnologías
                document.querySelector('#technologies-title').textContent = translations.technologies.title;
                document.querySelector('#technologies-frontEnd').textContent = translations.technologies.frontEnd;
                document.querySelector('#technologies-backEnd').textContent = translations.technologies.backEnd;
                document.querySelector('#technologies-learning').textContent = translations.technologies.learning;
                document.querySelector('#technologies-tools').textContent = translations.technologies.tools;

                // Formulario de contacto
                let contactTitle = document.querySelector('#contact-title');
                contactTitle.firstChild.textContent = translations.contact.title + ' ';
                document.querySelector('#contact-subtitle').textContent = translations.contact.subtitle;
                document.querySelector('#contact-description').textContent = translations.contact.description;
/*                 document.querySelector('#contact-form-name').setAttribute('placeholder', translations.contact.form.name);
                document.querySelector('#contact-form-email').setAttribute('placeholder', translations.contact.form.email);
                document.querySelector('#contact-form-subject').setAttribute('placeholder', translations.contact.form.subject);
                document.querySelector('#contact-form-message').setAttribute('placeholder', translations.contact.form.message);
                document.querySelector('#contact-form-button').textContent = translations.contact.form.button; */

                // Pie de página
                document.querySelector('#footer-home').textContent = translations.footer.home;
                document.querySelector('#footer-technologies').textContent = translations.footer.technologies;
                document.querySelector('#footer-projects').textContent = translations.footer.projects;
                document.querySelector('#footer-education').textContent = translations.footer.education;
                document.querySelector('#footer-contact').textContent = translations.footer.contact;
                let footerElement = document.querySelector('#footer-createdBy');
                let spanElements = footerElement.querySelectorAll('span');
                spanElements[0].textContent = translations.footer.site;

                let textNode = footerElement.childNodes[1];
                textNode.textContent = ' ' + translations.footer.createdBy + ' ';
                document.querySelector('#small').textContent = translations.footer.partiallyCreated;
            });
        });
});