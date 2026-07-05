/* ===================================================
   BIKKUS STUDIO
   Navigation JavaScript
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    highlightActiveLink();

});

/* ==========================
   ACTIVE NAVIGATION
========================== */

function highlightActiveLink() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}

/* ==========================
   STICKY HEADER EFFECT
========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ==========================
   FUTURE MOBILE MENU
========================== */
/*
This section is reserved for the mobile
hamburger menu that we'll build later.
Keeping it here makes the project easier
to maintain.
*/

console.log("✅ Navigation Ready");
