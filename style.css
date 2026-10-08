@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');


/* =========================================================
   VARIABLES
========================================================= */

:root {

  --bg: #07070a;
  --bg-soft: #0d0d12;
  --bg-card: #111116;

  --text: #f5f0ed;
  --text-soft: #c7c0c2;
  --muted: #817b82;
  --muted-dark: #514d53;

  --accent: #e9a0b5;
  --accent-light: #f4c1cf;
  --accent-dark: #9c6377;

  --line: rgba(255,255,255,.09);
  --line-strong: rgba(255,255,255,.16);

  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: Inter, Arial, sans-serif;
  --mono: "DM Mono", monospace;

}


/* =========================================================
   RESET
========================================================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {

  margin: 0;

  background: var(--bg);

  color: var(--text);

  font-family: var(--sans);

  overflow-x: hidden;

}

body.locked {
  overflow: hidden;
}

button {
  font: inherit;
  color: inherit;
}

button,
a {

  -webkit-tap-highlight-color: transparent;

}

::selection {

  background: var(--accent);

  color: #08080c;

}


/* =========================================================
   BASE
========================================================= */

.scene {

  min-height: 100vh;

  position: relative;

  overflow: hidden;

}

main {
  position: relative;
  z-index: 1;
}

img {
  max-width: 100%;
}

strong {
  font-weight: 500;
}


/* =========================================================
   CANVAS
========================================================= */

#stars {

  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  z-index: -10;

  opacity: .6;

  pointer-events: none;

}


/* =========================================================
   GRAIN
========================================================= */

.grain {

  position: fixed;

  inset: 0;

  z-index: 50;

  pointer-events: none;

  opacity: .065;

  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");

}


/* =========================================================
   VIGNETTE
========================================================= */

.vignette {

  position: fixed;

  inset: 0;

  z-index: 40;

  pointer-events: none;

  box-shadow:
    inset 0 0 180px 70px #030306;

}


/* =========================================================
   AMBIENT GLOW
========================================================= */

.ambient-glow {

  position: fixed;

  width: 50vw;

  height: 50vw;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(120px);

  opacity: .08;

  z-index: -8;

}

.glow-one {

  background: var(--accent);

  top: -20vw;

  right: -15vw;

}

.glow-two {

  background: #7e4f68;

  bottom: -25vw;

  left: -15vw;

}


/* =========================================================
   PRELOADER
========================================================= */

.preloader {

  position: fixed;

  inset: 0;

  z-index: 100;

  display: grid;

  place-items: center;

  background: #050508;

  transition:
    opacity 1s ease,
    visibility 1s ease;

}

.preloader.done {

  opacity: 0;

  visibility: hidden;

}

.loader-content {

  width: min(350px, 80vw);

  text-align: center;

}

.loader-symbol {

  font: 5rem var(--serif);

  color: var(--accent);

  animation: loaderPulse 1.6s infinite;

  margin-bottom: 25px;

}

.loader-title {

  font: .75rem var(--mono);

  letter-spacing: .35em;

  color: var(--text);

  margin-left: .35em;

}

.loader-subtitle {

  margin-top: 12px;

  font: .58rem var(--mono);

  letter-spacing: .12em;

  text-transform: uppercase;

  color: var(--muted);

}

.loader-progress {

  margin-top: 35px;

}

.loader-progress-track {

  height: 1px;

  width: 100%;

  background: rgba(255,255,255,.1);

}

.loader-progress-track span {

  display: block;

  height: 100%;

  width: 0;

  background: var(--accent);

  box-shadow: 0 0 12px var(--accent);

  transition: width .15s ease;

}

.loader-percent {

  margin-top: 12px;

  font: .55rem var(--mono);

  color: var(--muted);

}


/* =========================================================
   CURSOR
========================================================= */

.custom-cursor {

  position: fixed;

  inset: 0;

  z-index: 200;

  pointer-events: none;

}

.cursor-dot {

  position: fixed;

  width: 5px;

  height: 5px;

  border-radius: 50%;

  background: var(--accent);

  transform: translate(-50%, -50%);

}

.cursor-ring {

  position: fixed;

  width: 30px;

  height: 30px;

  border: 1px solid rgba(233,160,181,.6);

  border-radius: 50%;

  transform: translate(-50%, -50%);

  transition:
    width .25s,
    height .25s,
    background .25s;

}

.cursor-hover .cursor-ring {

  width: 60px;

  height: 60px;

  background: rgba(233,160,181,.06);

}


/* =========================================================
   TOPBAR
========================================================= */

.topbar {

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 45;

  display: grid;

  grid-template-columns: 1fr auto 1fr;

  align-items: center;

  padding: 25px 4vw;

  pointer-events: none;

  mix-blend-mode: difference;

}

.brand {

  font: 2rem var(--serif);

  font-weight: 600;

  pointer-events: auto;

}

.brand span {

  color: var(--accent);

}

.top-center {

  display: flex;

  gap: 10px;

  align-items: center;

  font: .55rem var(--mono);

  letter-spacing: .2em;

  color: #aaa;

}

.top-divider {

  color: var(--accent);

}

.sound-btn {

  justify-self: end;

  display: flex;

  align-items: center;

  gap: 8px;

  border: 0;

  background: none;

  cursor: pointer;

  pointer-events: auto;

  font: .55rem var(--mono);

  letter-spacing: .16em;

  text-transform: uppercase;

  opacity: .7;

}

.sound-icon {

  color: var(--accent);

  font-size: 1rem;

}

.sound-btn.active .sound-icon {

  animation: soundPulse .8s infinite;

}


/* =========================================================
   SIDE NAV
========================================================= */

.side-nav {

  position: fixed;

  right: 30px;

  top: 50%;

  transform: translateY(-50%);

  z-index: 44;

  display: flex;

  flex-direction: column;

  gap: 11px;

}

.nav-dot {

  width: 18px;

  height: 18px;

  border: 0;

  padding: 0;

  background: transparent;

  cursor: pointer;

  position: relative;

}

.nav-dot::before {

  content: "";

  position: absolute;

  top: 50%;
  left: 50%;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: var(--muted-dark);

  transform: translate(-50%, -50%);

  transition: .3s;

}

.nav-dot span {

  position: absolute;

  right: 24px;

  top: 50%;

  transform: translateY(-50%);

  font: .45rem var(--mono);

  color: var(--muted-dark);

  opacity: 0;

  transition: .3s;

}

.nav-dot:hover::before,
.nav-dot.active::before {

  width: 7px;

  height: 7px;

  background: var(--accent);

  box-shadow: 0 0 10px var(--accent);

}

.nav-dot:hover span,
.nav-dot.active span {

  opacity: 1;

  color: var(--accent);

}


/* =========================================================
   HERO
========================================================= */

.hero {

  min-height: 100svh;

  display: grid;

  place-items: center;

  text-align: center;

}

.hero-center {

  position: relative;

  z-index: 3;

  padding: 12vh 5vw;

}

.hero-date {

  font: .55rem var(--mono);

  letter-spacing: .35em;

  color: var(--muted);

  margin-bottom: 30px;

}

.hero-line {

  width: 1px;

  height: 70px;

  background:
    linear-gradient(
      var(--accent),
      transparent
    );

  margin: 0 auto 35px;

}

.eyebrow,
.section-label {

  font: .59rem var(--mono);

  letter-spacing: .28em;

  text-transform: uppercase;

  color: var(--accent);

}

.hero-title {

  margin: 20px 0 25px;

  font: 16vw/.75 var(--serif);

  font-weight: 400;

  letter-spacing: -.08em;

  text-shadow:
    0 0 100px rgba(233,160,181,.13);

}

.hero-title span {

  color: var(--accent);

}

.hero-subtitle {

  font: 1.05rem/1.8 var(--serif);

  color: var(--text-soft);

  max-width: 600px;

  margin: 0 auto 45px;

}

.enter-btn {

  display: inline-flex;

  align-items: center;

  gap: 35px;

  padding: 16px 20px 16px 24px;

  border: 1px solid var(--line-strong);

  background: rgba(255,255,255,.015);

  cursor: pointer;

  font: .57rem var(--mono);

  letter-spacing: .18em;

  text-transform: uppercase;

  transition: .4s;

}

.enter-btn b {

  color: var(--accent);

  font-size: 1rem;

  font-weight: 300;

}

.enter-btn:hover {

  border-color: rgba(233,160,181,.55);

  background: rgba(233,160,181,.06);

  transform: translateY(-4px);

}

.hero-orbit {

  position: absolute;

  left: 50%;
  top: 50%;

  border: 1px solid rgba(233,160,181,.08);

  border-radius: 50%;

  transform: translate(-50%,-50%);

  pointer-events: none;

}

.orbit-one {

  width: 48vw;
  height: 48vw;

  animation:
    orbit 25s linear infinite;

}

.orbit-two {

  width: 72vw;
  height: 72vw;

  border-color: rgba(255,255,255,.035);

  animation:
    orbitReverse 38s linear infinite;

}

.orbit-three {

  width: 95vw;
  height: 95vw;

  border-color: rgba(233,160,181,.025);

  animation:
    orbit 60s linear infinite;

}

.hero-bottom {

  position: absolute;

  bottom: 35px;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  gap: 15px;

  font: .5rem var(--mono);

  color: var(--muted);

  letter-spacing: .15em;

  text-transform: uppercase;

}

.hero-scroll-line {

  width: 80px;

  height: 1px;

  background: var(--line);

  position: relative;

}

.hero-scroll-line span {

  position: absolute;

  left: 0;
  top: 0;

  width: 20px;
  height: 1px;

  background: var(--accent);

  animation:
    scrollLine 2s infinite;

}


/* =========================================================
   GENERIC CHAPTER
========================================================= */

.chapter {

  min-height: 100vh;

  display: grid;

  place-items: center;

  padding: 15vh 9vw;

}

.chapter-number {

  position: absolute;

  top: 11vh;

  left: 5vw;

  font: .55rem var(--mono);

  color: var(--muted-dark);

  letter-spacing: .25em;

}

.chapter-inner {

  width: min(900px, 100%);

  position: relative;

}

.section-label {

  margin-bottom: 25px;

}

.section-title {

  font: clamp(3.2rem, 7vw, 7rem)/.88 var(--serif);

  font-weight: 400;

  letter-spacing: -.055em;

  margin: 0 0 40px;

}

.lead {

  font: clamp(1.25rem, 2.3vw, 2rem)/1.5 var(--serif);

  color: var(--text-soft);

  max-width: 780px;

}


/* =========================================================
   TYPING CARD
========================================================= */

.typing-card {

  margin: 80px 0 55px;

  padding: 28px 35px 34px;

  border:

    1px solid rgba(255,255,255,.08);

  border-left:

    1px solid var(--accent);

  background:

    linear-gradient(
      100deg,
      rgba(233,160,181,.045),
      rgba(255,255,255,.008)
    );

  box-shadow:

    0 30px 100px rgba(0,0,0,.18);

}

.typing-top {

  display: flex;

  justify-content: space-between;

  margin-bottom: 35px;

  font: .48rem var(--mono);

  letter-spacing: .2em;

  color: var(--muted);

}

.typing-content {

  position: relative;

  padding-left: 35px;

}

.quote-mark-small {

  position: absolute;

  left: 0;
  top: -8px;

  font: 3rem var(--serif);

  color: var(--accent);

}

#typedMessage {

  font: clamp(1.4rem, 2.5vw, 2.1rem)/1.45 var(--serif);

  color: #e0d9dc;

}

.typing-cursor {

  color: var(--accent);

  animation: blink .7s infinite;

}

.two-column-text {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  color: var(--muted);

  font: 1rem/1.9 var(--serif);

}

.floating-date {

  position: absolute;

  right: -2vw;

  bottom: -10vh;

  font: 9rem/.65 var(--serif);

  color: rgba(255,255,255,.025);

  text-align: right;

}

.floating-date span {

  font: .6rem var(--mono);

  letter-spacing: .3em;

  color: rgba(255,255,255,.08);

}


/* =========================================================
   DAYS
========================================================= */

.days-section {

  padding-left: 12vw;

  padding-right: 12vw;

}

.days-grid {

  width: min(1250px, 100%);

  display: grid;

  grid-template-columns: 1fr .8fr;

  gap: 10vw;

  align-items: center;

}

.days-copy {

  max-width: 680px;

}

.body-copy {

  font: 1.2rem/1.7 var(--serif);

  color: #bdb6b9;

}

.body-copy.muted {

  color: var(--muted);

}

.memory-pills {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin: 40px 0;

}

.memory-pills span {

  padding: 9px 14px;

  border: 1px solid var(--line);

  border-radius: 999px;

  font: .5rem var(--mono);

  letter-spacing: .1em;

  text-transform: uppercase;

  color: #918b90;

  transition: .3s;

}

.memory-pills span:hover {

  border-color: var(--accent-dark);

  color: var(--accent-light);

}

.highlight-box {

  position: relative;

  margin-top: 50px;

  padding-left: 25px;

}

.highlight-line {

  position: absolute;

  left: 0;

  top: 5px;
  bottom: 5px;

  width: 1px;

  background: var(--accent);

}

.highlight-box p {

  margin: 0 0 10px;

  font: 1.15rem/1.6 var(--serif);

  color: var(--muted);

}

.highlight-box strong {

  font: 1.45rem var(--serif);

  color: var(--text);

}

.conversation-space {

  position: relative;

  width: 100%;

  height: 600px;

}

.conversation-orbit {

  position: absolute;

  width: 350px;

  height: 350px;

  left: 50%;
  top: 50%;

  transform: translate(-50%,-50%);

  border: 1px solid rgba(233,160,181,.08);

  border-radius: 50%;

  animation: slowRotate 30s linear infinite;

}

.conversation-orbit::before {

  content: "";

  position: absolute;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: var(--accent);

  top: -5px;
  left: 50%;

  box-shadow:
    0 0 30px var(--accent);

}

.conversation-center {

  position: absolute;

  left: 50%;
  top: 50%;

  transform: translate(-50%,-50%);

  width: 130px;
  height: 130px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  border: 1px solid rgba(233,160,181,.2);

  background: rgba(7,7,10,.7);

  backdrop-filter: blur(10px);

}

.conversation-center span {

  font: .48rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .2em;

  color: var(--accent);

}

.floating-message {

  position: absolute;

  padding: 9px 13px;

  border: 1px solid var(--line);

  background: rgba(15,15,20,.8);

  font: .58rem var(--mono);

  color: #898389;

  animation: floatingMessage 5s ease-in-out infinite;

}

.message-one { top: 10%; left: 20%; }
.message-two { top: 28%; right: 5%; animation-delay: -1s; }
.message-three { top: 50%; left: 2%; animation-delay: -2s; }
.message-four { bottom: 25%; right: 12%; animation-delay: -3s; }
.message-five { bottom: 10%; left: 27%; animation-delay: -4s; }
.message-six { top: 7%; right: 35%; animation-delay: -1.5s; }


/* =========================================================
   PHOTOS
========================================================= */

.photo-chapter {

  min-height: 110vh;

  display: grid;

  place-items: center;

  padding: 15vh 7vw;

}

.photo-layout {

  width: min(1250px,100%);

  display: grid;

  grid-template-columns: 1.08fr .78fr;

  gap: 8vw;

  align-items: center;

}

.photo-layout.reverse {

  grid-template-columns: .78fr 1.08fr;

}

.photo-container {

  position: relative;

}

.photo-card {

  position: relative;

  display: block;

  width: 100%;

  padding: 0;

  border: 0;

  background: #111;

  cursor: pointer;

  overflow: hidden;

  text-align: left;

}

.photo-card img {

  display: block;

  width: 100%;

  height: min(75vh, 760px);

  object-fit: cover;

  filter:
    saturate(.82)
    contrast(1.03);

  transition:
    transform 1.3s cubic-bezier(.2,.8,.2,1),
    filter 1s;

}

.photo-card.tall img {

  height: min(80vh, 820px);

}

.photo-card:hover img {

  transform: scale(1.045);

  filter:
    saturate(1)
    contrast(1.05);

}

.photo-card::after {

  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(0,0,0,.05),
      transparent 50%,
      rgba(0,0,0,.75)
    );

  pointer-events: none;

}

.photo-number {

  position: absolute;

  top: 25px;
  left: 25px;

  z-index: 3;

  font: .5rem var(--mono);

  letter-spacing: .2em;

  color: rgba(255,255,255,.65);

}

.photo-open {

  position: absolute;

  left: 25px;
  bottom: 24px;

  z-index: 3;

  font: .5rem var(--mono);

  letter-spacing: .17em;

  text-transform: uppercase;

  color: white;

}

.photo-copy {

  max-width: 600px;

}

.memory-quote {

  margin: 50px 0 0;

  padding: 25px 0 25px 25px;

  border-left: 1px solid var(--accent);

  font: 1.5rem/1.45 var(--serif);

  color: #d8d0d3;

}

.memory-quote span {

  color: var(--accent);

  font-size: 3rem;

  line-height: 0;

}

.date-stamp {

  display: flex;

  flex-direction: column;

  gap: 5px;

  margin-top: 50px;

}

.date-stamp span {

  font: .45rem var(--mono);

  letter-spacing: .25em;

  color: var(--muted);

}

.date-stamp strong {

  font: 1rem var(--mono);

  letter-spacing: .15em;

  color: #b7afb3;

}


/* =========================================================
   TRUTH
========================================================= */

.truth-section {

  min-height: 120vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 15vh 7vw;

  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(233,160,181,.045),
      transparent 45%
    );

}

.truth-background {

  position: absolute;

  inset: 0;

  pointer-events: none;

}

.truth-background div {

  position: absolute;

  border-radius: 50%;

  border: 1px solid rgba(233,160,181,.025);

  left: 50%;
  top: 50%;

  transform: translate(-50%,-50%);

}

.truth-background div:nth-child(1) {

  width: 35vw;
  height: 35vw;

}

.truth-background div:nth-child(2) {

  width: 60vw;
  height: 60vw;

}

.truth-background div:nth-child(3) {

  width: 90vw;
  height: 90vw;

}

.truth-content {

  width: min(850px,100%);

  position: relative;

}

.giant-word {

  margin: 35px 0 80px;

  font: clamp(4rem, 11vw, 10rem)/.8 var(--serif);

  letter-spacing: -.08em;

  font-weight: 300;

}

.truth-lines {

  display: grid;

  gap: 3px;

  max-width: 600px;

  margin: 0 auto 80px;

  text-align: left;

}

.truth-line {

  display: grid;

  grid-template-columns: 40px 1fr;

  align-items: center;

  border-top: 1px solid var(--line);

  padding: 18px 0;

}

.truth-line span {

  font: .48rem var(--mono);

  color: var(--accent);

}

.truth-line p {

  margin: 0;

  font: 1.35rem var(--serif);

  color: #777177;

}

.truth-lead {

  font: clamp(1.5rem, 3vw, 2.5rem)/1.3 var(--serif);

  color: #aaa3a8;

}

.truth-final {

  margin-top: 70px;

}

.truth-final p {

  color: var(--muted);

  font: 1.1rem/1.7 var(--serif);

}

.truth-final strong {

  display: block;

  margin-top: 20px;

  font: 1.6rem/1.5 var(--serif);

  color: var(--text);

}


/* =========================================================
   TRAITS
========================================================= */

.traits-list {

  margin: 45px 0;

  border-top: 1px solid var(--line);

}

.traits-list div {

  display: flex;

  gap: 18px;

  align-items: center;

  padding: 13px 0;

  border-bottom: 1px solid var(--line);

  font: 1rem var(--serif);

  color: #aaa4a8;

}

.traits-list span {

  font: .45rem var(--mono);

  color: var(--accent);

}

.highlight-text {

  font: 1.6rem var(--serif);

  color: var(--text);

  margin: 45px 0 20px;

}


/* =========================================================
   COUNTER
========================================================= */

.counter-section {

  min-height: 110vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 15vh 7vw;

}

.counter-content {

  width: min(1100px,100%);

}

.counter-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

  margin: 80px 0 30px;

}

.counter-unit {

  padding: 25px;

  border-top: 1px solid var(--line);

  border-right: 1px solid var(--line);

}

.counter-unit:last-child {

  border-right: 0;

}

.counter-unit strong {

  display: block;

  font: clamp(3rem, 7vw, 7rem) var(--serif);

  font-weight: 400;

  color: var(--text);

  line-height: 1;

}

.counter-unit span {

  display: block;

  margin-top: 15px;

  font: .48rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .22em;

  color: var(--muted);

}

.counter-line {

  display: flex;

  align-items: center;

  gap: 20px;

  justify-content: center;

}

.counter-line span {

  width: 70px;

  height: 1px;

  background: var(--line);

}

.counter-line small {

  font: .45rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .2em;

  color: var(--muted-dark);

}

.counter-message {

  margin-top: 70px;

  font: clamp(1.4rem, 2.8vw, 2.4rem)/1.4 var(--serif);

  color: #a8a1a6;

}

.counter-message strong {

  color: var(--text);

}


/* =========================================================
   EVOLUTION
========================================================= */

.evolution-section {

  min-height: 120vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 15vh 7vw;

  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(233,160,181,.05),
      transparent 45%
    );

}

.evolution-content {

  width: min(900px,100%);

}

.evolution-intro {

  font: clamp(1.3rem, 2.5vw, 2rem)/1.5 var(--serif);

  color: #aaa4a8;

  max-width: 700px;

  margin: 0 auto;

}

.evolution-main {

  margin: 75px auto;

  max-width: 850px;

  position: relative;

}

.evolution-quote-mark {

  display: block;

  font: 7rem var(--serif);

  color: rgba(233,160,181,.3);

  height: 50px;

}

.evolution-main p {

  font: clamp(1.7rem, 3.5vw, 3.2rem)/1.3 var(--serif);

  color: #d2cace;

}

.evolution-words {

  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 8px;

}

.evolution-words span {

  border: 1px solid var(--line);

  border-radius: 999px;

  padding: 9px 15px;

  font: .5rem var(--mono);

  letter-spacing: .12em;

  text-transform: uppercase;

  color: #8e888e;

}

.evolution-final {

  margin-top: 70px;

  font: 1rem var(--serif);

  color: var(--muted);

}

.evolution-final strong {

  display: block;

  margin-top: 15px;

  font: 3rem var(--serif);

  color: var(--accent);

}


/* =========================================================
   FUTURO
========================================================= */

.future-section {

  min-height: 130vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 15vh 7vw;

}

.future-stars {

  position: absolute;

  inset: 0;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(233,160,181,.08),
      transparent 17%
    );

}

.future-content {

  width: min(900px,100%);

  position: relative;

}

.future-title {

  font: clamp(3rem, 7vw, 6.5rem)/.9 var(--serif);

  font-weight: 300;

  letter-spacing: -.06em;

  margin: 35px 0 80px;

}

.future-list {

  display: grid;

  gap: 8px;

}

.future-list p {

  margin: 0;

  font: 1.3rem var(--serif);

  color: #686269;

}

.future-list p:nth-child(2) {

  color: #716b72;

}

.future-list p:nth-child(3) {

  color: #7b757a;

}

.future-list p:nth-child(4) {

  color: #868087;

}

.future-list p:nth-child(5) {

  color: #918a91;

}

.future-list p:nth-child(6) {

  color: #a59ea4;

}

.future-final {

  margin-top: 100px;

}

.future-final span {

  display: block;

  font: 1.1rem var(--serif);

  color: var(--muted);

}

.future-final strong {

  display: block;

  margin-top: 20px;

  font: clamp(1.8rem, 3.5vw, 3rem) var(--serif);

  color: var(--text);

}


/* =========================================================
   QUOTE
========================================================= */

.quote-section {

  min-height: 130vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 15vh 7vw;

}

.quote-light {

  position: absolute;

  width: 50vw;

  height: 50vw;

  left: 50%;
  top: 50%;

  transform: translate(-50%,-50%);

  border-radius: 50%;

  background: rgba(233,160,181,.035);

  filter: blur(100px);

}

.quote-content {

  position: relative;

  width: min(1000px,100%);

}

.big-quote-mark {

  height: 70px;

  font: 9rem/.5 var(--serif);

  color: rgba(233,160,181,.35);

}

.long-quote {

  margin: 0;

  font: clamp(1.45rem, 3vw, 2.7rem)/1.35 var(--serif);

  color: #d5ced1;

}

.quote-signature {

  margin-top: 55px;

  font: .58rem var(--mono);

  letter-spacing: .3em;

  text-transform: uppercase;

  color: var(--accent);

}


/* =========================================================
   FOTO FINAL
========================================================= */

.final-photo-section {

  min-height: 110vh;

  display: grid;

  place-items: center;

  padding: 12vh 7vw;

}

.final-photo-wrapper {

  width: min(1000px,100%);

}

.final-photo-card {

  position: relative;

  display: block;

  width: 100%;

  padding: 0;

  border: 0;

  background: #111;

  cursor: pointer;

  overflow: hidden;

}

.final-photo-card img {

  width: 100%;

  height: min(80vh,800px);

  object-fit: cover;

  display: block;

  filter:
    saturate(.75)
    brightness(.8);

  transition:
    transform 1.5s ease,
    filter 1s ease;

}

.final-photo-card:hover img {

  transform: scale(1.035);

  filter:
    saturate(.95)
    brightness(.9);

}

.final-photo-dark {

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      transparent 25%,
      rgba(0,0,0,.85)
    );

}

.final-photo-caption {

  position: absolute;

  bottom: 45px;

  left: 50%;

  transform: translateX(-50%);

  width: 90%;

  text-align: center;

}

.final-photo-caption span {

  display: block;

  font: .55rem var(--mono);

  letter-spacing: .25em;

  color: #bdb6bb;

}

.final-photo-caption strong {

  display: block;

  margin-top: 12px;

  font: clamp(2rem, 5vw, 4.5rem) var(--serif);

  font-weight: 400;

}


/* =========================================================
   ENDING
========================================================= */

.ending {

  min-height: 140vh;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 18vh 7vw 12vh;

}

.ending-background {

  position: absolute;

  inset: 0;

  pointer-events: none;

}

.ending-orbit {

  position: absolute;

  left: 50%;
  top: 50%;

  border: 1px solid rgba(233,160,181,.04);

  border-radius: 50%;

  transform: translate(-50%,-50%);

}

.orbit-a {

  width: 45vw;
  height: 45vw;

  animation:
    orbit 35s linear infinite;

}

.orbit-b {

  width: 75vw;
  height: 75vw;

  animation:
    orbitReverse 50s linear infinite;

}

.ending-content {

  position: relative;

  width: min(950px,100%);

}

.ending-text {

  margin: 40px 0;

  font: clamp(1.4rem, 3vw, 2.5rem) var(--serif);

  color: #aaa3a8;

}

.ending-timeline {

  display: flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 18px;

  margin: 70px 0;

  font: .5rem var(--mono);

  letter-spacing: .17em;

  text-transform: uppercase;

  color: #716b72;

}

.ending-timeline i {

  font-style: normal;

  color: var(--accent);

}

.ending-title {

  margin: 55px 0;

  font: clamp(4.5rem, 11vw, 10rem)/.78 var(--serif);

  font-weight: 300;

  letter-spacing: -.08em;

}

.ending-description {

  font: 1.15rem var(--serif);

  color: var(--muted);

}

.final-promise {

  margin-top: 130px;

  font: .55rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .23em;

  color: var(--muted-dark);

}

.conseguimos {

  margin: 35px 0 120px;

  font: clamp(3.5rem, 9vw, 8rem) var(--serif);

  color: var(--accent);

  text-shadow:
    0 0 70px rgba(233,160,181,.12);

}

.signature-final span {

  display: block;

  font: 4.5rem var(--serif);

}

.signature-final small {

  display: block;

  margin-top: 8px;

  font: .5rem var(--mono);

  letter-spacing: .25em;

  color: var(--muted-dark);

}

.last-line {

  margin: 75px 0 30px;

  font: .52rem var(--mono);

  letter-spacing: .2em;

  text-transform: uppercase;

  color: #625c63;

}

.restart-btn {

  border: 0;

  background: none;

  cursor: pointer;

  font: .5rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .17em;

  color: #706a71;

  transition: .3s;

}

.restart-btn:hover {

  color: var(--accent);

}


/* =========================================================
   PROGRESS
========================================================= */

.progress-track {

  position: fixed;

  top: 0;
  right: 0;

  width: 2px;

  height: 100vh;

  background: rgba(255,255,255,.035);

  z-index: 46;

}

.progress-fill {

  width: 100%;

  height: 0;

  background: var(--accent);

  box-shadow:
    0 0 10px var(--accent);

}


/* =========================================================
   PHOTO VIEWER
========================================================= */

.photo-viewer {

  position: fixed;

  inset: 0;

  z-index: 90;

  display: grid;

  place-items: center;

  padding: 5vh 5vw;

  opacity: 0;

  visibility: hidden;

  transition:
    opacity .5s,
    visibility .5s;

}

.photo-viewer.open {

  opacity: 1;

  visibility: visible;

}

.viewer-background {

  position: absolute;

  inset: 0;

  background: rgba(3,3,6,.97);

  backdrop-filter: blur(15px);

}

.viewer-content {

  position: relative;

  z-index: 2;

  width: min(1100px,100%);

  display: grid;

  place-items: center;

}

.viewer-content img {

  max-width: 92vw;

  max-height: 80vh;

  object-fit: contain;

  box-shadow:
    0 40px 120px rgba(0,0,0,.8);

}

.viewer-counter {

  position: absolute;

  top: -35px;

  left: 0;

  display: flex;

  gap: 7px;

  font: .5rem var(--mono);

  letter-spacing: .15em;

  color: var(--muted);

}

.viewer-counter span:first-child {

  color: var(--accent);

}

#viewerCaption {

  margin: 25px auto 0;

  max-width: 700px;

  text-align: center;

  font: 1rem var(--serif);

  color: #aaa4a8;

}

.viewer-close {

  position: absolute;

  z-index: 5;

  top: 25px;

  right: 30px;

  border: 0;

  background: none;

  cursor: pointer;

  font: 3rem var(--serif);

  color: #aaa;

  transition: .3s;

}

.viewer-close:hover {

  color: var(--accent);

  transform: rotate(90deg);

}


/* =========================================================
   TOAST
========================================================= */

.toast {

  position: fixed;

  left: 50%;

  bottom: 35px;

  transform:
    translate(-50%, 20px);

  z-index: 80;

  opacity: 0;

  pointer-events: none;

  padding: 12px 18px;

  border: 1px solid var(--line);

  background: rgba(10,10,14,.9);

  backdrop-filter: blur(10px);

  font: .5rem var(--mono);

  text-transform: uppercase;

  letter-spacing: .15em;

  color: var(--accent);

  transition: .4s;

}

.toast.show {

  opacity: 1;

  transform:
    translate(-50%, 0);

}


/* =========================================================
   REVEAL
========================================================= */

.reveal {

  opacity: 0;

  transform: translateY(45px);

  transition:
    opacity 1.15s ease,
    transform 1.15s cubic-bezier(.2,.7,.2,1);

}

.reveal.visible {

  opacity: 1;

  transform: translateY(0);

}

.delay-one {

  transition-delay: .15s;

}

.delay-two {

  transition-delay: .3s;

}

.delay-three {

  transition-delay: .45s;

}

.delay-four {

  transition-delay: .6s;

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes loaderPulse {

  0%,100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.15);
    opacity: .55;
  }

}

@keyframes pulse {

  0%,100% {
    opacity: .4;
  }

  50% {
    opacity: 1;
  }

}

@keyframes blink {

  50% {
    opacity: 0;
  }

}

@keyframes orbit {

  from {
    transform:
      translate(-50%,-50%)
      rotate(0deg);
  }

  to {
    transform:
      translate(-50%,-50%)
      rotate(360deg);
  }

}

@keyframes orbitReverse {

  from {
    transform:
      translate(-50%,-50%)
      rotate(360deg);
  }

  to {
    transform:
      translate(-50%,-50%)
      rotate(0deg);
  }

}

@keyframes scrollLine {

  0% {
    left: 0;
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    left: 60px;
    opacity: 0;
  }

}

@keyframes floatingMessage {

  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }

}

@keyframes slowRotate {

  to {
    transform:
      translate(-50%,-50%)
      rotate(360deg);
  }

}

@keyframes soundPulse {

  0%,100% {
    transform: scaleY(.7);
  }

  50% {
    transform: scaleY(1.3);
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 900px) {

  .side-nav {
    display: none;
  }

  .topbar {
    grid-template-columns: 1fr auto;

    padding: 18px 5vw;
  }

  .top-center {
    display: none;
  }

  .hero-title {
    font-size: 25vw;
  }

  .hero-subtitle br {
    display: none;
  }

  .chapter,
  .photo-chapter,
  .counter-section,
  .evolution-section,
  .future-section,
  .quote-section,
  .final-photo-section,
  .ending {

    padding-left: 8vw;
    padding-right: 8vw;

  }

  .chapter-number {
    top: 7vh;
    left: 8vw;
  }

  .two-column-text {

    grid-template-columns: 1fr;

    gap: 10px;

  }

  .days-grid {

    grid-template-columns: 1fr;

    gap: 40px;

  }

  .conversation-space {

    height: 400px;

  }

  .conversation-orbit {

    width: 260px;
    height: 260px;

  }

  .photo-layout,
  .photo-layout.reverse {

    grid-template-columns: 1fr;

    gap: 55px;

  }

  .photo-card img,
  .photo-card.tall img {

    height: 65vh;

  }

  .counter-grid {

    grid-template-columns: repeat(2,1fr);

  }

  .counter-unit {

    border-bottom: 1px solid var(--line);

  }

  .counter-unit:nth-child(2) {

    border-right: 0;

  }

  .truth-lines {

    margin-bottom: 50px;

  }

  .truth-line p {

    font-size: 1.15rem;

  }

  .future-title {

    font-size: 15vw;

  }

  .long-quote {

    font-size: 1.55rem;

  }

  .final-photo-card img {

    height: 65vh;

  }

  .ending-title {

    font-size: 19vw;

  }

  .conseguimos {

    font-size: 16vw;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 550px) {

  .brand {

    font-size: 1.7rem;

  }

  .sound-text {

    display: none;

  }

  .hero-title {

    font-size: 29vw;

  }

  .hero-subtitle {

    font-size: .95rem;

  }

  .enter-btn {

    gap: 18px;

    padding: 14px 15px;

  }

  .typing-card {

    padding: 23px;

  }

  .typing-content {

    padding-left: 25px;

  }

  .memory-pills span {

    font-size: .43rem;

  }

  .counter-grid {

    gap: 0;

  }

  .counter-unit {

    padding: 20px 8px;

  }

  .counter-unit strong {

    font-size: 2.7rem;

  }

  .counter-unit span {

    font-size: .4rem;

  }

  .ending-timeline {

    gap: 10px;

    font-size: .43rem;

  }

  .signature-final span {

    font-size: 3.5rem;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {

    scroll-behavior: auto !important;

    animation-duration: .001ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: .001ms !important;

  }

}
