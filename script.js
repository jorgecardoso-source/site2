/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const DATA_INICIO = new Date(
    2026,
    7,
    10,
    0,
    0,
    0
);


/* =========================================================
   PRELOADER
========================================================= */

const preloader = document.getElementById("preloader");
const loaderBar = document.getElementById("loader-bar");
const loaderPercent = document.getElementById("loader-percent");

let loadProgress = 0;

const loaderInterval = setInterval(() => {

    loadProgress += Math.floor(Math.random() * 8) + 3;

    if (loadProgress >= 100) {

        loadProgress = 100;

        clearInterval(loaderInterval);

        setTimeout(() => {
            preloader.classList.add("hide");
        }, 400);
    }

    loaderBar.style.width = `${loadProgress}%`;
    loaderPercent.textContent = `${loadProgress}%`;

}, 80);


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador() {

    const agora = new Date();

    let diferenca =
        agora.getTime() -
        DATA_INICIO.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }

    const totalSegundos =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(totalSegundos / 86400);

    const horas =
        Math.floor(
            (totalSegundos % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (totalSegundos % 3600) / 60
        );

    const segundos =
        totalSegundos % 60;


    document.getElementById("days").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();

setInterval(
    atualizarContador,
    1000
);


/* =========================================================
   MENU
========================================================= */

const menuButton =
    document.getElementById("menu-button");

const menu =
    document.getElementById("menu");

const menuLinks =
    document.querySelectorAll(".menu a");


function fecharMenu() {

    menu.classList.remove("open");

    menuButton.classList.remove("active");

    document.body.classList.remove("menu-open");
}


menuButton.addEventListener("click", () => {

    const aberto =
        menu.classList.toggle("open");

    menuButton.classList.toggle(
        "active",
        aberto
    );

    document.body.classList.toggle(
        "menu-open",
        aberto
    );

});


menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        fecharMenu
    );

});


/* =========================================================
   CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor");

const cursorFollow =
    document.querySelector(".cursor-follow");


if (window.innerWidth > 800) {

    let mouseX = 0;
    let mouseY = 0;

    let followX = 0;
    let followY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursor.style.left =
                `${mouseX}px`;

            cursor.style.top =
                `${mouseY}px`;
        }
    );


    function animateCursor() {

        followX +=
            (mouseX - followX) * .12;

        followY +=
            (mouseY - followY) * .12;

        cursorFollow.style.left =
            `${followX}px`;

        cursorFollow.style.top =
            `${followY}px`;

        requestAnimationFrame(
            animateCursor
        );
    }

    animateCursor();


    const hoverElements =
        document.querySelectorAll(
            "a, button"
        );


    hoverElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {
                cursorFollow.classList.add("hover");
            }
        );

        element.addEventListener(
            "mouseleave",
            () => {
                cursorFollow.classList.remove("hover");
            }
        );

    });

}


/* =========================================================
   REVEAL AO ROLAR
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PROGRESSO DA PÁGINA
========================================================= */

const progressFill =
    document.getElementById("progress-fill");

const currentSection =
    document.getElementById("current-section");


const sections =
    document.querySelectorAll(
        "main > section"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? scrollTop / documentHeight
                : 0;


        progressFill.style.height =
            `${percentage * 100}%`;


        let current = 1;

        sections.forEach(
            (section, index) => {

                const rect =
                    section.getBoundingClientRect();

                if (
                    rect.top <=
                    window.innerHeight * .45
                ) {
                    current = index + 1;
                }

            }
        );


        currentSection.textContent =
            String(current).padStart(2, "0");

    }
);


/* =========================================================
   MODAL DAS FOTOS
========================================================= */

const photoModal =
    document.getElementById("photo-modal");

const modalImage =
    document.getElementById("modal-image");

const modalNumber =
    document.getElementById("modal-number");

const modalTitle =
    document.getElementById("modal-title");

const modalClose =
    document.getElementById("modal-close");


const memories =
    document.querySelectorAll(".memory");


memories.forEach(memory => {

    memory.addEventListener(
        "click",
        () => {

            const image =
                memory.dataset.image;

            const number =
                memory.dataset.number;

            const title =
                memory.dataset.title;


            modalImage.src = image;

            modalImage.alt = title;

            modalNumber.textContent =
                number;

            modalTitle.textContent =
                title;


            photoModal.classList.add("open");

            document.body.classList.add(
                "modal-open"
            );

        }
    );

});


function fecharModal() {

    photoModal.classList.remove("open");

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    fecharModal
);


photoModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoModal
        ) {
            fecharModal();
        }

    }
);


/* =========================================================
   SEGREDO
========================================================= */

const secretButton =
    document.getElementById("secret-button");

const secretModal =
    document.getElementById("secret-modal");

const secretClose =
    document.getElementById("secret-close");


secretButton.addEventListener(
    "click",
    () => {

        secretModal.classList.add(
            "open"
        );

        document.body.classList.add(
            "modal-open"
        );

    }
);


secretClose.addEventListener(
    "click",
    () => {

        secretModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }
);


secretModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            secretModal
        ) {

            secretModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }

    }
);


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharModal();

            secretModal.classList.remove(
                "open"
            );

            fecharMenu();

        }

    }
);


/* =========================================================
   PARTÍCULAS
========================================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];

let particleWidth = window.innerWidth;
let particleHeight = window.innerHeight;


function resizeCanvas() {

    particleWidth =
        canvas.width =
        window.innerWidth;

    particleHeight =
        canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() *
            particleWidth;

        this.y =
            Math.random() *
            particleHeight;

        this.size =
            Math.random() * 1.5 + .3;

        this.speed =
            Math.random() * .25 + .05;

        this.opacity =
            Math.random() * .35;

    }


    update() {

        this.y -= this.speed;

        if (this.y < -10) {

            this.y =
                particleHeight + 10;

            this.x =
                Math.random() *
                particleWidth;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255,210,225,${this.opacity})`;

        ctx.fill();

    }

}


const particleAmount =
    window.innerWidth < 700
        ? 35
        : 70;


for (
    let i = 0;
    i < particleAmount;
    i++
) {

    particles.push(
        new Particle()
    );

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        particleWidth,
        particleHeight
    );


    particles.forEach(
        particle => {

            particle.update();
            particle.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();
