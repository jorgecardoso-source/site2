/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const START_DATE = new Date(
    2026,
    7,
    10,
    0,
    0,
    0
);

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


/* =========================================================
   PRELOADER
========================================================= */

const preloader =
    document.getElementById("preloader");

const loaderFill =
    document.getElementById("loader-fill");

const loaderPercent =
    document.getElementById("loader-percent");

let loaderValue = 0;

const loaderTimer = setInterval(() => {

    loaderValue +=
        Math.floor(Math.random() * 9) + 4;

    if (loaderValue >= 100) {

        loaderValue = 100;

        clearInterval(loaderTimer);

        setTimeout(() => {

            preloader.classList.add("done");

        }, 350);
    }

    loaderFill.style.width =
        `${loaderValue}%`;

    loaderPercent.textContent =
        String(loaderValue).padStart(2, "0");

}, 70);


/* =========================================================
   CONTADOR
========================================================= */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCounter() {

    const now = new Date();

    let difference =
        now.getTime() -
        START_DATE.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}

updateCounter();

setInterval(updateCounter, 1000);


/* =========================================================
   MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const fullscreenMenu =
    document.getElementById("fullscreenMenu");

const menuLinks =
    fullscreenMenu.querySelectorAll("a");


function closeMenu() {

    fullscreenMenu.classList.remove("open");

    menuToggle.classList.remove("open");

    document.body.classList.remove("locked");

}


menuToggle.addEventListener(
    "click",
    () => {

        const open =
            fullscreenMenu.classList.toggle("open");

        menuToggle.classList.toggle(
            "open",
            open
        );

        document.body.classList.toggle(
            "locked",
            open
        );

    }
);


menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMenu
    );

});


/* =========================================================
   ENTER BUTTON
========================================================= */

const enterButton =
    document.getElementById("enterButton");

enterButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("origin")
            .scrollIntoView({
                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"
            });

    }
);


/* =========================================================
   CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


if (
    window.innerWidth > 800 &&
    !prefersReducedMotion
) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left =
                `${mouseX}px`;

            cursorDot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * .12;

        ringY +=
            (mouseY - ringY) * .12;

        cursorRing.style.left =
            `${ringX}px`;

        cursorRing.style.top =
            `${ringY}px`;

        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();


    document
        .querySelectorAll("a, button")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {
                    cursorRing.classList.add("active");
                }
            );

            element.addEventListener(
                "mouseleave",
                () => {
                    cursorRing.classList.remove("active");
                }
            );

        });

}


/* =========================================================
   PAGE PROGRESS
========================================================= */

const pageFill =
    document.getElementById("pageFill");

const pageCurrent =
    document.getElementById("pageCurrent");


const scenes =
    document.querySelectorAll(
        "main > section"
    );


function updatePageProgress() {

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        maxScroll > 0
            ? window.scrollY / maxScroll
            : 0;

    pageFill.style.height =
        `${progress * 100}%`;


    let current = 1;


    scenes.forEach(
        (scene, index) => {

            const rect =
                scene.getBoundingClientRect();

            if (
                rect.top <
                window.innerHeight * .45
            ) {
                current = index + 1;
            }

        }
    );


    pageCurrent.textContent =
        String(
            Math.min(current, 5)
        ).padStart(2, "0");

}


window.addEventListener(
    "scroll",
    updatePageProgress,
    { passive: true }
);

updatePageProgress();


/* =========================================================
   TIMELINE
========================================================= */

const timelineCards =
    document.querySelectorAll(
        ".timeline-card"
    );

const timelineProgress =
    document.getElementById(
        "timelineProgress"
    );


function updateTimeline() {

    timelineCards.forEach(
        card => {

            const rect =
                card.getBoundingClientRect();

            const center =
                window.innerHeight * .5;

            const distance =
                Math.abs(
                    rect.top -
                    center
                );

            if (distance < 220) {

                timelineCards.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );

                card.classList.add(
                    "active"
                );

            }

        }
    );


    const timeline =
        document.querySelector(
            ".timeline-track"
        );

    if (!timeline) return;


    const rect =
        timeline.getBoundingClientRect();

    const visible =
        Math.max(
            0,
            Math.min(
                rect.height,
                window.innerHeight * .5 -
                rect.top
            )
        );

    const percentage =
        rect.height > 0
            ? visible / rect.height
            : 0;

    timelineProgress.style.height =
        `${percentage * 100}%`;

}


window.addEventListener(
    "scroll",
    updateTimeline,
    { passive: true }
);

updateTimeline();


/* =========================================================
   PHOTO VIEWER
========================================================= */

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const viewerTitle =
    document.getElementById("viewerTitle");

const viewerClose =
    document.getElementById("viewerClose");


const photoButtons =
    document.querySelectorAll(
        ".image-button"
    );


function openViewer(button) {

    const photo =
        button.dataset.photo;

    const title =
        button.dataset.title;


    viewerImage.src = photo;

    viewerImage.alt = title;

    viewerTitle.textContent =
        title;


    photoViewer.classList.add("open");

    document.body.classList.add("locked");

}


function closeViewer() {

    photoViewer.classList.remove("open");

    document.body.classList.remove(
        "locked"
    );

}


photoButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {
                openViewer(button);
            }
        );

    }
);


viewerClose.addEventListener(
    "click",
    closeViewer
);


photoViewer.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoViewer
        ) {
            closeViewer();
        }

    }
);


/* =========================================================
   SECRET
========================================================= */

const secret =
    document.getElementById("secret");

const secretTrigger =
    document.getElementById(
        "secretTrigger"
    );

const secretClose =
    document.getElementById(
        "secretClose"
    );


function openSecret() {

    secret.classList.add("open");

    document.body.classList.add(
        "locked"
    );

}


function closeSecret() {

    secret.classList.remove("open");

    document.body.classList.remove(
        "locked"
    );

}


secretTrigger.addEventListener(
    "click",
    openSecret
);

secretClose.addEventListener(
    "click",
    closeSecret
);


secret.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            secret
        ) {
            closeSecret();
        }

    }
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeMenu();
        closeViewer();
        closeSecret();

    }
);


/* =========================================================
   PARALLAX SUAVE
========================================================= */

if (
    !prefersReducedMotion &&
    window.innerWidth > 700
) {

    const heroTitle =
        document.querySelector(
            ".hero h1"
        );

    const heroOrbit =
        document.querySelector(
            ".orbit-one"
        );


    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) *
                2;

            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) *
                2;


            heroTitle.style.transform =
                `translate(${x * 6}px, ${y * 4}px)`;


            heroOrbit.style.transform =
                `translate(${x * 15}px, ${y * 15}px)`;

        }
    );

}


/* =========================================================
   STARFIELD
========================================================= */

const canvas =
    document.getElementById("stars");

const ctx =
    canvas.getContext("2d");


let width = window.innerWidth;
let height = window.innerHeight;

let stars = [];


function resizeCanvas() {

    width =
        canvas.width =
        window.innerWidth;

    height =
        canvas.height =
        window.innerHeight;

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


const starCount =
    window.innerWidth < 700
        ? 45
        : 90;


for (
    let i = 0;
    i < starCount;
    i++
) {

    stars.push({

        x:
            Math.random() *
            width,

        y:
            Math.random() *
            height,

        radius:
            Math.random() * 1.2 + .2,

        speed:
            Math.random() * .15 + .03,

        alpha:
            Math.random() * .6 + .1

    });

}


function drawStars() {

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    stars.forEach(star => {

        star.y -= star.speed;


        if (star.y < 0) {

            star.y = height;

            star.x =
                Math.random() *
                width;

        }


        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255,220,230,${star.alpha})`;

        ctx.fill();

    });


    requestAnimationFrame(
        drawStars
    );

}


if (!prefersReducedMotion) {
    drawStars();
}


/* =========================================================
   IMAGENS — FEEDBACK VISUAL
========================================================= */

document
    .querySelectorAll(".image-button img")
    .forEach(image => {

        image.addEventListener(
            "load",
            () => {
                image.parentElement.classList.add(
                    "loaded"
                );
            }
        );

    });
