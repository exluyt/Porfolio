document.addEventListener("DOMContentLoaded", function () {
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

  let typed = new Typed("#element", {
    strings: ["Desarrollador", "Curioso", "Creativo"],
    typeSpeed: 50,
    loop: true,
  });

  document.querySelector("#uk-flag").addEventListener("click", function () {
    typed.destroy();
    typed = new Typed("#element", {
      strings: ["Developer", "Curious", "Creative"],
      typeSpeed: 50,
      loop: true,
    });
  });
  document.querySelector("#es-flag").addEventListener("click", function () {
    typed.destroy();
    typed = new Typed("#element", {
      strings: ["Desarrollador", "Curioso", "Creativo"],
      typeSpeed: 50,
      loop: true,
    });
  });
  fetch(
    "https://raw.githubusercontent.com/exluyt/Porfolio/main/languages/en.json"
  )
    .then((response) => response.json())
    .then((translations) => {
      document.querySelector("#uk-flag").addEventListener("click", () => {
        // Barra de navegación
        document.querySelector("#navbar-home span").textContent =
          translations.navbar.home;
        document.querySelector("#navbar-education span").textContent =
          translations.navbar.education;
        document.querySelector("#navbar-technologies span").textContent =
          translations.navbar.technologies;
        document.querySelector("#navbar-contact span").textContent =
          translations.navbar.contact;

        // Sección de inicio
        let helloElement = document.querySelector("#hero-hello");
        let spanContent = helloElement.querySelector("span").outerHTML;
        helloElement.innerHTML = translations.hero.hello + " " + spanContent;
        document.querySelector("#hero-description").textContent =
          translations.hero.description;
        document.querySelector("#hero-resume").textContent =
          translations.hero.resume;
        document.querySelector("#hero-contact").textContent =
          translations.hero.contact;

        // Sección de educación
        document.querySelector("#education-title").textContent =
          translations.education.title;
        translations.education.timeline.forEach((item, index) => {
          document.querySelector(`#education-year-${index}`).textContent =
            item.year;
          document.querySelector(`#education-title-${index}`).textContent =
            item.title;
          document.querySelector(
            `#education-description-${index}`
          ).textContent = item.description;
        });

        // Sección de tecnologías
        document.querySelector("#technologies-title").textContent =
          translations.technologies.title;
        document.querySelector("#technologies-frontEnd").textContent =
          translations.technologies.frontEnd;
        document.querySelector("#technologies-backEnd").textContent =
          translations.technologies.backEnd;
        document.querySelector("#technologies-learning").textContent =
          translations.technologies.learning;
        document.querySelector("#technologies-tools").textContent =
          translations.technologies.tools;

        // Formulario de contacto
        let contactTitle = document.querySelector("#contact-title");
        contactTitle.firstChild.textContent = translations.contact.title + " ";
        document.querySelector("#contact-description").textContent =
          translations.contact.description;
        document
          .querySelector("#contact-form-name")
          .setAttribute("placeholder", translations.contact.form.name);
        document
          .querySelector("#contact-form-email")
          .setAttribute("placeholder", translations.contact.form.email);
        document
          .querySelector("#contact-form-subject")
          .setAttribute("placeholder", translations.contact.form.subject);
        document
          .querySelector("#contact-form-message")
          .setAttribute("placeholder", translations.contact.form.message);
        document.querySelector("#contact-form-button").textContent =
          translations.contact.form.button;

        // Pie de página
        let footerElement = document.querySelector("#footer-createdBy");
        let spanElements = footerElement.querySelectorAll("span");
        spanElements[0].textContent = translations.footer.site;

        let textNode = footerElement.childNodes[1];
        textNode.textContent = " " + translations.footer.createdBy + " ";
        document.querySelector("#small").textContent =
          translations.footer.partiallyCreated;
      });
    });
  fetch(
    "https://raw.githubusercontent.com/exluyt/Porfolio/main/languages/es.json"
  )
    .then((response) => response.json())
    .then((translations) => {
      document.querySelector("#es-flag").addEventListener("click", () => {
        // Barra de navegación
        document.querySelector("#navbar-home span").textContent =
          translations.navbar.home;
        document.querySelector("#navbar-education span").textContent =
          translations.navbar.education;
        document.querySelector("#navbar-technologies span").textContent =
          translations.navbar.technologies;
        document.querySelector("#navbar-contact span").textContent =
          translations.navbar.contact;

        // Sección de inicio
        let helloElement = document.querySelector("#hero-hello");
        let spanContent = helloElement.querySelector("span").outerHTML;
        helloElement.innerHTML = translations.hero.hello + " " + spanContent;
        document.querySelector("#hero-description").textContent =
          translations.hero.description;
        document.querySelector("#hero-resume").textContent =
          translations.hero.resume;
        document.querySelector("#hero-contact").textContent =
          translations.hero.contact;

        // Sección de educación
        document.querySelector("#education-title").textContent =
          translations.education.title;
        translations.education.timeline.forEach((item, index) => {
          document.querySelector(`#education-year-${index}`).textContent =
            item.year;
          document.querySelector(`#education-title-${index}`).textContent =
            item.title;
          document.querySelector(
            `#education-description-${index}`
          ).textContent = item.description;
        });

        // Sección de tecnologías
        document.querySelector("#technologies-title").textContent =
          translations.technologies.title;
        document.querySelector("#technologies-frontEnd").textContent =
          translations.technologies.frontEnd;
        document.querySelector("#technologies-backEnd").textContent =
          translations.technologies.backEnd;
        document.querySelector("#technologies-learning").textContent =
          translations.technologies.learning;
        document.querySelector("#technologies-tools").textContent =
          translations.technologies.tools;

        // Formulario de contacto
        let contactTitle = document.querySelector("#contact-title");
        contactTitle.firstChild.textContent = translations.contact.title + " ";
        document.querySelector("#contact-description").textContent =
          translations.contact.description;
        document
          .querySelector("#contact-form-name")
          .setAttribute("placeholder", translations.contact.form.name);
        document
          .querySelector("#contact-form-email")
          .setAttribute("placeholder", translations.contact.form.email);
        document
          .querySelector("#contact-form-subject")
          .setAttribute("placeholder", translations.contact.form.subject);
        document
          .querySelector("#contact-form-message")
          .setAttribute("placeholder", translations.contact.form.message);
        document.querySelector("#contact-form-button").textContent =
          translations.contact.form.button;

        // Pie de página
        let footerElement = document.querySelector("#footer-createdBy");
        let spanElements = footerElement.querySelectorAll("span");
        spanElements[0].textContent = translations.footer.site;

        let textNode = footerElement.childNodes[1];
        textNode.textContent = " " + translations.footer.createdBy + " ";
        document.querySelector("#small").textContent =
          translations.footer.partiallyCreated;
      });
    });
});
