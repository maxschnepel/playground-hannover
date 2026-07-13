/* =====================================================================
   PLAYGROUND HANNOVER — main.js
   Datengetriebene Inhalte + Scroll-/Nav-Verhalten.
   Bewusst ohne Framework/Build-Step: einfach im Browser lauffähig,
   leicht erweiterbar, leicht an ein CMS/Buchungssystem anzubinden.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) UNSERE ANGEBOTE
   Jede künftige Sportwelt (Padel, Soccer, Kids Club, Coach Lab, ...)
   wird hier als zusätzliches Objekt ergänzt — HTML/CSS bleiben
   unverändert, die Karte wird automatisch mitgerendert.
   --------------------------------------------------------------------- */
// Bildpfade zeigen auf eigene Fotos unter public/images/. Neue Angebote
// einfach "image" mit einem lokalen Pfad ergänzen, z. B.
// 'public/images/hockey/sessions.jpg' — Rendering bleibt unverändert.
// Ordnerkonvention:
//   public/images/hockey/   — Hockey Academy (Sessions, Camps, On Tour, ...)
//   public/images/padel/    — Padel (Academy, Play, Events & Turniere)
//   public/images/coaches/  — Trainer-Portraits
//   public/images/events/   — Community-/Eventfotos, Story-Seite
//   public/images/logos/    — Marken-/Partnerlogos
const OFFERS = [
  {
    index: '01',
    title: 'Sessions',
    text: 'Regelmäßiges Training in kleinen Gruppen.',
    image: 'public/images/hockey/training-teamgeist.jpg',
    href: 'sessions.html'
  },
  {
    index: '02',
    title: 'Private Sessions',
    text: 'Training exakt auf dich zugeschnitten.',
    image: 'public/images/hockey/training-coaching.jpg',
    href: 'private-sessions.html'
  },
  {
    index: '03',
    title: 'Camps',
    text: 'Mehrtägige Trainingscamps in den Ferien.',
    image: 'public/images/hockey/training-passion.jpg',
    href: 'camps.html'
  },
  {
    index: '04',
    title: 'Masterclasses',
    text: 'Exklusive Trainingstage mit Gastcoaches & Gastspielern.',
    image: 'public/images/hockey/hero-slide-action.jpg',
    href: 'masterclasses.html'
  },
  {
    index: '05',
    title: 'On Tour',
    text: 'Wir kommen zu eurem Hockeyverein.',
    image: 'public/images/hockey/training-intensity.jpg',
    href: 'on-tour.html'
  }
  // Weitere Angebote folgen nach demselben Muster — einfach ein
  // zusätzliches Objekt ergänzen.
];

function renderOffers(){
  const grid = document.getElementById('offerGrid');
  if(!grid) return;
  grid.innerHTML = OFFERS.map(offer => `
    <article class="offer-card reveal">
      <div class="offer-card__media" style="background-image:url('${offer.image}'); --card-bg:url('${offer.image}')"><span class="offer-card__accent"></span></div>
      <span class="offer-card__index">${offer.index}</span>
      <h3 class="offer-card__title">${offer.title}</h3>
      <p class="offer-card__text">${offer.text}</p>
      <a class="offer-card__link" href="${offer.href}">Mehr erfahren →</a>
    </article>
  `).join('');
}

/* ---------------------------------------------------------------------
   1b) UNSERE SPORTWELTEN (Homepage)
   Playground Hannover ist die Dachmarke — jede Sportwelt bekommt eine
   eigene Landingpage. status:'active' verlinkt direkt, status:'soon'
   zeigt einen "Bald verfügbar"-Hinweis. Soccer/Kids Club sind hier
   bewusst noch nicht aktiv (siehe auskommentierte Beispiele unten) —
   einfach das Objekt einkommentieren, sobald es losgeht.
   --------------------------------------------------------------------- */
const SPORTWELTEN = [
  {
    title: 'Hockey Academy',
    text: 'Sessions, Camps, Events und On Tour: Training für jedes Level.',
    image: 'public/images/hockey/sportwelt-tile.jpg',
    href: 'hockey-academy.html',
    status: 'active'
  },
  {
    title: 'Padel',
    text: 'Academy, Play und Events: Padel für jedes Level.',
    image: 'public/images/padel/sportwelt-tile-home.jpg',
    href: 'padel.html',
    status: 'active'
  },
  {
    title: 'Soccer',
    text: 'Aus dem Soccerpark entstanden, bald eine eigene Sportwelt bei Playground.',
    image: 'public/images/soccer/sportwelt-tile.jpg',
    href: 'soccer.html',
    status: 'soon'
  },
  {
    title: 'Kids Club',
    text: 'Bewegung, Spiel und Gemeinschaft für die Jüngsten bei Playground.',
    image: 'public/images/kids-club/sportwelt-tile.jpg',
    href: 'kids-club.html',
    status: 'soon'
  }
  // Weitere Sportwelten folgen nach demselben Muster — einfach ein
  // zusätzliches Objekt ergänzen.
];

function renderSportwelten(){
  const grid = document.getElementById('sportweltenGrid');
  if(!grid) return;
  grid.innerHTML = SPORTWELTEN.map(sw => `
    <a class="sportwelt-card reveal ${sw.status === 'soon' ? 'sportwelt-card--soon' : ''}" href="${sw.href}">
      <div class="sportwelt-card__media" style="background-image:url('${sw.image}')"></div>
      <div class="sportwelt-card__overlay"></div>
      ${sw.status === 'soon' ? '<span class="sportwelt-card__badge">Bald verfügbar</span>' : ''}
      <div class="sportwelt-card__content">
        <h3 class="sportwelt-card__title">${sw.title}</h3>
        <p class="sportwelt-card__text">${sw.text}</p>
        <span class="sportwelt-card__link">${sw.status === 'soon' ? 'Mehr erfahren' : 'Entdecken'} →</span>
      </div>
    </a>
  `).join('');
}

/* ---------------------------------------------------------------------
   2) TERMINE & BUCHUNG (Homepage)
   Jede Sportwelt verlinkt direkt auf ihren eigenen Eversports-Kalender.
   Hockey Academy und Padel haben bereits ein aktives Eversports-Widget
   (dieselbe URL wie auf den jeweiligen Landingpages/Sessions-Seiten).
   Soccer und Kids Club sind aktuell "Bald verfügbar" (siehe SPORTWELTEN)
   und haben noch kein eigenes Buchungswidget — der Button verlinkt daher
   auf die jeweilige Sportwelt-Landingpage. Sobald ein Kalender existiert,
   hier einfach href austauschen.
   --------------------------------------------------------------------- */
const TERMINE_SPORTS = [
  {
    title: 'Hockey Academy',
    text: 'Trainings, Camps, Goalie Sessions und Special Events.',
    linkLabel: 'Hockey-Termine ansehen',
    href: 'https://www.eversports.de/org/widget/affc895d-b2df-4783-901c-7377d5bb61d4?venueId=545ed9ef-71c6-4e71-b5dd-2a5a6d34a44f',
    external: true
  },
  {
    title: 'Padel',
    text: 'After Work, King of the Court, Ladies Night, Turniere und Kurse.',
    linkLabel: 'Padel-Termine ansehen',
    href: 'https://www.eversports.de/org/widget/073f365b-d1d4-4c5b-bf31-d51050b4e7d3?venueId=545ed9ef-71c6-4e71-b5dd-2a5a6d34a44f',
    external: true
  },
  {
    title: 'Soccer',
    text: 'Turniere und Fußball-Events.',
    linkLabel: 'Soccer-Termine ansehen',
    href: 'soccer.html',
    external: false
  },
  {
    title: 'Kids Club',
    text: 'Wöchentliche Kurse und besondere Aktionen.',
    linkLabel: 'Kids Club-Termine ansehen',
    href: 'kids-club.html',
    external: false
  }
];

function renderTermine(){
  const grid = document.getElementById('termineGrid');
  if(!grid) return;
  grid.innerHTML = TERMINE_SPORTS.map(t => `
    <article class="offer-card reveal">
      <h3 class="offer-card__title">${t.title}</h3>
      <p class="offer-card__text">${t.text}</p>
      <a class="btn btn--outline" href="${t.href}"${t.external ? ' target="_blank" rel="noopener"' : ''}>${t.linkLabel}</a>
    </article>
  `).join('');
}

/* ---------------------------------------------------------------------
   2b) COMMUNITY — Reiter nach WhatsApp-Community / Sportwelt
   Jede Sportwelt bekommt ihre eigene WhatsApp-Community. Neue Sportwelt
   = neues Objekt im Array, kein Umbau von HTML/CSS nötig.
   --------------------------------------------------------------------- */
const COMMUNITIES = [
  {
    label: 'Kids Club',
    text: 'Updates für Eltern: Termine, Camps und Neuigkeiten aus dem Kids Club.',
    href: '#'
  },
  {
    label: 'Soccer',
    text: 'Neuigkeiten und Termine rund um unsere Soccer-Angebote.',
    href: '#'
  },
  {
    label: 'Padel',
    text: 'Alles rund um Academy, Play und Events der Padel-Community, direkt aufs Handy.',
    href: '#'
  },
  {
    label: 'Hockey Academy',
    text: 'Alles rund um Sessions, Camps, Events und On Tour der Hockey Academy, direkt aufs Handy.',
    href: '#'
  }
];

function renderCommunity(){
  const tabs = document.getElementById('communityTabs');
  const text = document.getElementById('communityText');
  const cta  = document.getElementById('communityCta');
  if(!tabs || !text || !cta) return;

  tabs.innerHTML = COMMUNITIES.map((c, i) => `
    <button type="button" class="community__tab${i === 0 ? ' is-active' : ''}" data-index="${i}">${c.label}</button>
  `).join('');

  cta.textContent = 'WhatsApp-Community beitreten';

  function setActive(index){
    const c = COMMUNITIES[index];
    text.textContent = c.text;
    cta.setAttribute('href', c.href);
    tabs.querySelectorAll('.community__tab').forEach(btn => {
      btn.classList.toggle('is-active', Number(btn.dataset.index) === index);
    });
  }

  tabs.querySelectorAll('.community__tab').forEach(btn => {
    btn.addEventListener('click', () => setActive(Number(btn.dataset.index)));
  });

  setActive(0);
}

/* ---------------------------------------------------------------------
   3) NAVIGATION — transparent über dem Hero, deckend beim Scrollen
   --------------------------------------------------------------------- */
function initNavScroll(){
  const nav = document.getElementById('nav');
  // Funktioniert seitenübergreifend: nutzt .hero (Startseite) oder
  // .story-hero (z. B. "Unsere Geschichte"), sonst einen festen Fallback-Wert.
  const hero = document.querySelector('.hero, .story-hero');
  if(!nav) return;

  const threshold = () => hero ? Math.max(hero.offsetHeight - 96, 80) : 80;

  function onScroll(){
    nav.classList.toggle('nav--solid', window.scrollY > threshold());
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll);
}

/* ---------------------------------------------------------------------
   4) MOBILE NAVIGATION
   --------------------------------------------------------------------- */
function initMobileNav(){
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  if(!nav || !burger) return;

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav__mobile a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------------------
   5) SCROLL-REVEAL — dezentes Einblenden von Inhalten (Intersection Observer)
   --------------------------------------------------------------------- */
function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;

  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------------------
   INIT
   --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderSportwelten();
  renderOffers();
  renderTermine();
  renderCommunity();
  initNavScroll();
  initMobileNav();
  initReveal(); // erneut aufrufen, nachdem Inhalte gerendert sind
});
