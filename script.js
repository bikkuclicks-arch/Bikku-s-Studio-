/* ===================================================
   BIKKUS STUDIO
   Main JavaScript
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initScrollHeader();
    initSmoothScroll();
    initScrollToTop();
    initCurrentYear();

});

/* ==========================
   HEADER SHADOW ON SCROLL
========================== */

function initScrollHeader() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.boxShadow = "0 12px 30px rgba(0,0,0,.10)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 5px 25px rgba(0,0,0,.05)";

        }

    });

}

/* ==========================
   SMOOTH SCROLL
========================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

function initScrollToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.id = "scrollTopBtn";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.right = "25px";
    button.style.bottom = "25px";
    button.style.width = "48px";
    button.style.height = "48px";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.background = "#6C63FF";
    button.style.color = "#fff";
    button.style.cursor = "pointer";
    button.style.fontSize = "20px";
    button.style.display = "none";
    button.style.zIndex = "999";

    window.addEventListener("scroll", () => {

        button.style.display = window.scrollY > 400 ? "block" : "none";

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================
   FOOTER YEAR
========================== */

function initCurrentYear() {

    const footer = document.querySelector("footer p");

    if (!footer) return;

    footer.innerHTML = `© ${new Date().getFullYear()} Bikkus Studio. All Rights Reserved.`;

}

console.log("🚀 Bikkus Studio Loaded Successfully");
