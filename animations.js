/* ===================================================
   BIKKUS STUDIO
   Scroll Animations
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeAnimations();

});

/* ==========================
   INTERSECTION OBSERVER
========================== */

function initializeAnimations() {

    const animatedElements = document.querySelectorAll(
        ".hero-text, .hero-image, .card, .cta, h2"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15,
        }

    );

    animatedElements.forEach((element) => {

        observer.observe(element);

    });

}

/* ==========================
   HERO IMAGE FLOATING
========================== */

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.classList.add("floating");

}

/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = ripple.style.height = `${size}px`;

        ripple.style.left = `${e.offsetX - size / 2}px`;

        ripple.style.top = `${e.offsetY - size / 2}px`;

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

console.log("✨ Animations Initialized");
