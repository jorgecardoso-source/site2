/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const START_DATE =
  new Date(2026, 7, 10, 0, 0, 0);

const $ =
  (selector) =>
    document.querySelector(selector);

const $$ =
  (selector) =>
    [...document.querySelectorAll(selector)];

const body =
  document.body;

body.classList.add("locked");


/* =========================================================
   ESTADO GLOBAL
========================================================= */

const state = {

  loaded: false,

  currentChapter: "01",

  audioEnabled: false,

  audioContext: null,

  masterGain: null,

  typed: false,

  viewerOpen: false,

  mouseX: 0,

  mouseY: 0,

  cursorX: 0,

  cursorY: 0,

  cursorRingX: 0,

  cursorRingY: 0

};


/* =========================================================
   PRELOADER
========================================================= */

let loaderProgress = 0;

const preloader =
  $("#preloader");

const loaderBar =
  $("#loaderBar");

const loaderPercent =
  $("#loaderPercent");


const loaderInterval =
  setInterval(() => {

    loaderProgress +=
      Math.floor(
        Math.random() * 8
      ) + 4;

    if (
      loaderProgress >= 100
    ) {

      loaderProgress = 100;

      clearInterval(
        loaderInterval
      );

      setTimeout(
        finishLoading,
        600
      );

    }

    loaderBar.style.width =
      `${loaderProgress}%`;

    loaderPercent.textContent =
      loaderProgress;

  }, 100);


function finishLoading() {

  preloader.classList.add(
    "done"
  );

  body.classList.remove(
    "locked"
  );

  state.loaded = true;

  revealVisible();

}


/* =========================================================
   STARFIELD
========================================================= */

const canvas =
  $("#stars");

const ctx =
  canvas.getContext("2d");

let stars = [];

function resizeStars() {

  const ratio =
    Math.min(
      window.devicePixelRatio || 1,
      2
    );

  canvas.width =
    innerWidth * ratio;

  canvas.height =
    innerHeight * ratio;

  canvas.style.width =
    `${innerWidth}px`;

  canvas.style.height =
    `${innerHeight}px`;

  ctx.setTransform(
    ratio,
    0,
    0,
    ratio,
    0,
    0
  );

  const amount =
    Math.min(
      220,
      Math.floor(
        innerWidth * .18
      )
    );

  stars =
    Array.from(
      { length: amount },
      () => ({

        x:
          Math.random() *
          innerWidth,

        y:
          Math.random() *
          innerHeight,

        radius:
          Math.random() * 1.15 + .1,

        alpha:
          Math.random() * .6 + .08,

        speed:
          Math.random() * .06 + .01,

        twinkle:
          Math.random() * .01 + .002,

        phase:
          Math.random() * Math.PI * 2

      })
    );

}


function renderStars(time = 0) {

  ctx.clearRect(
    0,
    0,
    innerWidth,
    innerHeight
  );

  stars.forEach(
    star => {

      star.y -=
        star.speed;

      if (
        star.y < -5
      ) {

        star.y =
          innerHeight + 5;

        star.x =
          Math.random() *
          innerWidth;

      }

      const twinkle =
        Math.sin(
          time * star.twinkle +
          star.phase
        ) * .2;

      const alpha =
        Math.max(
          .02,
          star.alpha + twinkle
        );

      ctx.beginPath();

      ctx.arc(
        star.x,
        star.y,
        star.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(255,235,242,${alpha})`;

      ctx.fill();

    }
  );

  requestAnimationFrame(
    renderStars
  );

}


addEventListener(
  "resize",
  resizeStars
);

resizeStars();

requestAnimationFrame(
  renderStars
);


/* =========================================================
   CURSOR
========================================================= */

const cursor =
  $("#cursor");

const cursorDot =
  cursor.querySelector(
    ".cursor-dot"
  );

const cursorRing =
  cursor.querySelector(
    ".cursor-ring"
  );


if (
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  addEventListener(
    "mousemove",
    event => {

      state.mouseX =
        event.clientX;

      state.mouseY =
        event.clientY;

    }
  );


  function animateCursor() {

    state.cursorX +=
      (
        state.mouseX -
        state.cursorX
      ) * .35;

    state.cursorY +=
      (
        state.mouseY -
        state.cursorY
      ) * .35;

    state.cursorRingX +=
      (
        state.mouseX -
        state.cursorRingX
      ) * .12;

    state.cursorRingY +=
      (
        state.mouseY -
        state.cursorRingY
      ) * .12;

    cursorDot.style.transform =
      `translate(
        ${state.cursorX}px,
        ${state.cursorY}px
      ) translate(-50%,-50%)`;

    cursorRing.style.transform =
      `translate(
        ${state.cursorRingX}px,
        ${state.cursorRingY}px
      ) translate(-50%,-50%)`;

    requestAnimationFrame(
      animateCursor
    );

  }

  animateCursor();


  $$(
    "button, .photo-card, .final-photo-card"
  ).forEach(
    element => {

      element.addEventListener(
        "mouseenter",
        () => {

          cursor.classList.add(
            "cursor-hover"
          );

        }
      );

      element.addEventListener(
        "mouseleave",
        () => {

          cursor.classList.remove(
            "cursor-hover"
          );

        }
      );

    }
  );

} else {

  cursor.style.display =
    "none";

}


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

if (
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  $$(".magnetic").forEach(
    button => {

      button.addEventListener(
        "mousemove",
        event => {

          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          button.style.transform =
            `translate(
              ${x * .12}px,
              ${y * .12}px
            )`;

        }
      );

      button.addEventListener(
        "mouseleave",
        () => {

          button.style.transform =
            "";

        }
      );

    }
  );

}


/* =========================================================
   REVEAL SYSTEM
========================================================= */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .12,
      rootMargin:
        "0px 0px -5% 0px"
    }
  );


$$(".reveal").forEach(
  element => {

    revealObserver.observe(
      element
    );

  }
);


function revealVisible() {

  $$(".reveal").forEach(
    element => {

      const rect =
        element.getBoundingClientRect();

      if (
        rect.top <
        innerHeight * .92
      ) {

        element.classList.add(
          "visible"
        );

      }

    }
  );

}


/* =========================================================
   HERO
========================================================= */

$("#startBtn")
  .addEventListener(
    "click",
    () => {

      $("#beginning")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =========================================================
   TYPEWRITER
========================================================= */

const typedMessage =
  "Eu não fazia ideia de que aquela simples mensagem me levaria até você.";

let typingStarted = false;

const typingObserver =
  new IntersectionObserver(
    entries => {

      if (
        !entries[0].isIntersecting ||
        typingStarted
      ) {

        return;

      }

      typingStarted = true;

      const target =
        $("#typedMessage");

      let index = 0;

      const interval =
        setInterval(
          () => {

            target.textContent =
              typedMessage.slice(
                0,
                index
              );

            index++;

            if (
              index >
              typedMessage.length
            ) {

              clearInterval(
                interval
              );

            }

          },
          38
        );

    },
    {
      threshold: .45
    }
  );


typingObserver.observe(
  $("#typedMessage")
);


/* =========================================================
   CONTADOR
========================================================= */

function updateCounter() {

  const now =
    Date.now();

  const start =
    START_DATE.getTime();

  const difference =
    Math.max(
      0,
      now - start
    );

  const totalSeconds =
    Math.floor(
      difference / 1000
    );

  const days =
    Math.floor(
      totalSeconds / 86400
    );

  const hours =
    Math.floor(
      (totalSeconds % 86400) /
      3600
    );

  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
    );

  const seconds =
    totalSeconds % 60;


  $("#daysCount")
    .textContent =
      String(days)
        .padStart(3, "0");


  $("#hoursCount")
    .textContent =
      String(hours)
        .padStart(2, "0");


  $("#minutesCount")
    .textContent =
      String(minutes)
        .padStart(2, "0");


  $("#secondsCount")
    .textContent =
      String(seconds)
        .padStart(2, "0");

}


updateCounter();

setInterval(
  updateCounter,
  1000
);


/* =========================================================
   PROGRESSO DA PÁGINA
========================================================= */

const progressBar =
  $("#progressBar");


function updateScrollProgress() {

  const documentHeight =
    document.documentElement
      .scrollHeight;

  const viewportHeight =
    innerHeight;

  const maxScroll =
    documentHeight -
    viewportHeight;

  if (
    maxScroll <= 0
  ) {

    return;

  }

  const percentage =
    (
      scrollY /
      maxScroll
    ) * 100;

  progressBar.style.height =
    `${Math.max(
      0,
      Math.min(
        100,
        percentage
      )
    )}%`;

}


addEventListener(
  "scroll",
  updateScrollProgress,
  {
    passive: true
  }
);

updateScrollProgress();


/* =========================================================
   CAPÍTULO ATIVO
========================================================= */

const scenes =
  $$(".scene[data-chapter]");

const navDots =
  $$(".nav-dot");

const chapterIndicator =
  $("#chapterIndicator");


const chapterObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            const chapter =
              entry.target.dataset.chapter;

            state.currentChapter =
              chapter;

            chapterIndicator.textContent =
              chapter;

            navDots.forEach(
              dot => {

                dot.classList.toggle(
                  "active",
                  dot.dataset.target ===
                  entry.target.id
                );

              }
            );

          }

        }
      );

    },
    {
      threshold: .4
    }
  );


scenes.forEach(
  scene => {

    chapterObserver.observe(
      scene
    );

  }
);


/* =========================================================
   NAVEGAÇÃO
========================================================= */

navDots.forEach(
  dot => {

    dot.addEventListener(
      "click",
      () => {

        const target =
          document.getElementById(
            dot.dataset.target
          );

        if (!target) {
          return;
        }

        target.scrollIntoView({
          behavior: "smooth"
        });

      }
    );

  }
);


/* =========================================================
   FOTO VIEWER
========================================================= */

const viewer =
  $("#photoViewer");

const viewerImage =
  $("#viewerImage");

const viewerCaption =
  $("#viewerCaption");

const viewerNumber =
  $("#viewerNumber");

const viewerClose =
  $("#viewerClose");


let openedPhotoIndex =
  0;


const photoCards =
  $$("[data-photo]");


photoCards.forEach(
  (card, index) => {

    card.addEventListener(
      "click",
      () => {

        openedPhotoIndex =
          index;

        openPhoto(
          card
        );

      }
    );

  }
);


function openPhoto(card) {

  viewerImage.src =
    card.dataset.photo;

  viewerImage.alt =
    card.querySelector(
      "img"
    )?.alt ||
    "Lembrança";

  viewerCaption.textContent =
    card.dataset.caption ||
    "";

  viewerNumber.textContent =
    String(
      openedPhotoIndex + 1
    ).padStart(
      2,
      "0"
    );

  viewer.classList.add(
    "open"
  );

  viewer.setAttribute(
    "aria-hidden",
    "false"
  );

  body.classList.add(
    "locked"
  );

  state.viewerOpen =
    true;

}


function closePhotoViewer() {

  viewer.classList.remove(
    "open"
  );

  viewer.setAttribute(
    "aria-hidden",
    "true"
  );

  body.classList.remove(
    "locked"
  );

  state.viewerOpen =
    false;

}


viewerClose.addEventListener(
  "click",
  closePhotoViewer
);


viewer.addEventListener(
  "click",
  event => {

    if (
      event.target === viewer ||
      event.target.classList.contains(
        "viewer-background"
      )
    ) {

      closePhotoViewer();

    }

  }
);


/* =========================================================
   TECLADO PARA FOTOS
========================================================= */

addEventListener(
  "keydown",
  event => {

    if (
      !state.viewerOpen
    ) {

      return;

    }

    if (
      event.key === "Escape"
    ) {

      closePhotoViewer();

    }

    if (
      event.key === "ArrowRight"
    ) {

      nextPhoto();

    }

    if (
      event.key === "ArrowLeft"
    ) {

      previousPhoto();

    }

  }
);


function nextPhoto() {

  openedPhotoIndex =
    (
      openedPhotoIndex + 1
    ) %
    photoCards.length;

  openPhoto(
    photoCards[
      openedPhotoIndex
    ]
  );

}


function previousPhoto() {

  openedPhotoIndex =
    (
      openedPhotoIndex -
      1 +
      photoCards.length
    ) %
    photoCards.length;

  openPhoto(
    photoCards[
      openedPhotoIndex
    ]
  );

}


/* =========================================================
   TOUCH SWIPE NAS FOTOS
========================================================= */

let touchStartX =
  0;

let touchEndX =
  0;


viewer.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.changedTouches[0]
        .screenX;

  },
  {
    passive: true
  }
);


viewer.addEventListener(
  "touchend",
  event => {

    touchEndX =
      event.changedTouches[0]
        .screenX;

    const difference =
      touchStartX -
      touchEndX;

    if (
      Math.abs(difference) <
      50
    ) {

      return;

    }

    if (
      difference > 0
    ) {

      nextPhoto();

    } else {

      previousPhoto();

    }

  }
);


/* =========================================================
   PARALLAX
========================================================= */

let parallaxTick =
  false;


addEventListener(
  "scroll",
  () => {

    if (
      parallaxTick
    ) {

      return;

    }

    parallaxTick =
      true;

    requestAnimationFrame(
      () => {

        const scroll =
          scrollY;

        const orbitOne =
          $(".orbit-one");

        const orbitTwo =
          $(".orbit-two");

        const orbitThree =
          $(".orbit-three");

        if (orbitOne) {

          orbitOne.style.marginTop =
            `${scroll * .015}px`;

        }

        if (orbitTwo) {

          orbitTwo.style.marginTop =
            `${scroll * .008}px`;

        }

        if (orbitThree) {

          orbitThree.style.marginTop =
            `${scroll * .004}px`;

        }

        parallaxTick =
          false;

      }
    );

  },
  {
    passive: true
  }
);


/* =========================================================
   AUDIO AMBIENTE
========================================================= */

function createAmbientAudio() {

  if (
    state.audioContext
  ) {

    return;

  }

  const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

  if (!AudioContext) {

    showToast(
      "Seu navegador não suporta o ambiente sonoro."
    );

    return;

  }

  const audio =
    new AudioContext();

  const master =
    audio.createGain();

  master.gain.value =
    0.035;

  master.connect(
    audio.destination
  );


  const frequencies =
    [
      130.81,
      164.81,
      196.00,
      261.63
    ];


  frequencies.forEach(
    (frequency, index) => {

      const oscillator =
        audio.createOscillator();

      const gain =
        audio.createGain();

      oscillator.type =
        "sine";

      oscillator.frequency.value =
        frequency;

      gain.gain.value =
        .0001;

      oscillator.connect(
        gain
      );

      gain.connect(
        master
      );

      oscillator.start();

      const now =
        audio.currentTime;

      gain.gain.exponentialRampToValueAtTime(
        .004,
        now + 3 + index
      );

    }
  );


  state.audioContext =
    audio;

  state.masterGain =
    master;

}


async function toggleAmbientAudio() {

  createAmbientAudio();

  if (
    !state.audioContext
  ) {

    return;

  }

  if (
    state.audioContext.state ===
    "suspended"
  ) {

    await state.audioContext.resume();

  }

  state.audioEnabled =
    !state.audioEnabled;


  if (
    state.audioEnabled
  ) {

    state.masterGain.gain.setTargetAtTime(
      .035,
      state.audioContext.currentTime,
      .5
    );

    $("#soundBtn")
      .classList.add(
        "active"
      );

    $(".sound-text")
      .textContent =
        "ambiente on";

  } else {

    state.masterGain.gain.setTargetAtTime(
      .0001,
      state.audioContext.currentTime,
      .5
    );

    $("#soundBtn")
      .classList.remove(
        "active"
      );

    $(".sound-text")
      .textContent =
        "ambiente";

  }

}


$("#soundBtn")
  .addEventListener(
    "click",
    toggleAmbientAudio
  );


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

  const toast =
    $("#toast");

  toast.querySelector(
    "span"
  ).textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimeout
  );

  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2800
    );

}


/* =========================================================
   RESTART
========================================================= */

$("#restartBtn")
  .addEventListener(
    "click",
    () => {

      closePhotoViewer();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


/* =========================================================
   FALLBACK DE IMAGENS
========================================================= */

$$("img").forEach(
  image => {

    image.addEventListener(
      "error",
      () => {

        image.style.background =
          "linear-gradient(135deg,#17151b,#30212a)";

        image.alt =
          "Coloque a foto correspondente na pasta fotos.";

      }
    );

  }
);


/* =========================================================
   RESIZE / REFRESH
========================================================= */

let resizeTimer;

addEventListener(
  "resize",
  () => {

    clearTimeout(
      resizeTimer
    );

    resizeTimer =
      setTimeout(
        () => {

          updateScrollProgress();

          revealVisible();

        },
        150
      );

  }
);


/* =========================================================
   VISIBILIDADE DA ABA
========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.hidden
    ) {

      return;

    }

    updateCounter();

    updateScrollProgress();

  }
);


/* =========================================================
   PREVENÇÃO DE ERRO NO SCROLL
========================================================= */

window.addEventListener(
  "error",
  event => {

    console.warn(
      "Erro controlado:",
      event.message
    );

  }
);


/* =========================================================
   INICIALIZAÇÃO FINAL
========================================================= */

updateCounter();

updateScrollProgress();

revealVisible();
