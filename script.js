/* =========================================================
   JOYCEK — interactions, garment illustrations, atelier bag
   ========================================================= */

// Change this one line to switch currency (e.g. "₦", "£", "€").
const CURRENCY = "$";
const money = (n) => CURRENCY + n.toLocaleString();

/* ---------- The collection ---------- */
const PRODUCTS = [
  { id: "wrap",     name: "Adaeze Wrap Dress",     cat: "dresses",   art: "wrap",     fabric: "#7a2e2a", accent: "#c9a46a", pattern: "weave",      bg: ["#f1e3d3", "#e2c9ad"], price: 120, meta: "Crêpe · tie waist",      badge: "Signature" },
  { id: "kaftan",   name: "Heritage Print Kaftan", cat: "dresses",   art: "kaftan",   fabric: "#c9a46a", accent: "#7a2e2a", pattern: "print",      bg: ["#efe6d6", "#d9c7a6"], price: 95,  meta: "Cotton print · unisex",  badge: "Unisex" },
  { id: "slip",     name: "Midnight Slip Dress",   cat: "dresses",   art: "dress",    fabric: "#1f2a2b", accent: "#c9a46a", pattern: "satin",      bg: ["#e7e2da", "#c9c1b4"], price: 110, meta: "Satin · bias cut" },
  { id: "shirt",    name: "Sunday Linen Shirt",    cat: "shirts",    art: "shirt",    fabric: "#f4efe6", accent: "#7a2e2a", pattern: "pinstripe",  bg: ["#dfe3da", "#b9c3ad"], price: 65,  meta: "Linen · relaxed fit",    badge: "Unisex" },
  { id: "camp",     name: "Garden Gingham Shirt",  cat: "shirts",    art: "shirt",    fabric: "#8a9a7b", accent: "#f4efe6", pattern: "gingham",    bg: ["#f2ece2", "#e1d4bf"], price: 60,  meta: "Cotton · boxy cut",      badge: "Unisex" },
  { id: "blazer",   name: "Atelier Blazer",        cat: "tailoring", art: "blazer",   fabric: "#1f2a2b", accent: "#c9a46a", pattern: "pinstripe",  bg: ["#ece4d8", "#d2c3ad"], price: 160, meta: "Wool blend · half-lined", badge: "Unisex" },
  { id: "trousers", name: "Pleated Wide Trousers", cat: "tailoring", art: "trousers", fabric: "#d8c3a0", accent: "#7a2e2a", pattern: "weave",      bg: ["#e6dccd", "#c7b597"], price: 85,  meta: "Twill · high rise",      badge: "Unisex" },
  { id: "jumpsuit", name: "Utility Jumpsuit",      cat: "tailoring", art: "jumpsuit", fabric: "#5f6e55", accent: "#e6cf9f", pattern: "plain",      bg: ["#efe7da", "#d8cab1"], price: 130, meta: "Canvas · belted",        badge: "Unisex" },
  { id: "coat",     name: "Long Camel Coat",       cat: "outerwear", art: "coat",     fabric: "#a87b4f", accent: "#f4efe6", pattern: "herringbone", bg: ["#e9e1d4", "#cbbca4"], price: 210, meta: "Wool · belted",           badge: "Unisex" },
  { id: "evening",  name: "Oxblood Evening Coat",  cat: "outerwear", art: "coat",     fabric: "#5a1f1c", accent: "#c9a46a", pattern: "satin",      bg: ["#efe2d8", "#d3b8a6"], price: 240, meta: "Velvet · statement",     badge: "New" },
  { id: "aline",    name: "Golden Hour Dress",     cat: "dresses",   art: "wrap",     fabric: "#c98a3a", accent: "#f4efe6", pattern: "dots",       bg: ["#f3e8d9", "#e3cfb0"], price: 115, meta: "Cotton voile · midi" },
  { id: "suit",     name: "Ink Tailored Trousers", cat: "tailoring", art: "trousers", fabric: "#22292b", accent: "#c9a46a", pattern: "pinstripe",  bg: ["#e5e1da", "#bfb8ac"], price: 90,  meta: "Wool blend · straight",  badge: "Unisex" },
];

/* ---------- Garment silhouettes (300 × 400 space) ---------- */
const SHAPES = {
  dress: {
    body: "M128 62 L122 62 L112 150 Q110 165 114 175 L62 372 Q150 388 238 372 L186 175 Q190 165 188 150 L178 62 L172 62 Q150 104 128 62 Z",
    seams: ["M114 172 Q150 182 186 172", "M68 358 Q150 374 232 358", "M150 182 L150 372"],
    dots: [],
  },
  wrap: {
    body: "M124 58 Q150 70 176 58 L210 74 L232 122 L206 132 L192 106 L190 170 Q188 182 192 190 L246 372 Q150 390 54 372 L108 190 Q112 182 110 170 L108 106 L94 132 L68 122 L90 74 Z",
    seams: ["M124 58 L172 182", "M176 58 L140 160", "M110 180 Q150 190 190 180", "M190 184 Q216 204 204 240", "M190 184 Q224 194 230 226", "M60 358 Q150 376 240 358"],
    dots: [],
  },
  kaftan: {
    body: "M128 56 Q150 72 172 56 L250 82 L274 192 L222 200 L214 150 L224 374 Q150 388 76 374 L86 150 L78 200 L26 192 L50 82 Z",
    seams: ["M128 56 L150 124 L172 56", "M136 80 L150 124 L164 80", "M32 178 L272 178", "M82 360 Q150 374 218 360", "M150 124 L150 220"],
    dots: [],
  },
  shirt: {
    body: "M126 56 L150 70 L174 56 L214 70 L248 210 L268 334 L238 340 L212 216 L206 198 L208 356 Q150 364 92 356 L94 198 L88 216 L62 340 L32 334 L52 210 L86 70 Z",
    seams: ["M126 56 L140 90 L150 70 L160 90 L174 56", "M150 70 L150 360", "M36 318 L264 318", "M100 130 L130 130 L130 160 L100 160 Z"],
    dots: [[150, 112], [150, 152], [150, 192], [150, 232], [150, 272], [150, 312]],
  },
  blazer: {
    body: "M122 54 L150 64 L178 54 L222 72 L250 214 L258 330 L230 334 L214 212 L210 190 L214 352 L150 364 L86 352 L90 190 L86 212 L70 334 L42 330 L50 214 L78 72 Z",
    seams: ["M122 54 L132 112 L116 122 L150 212", "M178 54 L168 112 L184 122 L150 212", "M150 212 L150 362", "M100 276 L136 280", "M164 280 L200 276", "M164 140 L192 138"],
    dots: [[150, 244], [150, 284]],
  },
  trousers: {
    body: "M96 60 L204 60 L212 120 L234 374 L170 374 L152 150 L148 150 L130 374 L66 374 L88 120 Z",
    seams: ["M96 80 L204 80", "M120 100 L100 370", "M180 100 L200 370", "M150 80 Q158 120 150 146", "M100 82 Q112 110 128 104"],
    dots: [[150, 70]],
  },
  jumpsuit: {
    body: "M124 56 Q150 74 176 56 L214 70 L238 152 L212 160 L198 122 L196 190 L218 374 L162 374 L152 214 L148 214 L138 374 L82 374 L104 190 L102 122 L88 160 L62 152 L86 70 Z",
    seams: ["M104 190 Q150 200 196 190", "M150 72 L150 212", "M112 110 L136 110 L136 134 L112 134 Z", "M164 110 L188 110 L188 134 L164 134 Z", "M196 194 Q214 220 204 250"],
    dots: [],
  },
  coat: {
    body: "M120 50 L150 62 L180 50 L226 70 L252 220 L262 340 L232 344 L218 222 L214 200 L230 382 L150 390 L70 382 L86 200 L82 222 L68 344 L38 340 L48 220 L74 70 Z",
    seams: ["M120 50 L128 120 L108 132 L150 214", "M180 50 L172 120 L192 132 L150 214", "M150 214 L150 388", "M84 214 Q150 224 216 214", "M216 218 Q236 250 222 280", "M44 324 L256 324"],
    dots: [[166, 250], [166, 290]],
  },
};

/* ---------- Fabric patterns ---------- */
function patternDef(id, kind, fabric, accent) {
  const t = (o) => `rgba(255,255,255,${o})`;
  const d = (o) => `rgba(0,0,0,${o})`;
  switch (kind) {
    case "weave":
      return `<pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="${fabric}"/><path d="M0 0h3v3H0zM3 3h3v3H3z" fill="${d(.08)}"/><path d="M0 1.5h6M1.5 0v6" stroke="${t(.06)}" stroke-width=".6"/></pattern>`;
    case "pinstripe":
      return `<pattern id="${id}" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" fill="${fabric}"/><path d="M4.5 0v9" stroke="${accent}" stroke-opacity=".45" stroke-width=".7"/></pattern>`;
    case "gingham":
      return `<pattern id="${id}" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="${fabric}"/><rect width="10" height="20" fill="${accent}" fill-opacity=".35"/><rect width="20" height="10" fill="${accent}" fill-opacity=".35"/></pattern>`;
    case "dots":
      return `<pattern id="${id}" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="${fabric}"/><circle cx="4" cy="4" r="1.6" fill="${accent}" fill-opacity=".85"/><circle cx="12" cy="12" r="1.6" fill="${accent}" fill-opacity=".85"/></pattern>`;
    case "herringbone":
      return `<pattern id="${id}" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="${fabric}"/><path d="M0 10 5 0M5 10 10 0" stroke="${d(.14)}" stroke-width="1.2"/><path d="M5 0 10 10" stroke="${t(.07)}" stroke-width="1"/></pattern>`;
    case "print":
      return `<pattern id="${id}" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="${fabric}"/><circle cx="20" cy="20" r="11" fill="none" stroke="${accent}" stroke-width="3"/><circle cx="20" cy="20" r="4" fill="${accent}"/><path d="M0 0l6 6-6 6M40 28l-6 6 6 6M0 40l6-6M40 0l-6 6" fill="none" stroke="#1f2a2b" stroke-width="2"/><circle cx="0" cy="20" r="2" fill="#1f2a2b"/><circle cx="40" cy="20" r="2" fill="#1f2a2b"/></pattern>`;
    case "satin":
      return `<pattern id="${id}" width="300" height="400" patternUnits="userSpaceOnUse"><rect width="300" height="400" fill="${fabric}"/><path d="M120 0 C 100 140, 160 260, 130 400" stroke="${t(.12)}" stroke-width="18" fill="none"/><path d="M190 0 C 210 160, 170 260, 200 400" stroke="${t(.08)}" stroke-width="10" fill="none"/></pattern>`;
    default:
      return `<pattern id="${id}" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="${fabric}"/><path d="M0 0h1v1H0z" fill="${d(.06)}"/></pattern>`;
  }
}

let uid = 0;
function garmentArt({ art, fabric, accent, pattern, bg }) {
  const s = SHAPES[art] || SHAPES.dress;
  const n = ++uid;
  const bgA = (bg && bg[0]) || "#f1e8da";
  const bgB = (bg && bg[1]) || "#dccab0";
  const stitchColor = accent;
  return `
  <div class="art">
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="bg${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bgA}"/><stop offset="1" stop-color="${bgB}"/></linearGradient>
        <radialGradient id="halo${n}" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        ${patternDef("p" + n, pattern, fabric, accent)}
        <linearGradient id="sh${n}" x1="0" x2="1">
          <stop offset="0" stop-color="#000" stop-opacity=".32"/>
          <stop offset=".38" stop-color="#fff" stop-opacity=".12"/>
          <stop offset=".55" stop-color="#000" stop-opacity=".02"/>
          <stop offset=".72" stop-color="#fff" stop-opacity=".06"/>
          <stop offset="1" stop-color="#000" stop-opacity=".36"/>
        </linearGradient>
        <linearGradient id="vs${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".12"/><stop offset=".25" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
        <clipPath id="c${n}"><path d="${s.body}"/></clipPath>
        <filter id="f${n}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#2a1a10" flood-opacity=".32"/></filter>
      </defs>
      <rect width="300" height="400" fill="url(#bg${n})"/>
      <circle cx="150" cy="170" r="150" fill="url(#halo${n})"/>
      <path d="M0 400 L0 330 Q150 300 300 330 L300 400 Z" fill="#000" fill-opacity=".05"/>
      <!-- hanger -->
      <g fill="none" stroke="#3a2c22" stroke-width="3" stroke-linecap="round" opacity=".85">
        <path d="M150 34 q0 -12 10 -12 q10 0 9 10 q-1 7 -19 14"/>
        <path d="M150 34 L100 58 M150 34 L200 58"/>
      </g>
      <g filter="url(#f${n})">
        <path d="${s.body}" fill="url(#p${n})"/>
      </g>
      <g clip-path="url(#c${n})">
        <rect width="300" height="400" fill="url(#sh${n})"/>
        <rect width="300" height="400" fill="url(#vs${n})"/>
      </g>
      <g fill="none" stroke="${stitchColor}" stroke-width="1.3" stroke-dasharray="4 3.5" stroke-linecap="round" opacity=".9" clip-path="url(#c${n})">
        ${s.seams.map((d) => `<path d="${d}"/>`).join("")}
      </g>
      ${s.dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${stitchColor}" stroke="#000" stroke-opacity=".2"/>`).join("")}
    </svg>
  </div>`;
}

/* ---------- Render hero art ---------- */
document.querySelectorAll("[data-art]").forEach((el) => {
  el.innerHTML = garmentArt({
    art: el.dataset.art,
    fabric: el.dataset.fabric,
    accent: el.dataset.accent,
    pattern: el.dataset.pattern,
    bg: el.dataset.bg ? el.dataset.bg.split(",") : el.dataset.art === "wrap" ? ["#efdcc8", "#d6b48f"] : ["#e2ddd2", "#b9ae9b"],
  });
});

/* ---------- Render collection ---------- */
const grid = document.getElementById("grid");
grid.innerHTML = PRODUCTS.map((p, i) => `
  <article class="card" data-cat="${p.cat}" data-id="${p.id}" style="animation-delay:${(i % 4) * 80}ms">
    <div class="card__frame">
      ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
      ${garmentArt(p)}
      <button class="btn btn--primary btn--block card__sew" data-add="${p.id}">Sew it</button>
    </div>
    <div class="card__body">
      <div>
        <h3 class="card__name">${p.name}</h3>
        <p class="card__meta">${p.meta}</p>
        <p class="card__in">✓ In your atelier bag</p>
      </div>
      <span class="card__price">${money(p.price)}</span>
    </div>
  </article>`).join("");

/* ---------- Filters ---------- */
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    const f = chip.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) => {
      const show = f === "all" || card.dataset.cat === f;
      card.classList.toggle("is-hidden", !show);
      if (show) { card.style.animation = "none"; card.offsetHeight; card.style.animation = ""; }
    });
  });
});

/* ---------- Atelier bag (The Second Stitch logic) ---------- */
let bag = [];
try { bag = JSON.parse(localStorage.getItem("joycek-bag") || "[]"); } catch (e) { bag = []; }
bag = bag.filter((id) => PRODUCTS.some((p) => p.id === id));

const $ = (id) => document.getElementById(id);
const drawer = $("drawer"), scrim = $("scrim");

function priced() {
  // Pair pieces from most to least valuable; the lesser piece in every pair is our gift.
  const items = bag.map((id, idx) => ({ ...PRODUCTS.find((p) => p.id === id), idx }));
  const sorted = [...items].sort((a, b) => b.price - a.price);
  const gifted = new Set(sorted.filter((_, i) => i % 2 === 1).map((x) => x.idx));
  return items.map((it) => ({ ...it, gift: gifted.has(it.idx) }));
}

function save() { try { localStorage.setItem("joycek-bag", JSON.stringify(bag)); } catch (e) {} }

function renderBag() {
  const items = priced();
  const value = items.reduce((s, i) => s + i.price, 0);
  const gift = items.filter((i) => i.gift).reduce((s, i) => s + i.price, 0);
  $("bagCount").textContent = bag.length;
  $("sumPieces").textContent = bag.length;
  $("sumValue").textContent = money(value);
  $("sumGift").textContent = gift ? "− " + money(gift) : money(0);
  $("sumTotal").textContent = money(value - gift);

  const hint = $("drawerHint");
  if (bag.length === 0) hint.textContent = "Choose a piece — and we'll sew a second one for you, on the house.";
  else if (bag.length % 2 === 1) hint.textContent = "Now choose your second piece. We'll sew it as our gift.";
  else hint.textContent = `Your pair${bag.length > 2 ? "s are" : " is"} complete — the second stitch is on us.`;

  $("bagList").innerHTML = items.length
    ? items.map((it) => `
      <li class="line">
        <div class="line__thumb">${garmentArt(it)}</div>
        <div>
          <div class="line__name">${it.name}</div>
          <span class="line__tag ${it.gift ? "line__tag--gift" : ""}">${it.gift ? "Our gift to you" : "Sewn for you"}</span>
        </div>
        <div class="line__right">
          <div class="line__price">${it.gift ? `<s>${money(it.price)}</s> <b>Gifted</b>` : money(it.price)}</div>
          <button class="line__remove" data-remove="${it.idx}">Remove</button>
        </div>
      </li>`).join("")
    : `<li class="drawer__empty">Your bag is waiting for its first piece.</li>`;

  const inBag = new Set(bag);
  grid.querySelectorAll(".card").forEach((c) => c.classList.toggle("is-in", inBag.has(c.dataset.id)));
}

function openBag() { drawer.classList.add("is-open"); scrim.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false"); }
function closeBag() { drawer.classList.remove("is-open"); scrim.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); }

let toastTimer;
function toast(html) {
  const t = $("toast");
  t.innerHTML = html;
  t.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-on"), 3200);
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const p = PRODUCTS.find((x) => x.id === add.dataset.add);
    bag.push(p.id); save(); renderBag();
    const btn = $("bagBtn");
    btn.classList.remove("bump"); btn.offsetWidth; btn.classList.add("bump");
    toast(bag.length % 2 === 1
      ? `<em>${p.name}</em> is on our table. Choose a second piece — it's on us.`
      : `Beautiful pair. <em>${priced().filter((i) => i.gift).pop().name}</em> will be sewn as our gift.`);
    return;
  }
  const rm = e.target.closest("[data-remove]");
  if (rm) { bag.splice(Number(rm.dataset.remove), 1); save(); renderBag(); }
});

$("bagBtn").addEventListener("click", openBag);
$("drawerClose").addEventListener("click", closeBag);
scrim.addEventListener("click", closeBag);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBag(); });

$("checkout").addEventListener("click", () => {
  if (!bag.length) { toast("Choose a piece first — then its second is on us."); return; }
  if (bag.length % 2 === 1) { toast("Don't leave your gift behind — choose your <em>second piece</em>."); return; }
  toast("Thank you. Your pieces are headed to the <em>atelier table</em>.");
});

renderBag();

/* ---------- Nav state, reveals, newsletter ---------- */
const nav = $("nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 20), { passive: true });

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 90}ms`;
  io.observe(el);
});

$("ctaForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.hidden = true;
  $("ctaThanks").hidden = false;
});

$("year").textContent = new Date().getFullYear();

/* ---------- Slideshow ---------- */
(function slideshow() {
  const show = document.querySelector(".show");
  if (!show) return;
  const viewport = $("showViewport"), track = $("showTrack");
  const slides = [...track.children];
  const dotsWrap = $("showDots");
  const DURATION = 6000;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0, timer = null, paused = false;

  show.style.setProperty("--dur", DURATION + "ms");
  $("showAll").textContent = String(slides.length).padStart(2, "0");
  slides.forEach((s, i) => s.setAttribute("data-no", String(i + 1).padStart(2, "0")));
  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button class="show__dot" role="tab" aria-label="Slide ${i + 1}" data-go="${i}"></button>`).join("");
  const dots = [...dotsWrap.children];

  function go(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    slides.forEach((s, k) => {
      s.classList.toggle("is-active", k === index);
      s.setAttribute("aria-hidden", k === index ? "false" : "true");
      s.querySelectorAll("a, button").forEach((el) => (el.tabIndex = k === index ? 0 : -1));
    });
    dots.forEach((d, k) => {
      d.classList.remove("is-active");
      d.classList.toggle("is-done", k < index);
      d.setAttribute("aria-selected", k === index);
    });
    void dotsWrap.offsetWidth; // restart the progress animation
    if (!reduce) dots[index].classList.add("is-active"); else dots[index].classList.add("is-done");
    $("showNow").textContent = String(index + 1).padStart(2, "0");
    schedule();
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused && !reduce) timer = setTimeout(() => go(index + 1), DURATION);
  }
  function pause(p) {
    paused = p; show.classList.toggle("is-paused", p);
    if (p) clearTimeout(timer); else schedule();
  }

  $("showPrev").addEventListener("click", () => go(index - 1));
  $("showNext").addEventListener("click", () => go(index + 1));
  dots.forEach((d) => d.addEventListener("click", () => go(Number(d.dataset.go))));
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  });
  viewport.addEventListener("mouseenter", () => pause(true));
  viewport.addEventListener("mouseleave", () => pause(false));
  document.addEventListener("visibilitychange", () => pause(document.hidden));

  // swipe / drag
  let startX = null, dx = 0;
  viewport.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a, button")) return;
    startX = e.clientX; dx = 0; track.classList.add("is-dragging"); pause(true);
  });
  addEventListener("pointermove", (e) => {
    if (startX === null) return;
    dx = e.clientX - startX;
    track.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
  });
  addEventListener("pointerup", () => {
    if (startX === null) return;
    track.classList.remove("is-dragging");
    startX = null;
    const threshold = viewport.offsetWidth * 0.15;
    go(dx < -threshold ? index + 1 : dx > threshold ? index - 1 : index);
    if (!viewport.matches(":hover")) pause(false);
  });

  // slide buttons jump to a filtered collection
  show.querySelectorAll("[data-filter-go]").forEach((a) => a.addEventListener("click", () => {
    const chip = document.querySelector(`.chip[data-filter="${a.dataset.filterGo}"]`);
    if (chip) chip.click();
  }));

  go(0);
})();
