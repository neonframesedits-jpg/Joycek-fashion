/* =========================================================
   JOYCEK FASHION — interactions, collection, atelier bag
   ========================================================= */

/* ---------- The collection ----------
   To add a new piece: drop the photo into images/collection/
   and add one line below. Categories: "gowns", "sets", "dresses". */
const PRODUCTS = [
  { id: "magenta", name: "Magenta Rosette Corset Gown",  cat: "gowns",   img: "magenta-rosette-corset-gown.jpg",   meta: "Beaded lace corset · rosette shoulders · draped train", badge: "Signature" },
  { id: "blue",    name: "Powder Blue Sequin Lace Gown", cat: "gowns",   img: "powder-blue-sequin-lace-gown.jpg",  meta: "Sequin lace · sheer sleeves · twisted waist",          badge: "New" },
  { id: "coral",   name: "Coral Royale Sash Set",        cat: "sets",    img: "coral-royale-sash-set.jpg",         meta: "Tunic, draped sash & wide-leg trousers",               badge: "Traditional" },
  { id: "violet",  name: "Violet Ankara Peplum Set",     cat: "sets",    img: "violet-ankara-peplum-lace-set.jpg", meta: "Ankara print · black lace sleeves · sculpted peplum" },
  { id: "ivory",   name: "Ivory Tweed Capelet Dress",    cat: "dresses", img: "ivory-tweed-capelet-dress.jpg",     meta: "Tweed sheath · cropped capelet" },
];

const byId = (id) => PRODUCTS.find((p) => p.id === id);
const photo = (p, eager) =>
  `<img class="photo" src="images/collection/${p.img}" alt="${p.name}" ${eager ? "" : 'loading="lazy"'} decoding="async" />`;

/* ---------- Hero & slideshow photos ---------- */
document.querySelectorAll("[data-photo]").forEach((el) => {
  const p = byId(el.dataset.photo);
  if (p) el.innerHTML = photo(p, true);
});

/* ---------- Render collection ---------- */
const grid = document.getElementById("grid");
grid.innerHTML = PRODUCTS.map((p, i) => `
  <article class="card" data-cat="${p.cat}" data-id="${p.id}" style="animation-delay:${(i % 4) * 80}ms">
    <div class="card__frame">
      ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
      ${photo(p)}
      <button class="btn btn--primary btn--block card__sew" data-add="${p.id}">Sew it</button>
    </div>
    <div class="card__body">
      <div>
        <h3 class="card__name">${p.name}</h3>
        <p class="card__meta">${p.meta}</p>
        <p class="card__in">✓ In your atelier bag</p>
      </div>
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

function pieces() {
  // Every second piece chosen is sewn as our gift.
  return bag.map((id, idx) => ({ ...byId(id), idx, gift: idx % 2 === 1 }));
}

function save() { try { localStorage.setItem("joycek-bag", JSON.stringify(bag)); } catch (e) {} }

function renderBag() {
  const items = pieces();
  const gifted = items.filter((i) => i.gift).length;
  $("bagCount").textContent = bag.length;
  $("sumPieces").textContent = bag.length;
  $("sumSewn").textContent = bag.length - gifted;
  $("sumGift").textContent = gifted;

  const hint = $("drawerHint");
  if (bag.length === 0) hint.textContent = "Choose a piece — and we'll sew a second one for you, on the house.";
  else if (bag.length % 2 === 1) hint.textContent = "Now choose your second piece. We'll sew it as our gift.";
  else hint.textContent = `Your pair${bag.length > 2 ? "s are" : " is"} complete — the second stitch is on us.`;

  $("bagList").innerHTML = items.length
    ? items.map((it) => `
      <li class="line">
        <div class="line__thumb">${photo(it)}</div>
        <div>
          <div class="line__name">${it.name}</div>
          <span class="line__tag ${it.gift ? "line__tag--gift" : ""}">${it.gift ? "Our gift to you" : "Sewn for you"}</span>
        </div>
        <div class="line__right">
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
      : `Beautiful pair. <em>${p.name}</em> will be sewn as our gift.`);
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
