// ===== LISTA GAMEPASSÓW =====
const gamepasses = [
  {
    name: "UTD Donater",
    description: "Universal Tower Defense Premium Macro",
    details: "Added Ragna Stage, Added Multi mode, fixed ALL BUGS, early updates.",
    price: 120,
    id: 1645553803,
    special: false
  }
];

// ===== GENEROWANIE KART DONATE =====
const cardsContainer = document.getElementById("cards");
if (cardsContainer) {
  gamepasses.forEach((pass) => {
    const card = document.createElement("div");
    card.className = "card" + (pass.special ? " gold" : "");
    const left = document.createElement("div");
    left.className = "card left";
    const icon = document.createElement("div");
    icon.className = "icon-box";
    icon.textContent = "F";
    const textBox = document.createElement("div");
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = pass.name;
    const sub = document.createElement("div");
    sub.className = "card-sub";
    sub.textContent = pass.description;
    const details = document.createElement("div");
    details.className = "card-details";
    details.textContent = pass.details || "";
    textBox.appendChild(title);
    textBox.appendChild(sub);
    textBox.appendChild(details);
    left.appendChild(icon);
    left.appendChild(textBox);
    const price = document.createElement("a");
    price.className = "card-price";
    price.textContent = pass.price + " Robux";
    price.href = `https://www.roblox.com/game-pass/${pass.id}/view`;
    price.target = "_blank";
    price.rel = "noopener noreferrer";
    card.appendChild(left);
    card.appendChild(price);
    cardsContainer.appendChild(card);
  });
}

// ===== MODAL DONATE =====
const donateModal = document.getElementById("donate-modal");
const modalOverlay = donateModal ? donateModal.querySelector(".modal-overlay") : null;

function openDonateModal() {
  if (donateModal) donateModal.classList.remove("hidden");
}

function closeDonateModal() {
  if (donateModal) donateModal.classList.add("hidden");
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeDonateModal);
}

// ===== SLIDER WIDEO YOUTUBE =====
const promoVideos = [
  "https://www.youtube.com/embed/E2lpnrLXEPs",
  "https://www.youtube.com/embed/0ZwnZ-T3inY"
];
let promoIndex = 0;
const promoIframe = document.getElementById("promo-video");
const promoPrev = document.getElementById("video-prev");
const promoNext = document.getElementById("video-next");
const promoIndicator = document.getElementById("video-indicator");

function updatePromoVideo() {
  if (!promoIframe || !promoIndicator) return;
  promoIframe.src = promoVideos[promoIndex];
  promoIndicator.textContent = `${promoIndex + 1} / ${promoVideos.length}`;
}

if (promoIframe && promoPrev && promoNext && promoIndicator) {
  promoPrev.addEventListener("click", () => {
    promoIndex = (promoIndex - 1 + promoVideos.length) % promoVideos.length;
    updatePromoVideo();
  });
  promoNext.addEventListener("click", () => {
    promoIndex = (promoIndex + 1) % promoVideos.length;
    updatePromoVideo();
  });
  setInterval(() => {
    promoIndex = (promoIndex + 1) % promoVideos.length;
    updatePromoVideo();
  }, 5000);
  updatePromoVideo();
}

// ===== DOWNLOAD BUTTONS =====
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guardiansBtn')?.onclick = () => {
    const link = document.createElement('a');
    link.href = 'macros/UTD/UTD_1.41_Free.zip.rar';
    link.download = 'AnimeGuardians_FREE.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  document.getElementById('lastStandBtn')?.onclick = () => {
    const userId = prompt('Wpisz Roblox User ID dla Premium check:');
    if (userId) window.open('https://discord.gg/t2sGsddB', '_blank');
  };
  
  document.getElementById('royaleBtn')?.onclick = () => {
    window.open('https://discord.gg/t2sGsddB', '_blank');
  };
});

// ===== HAMBURGER MENU - POPRAWIONE =====
function toggleMenu() {
  const menu = document.getElementById('sidemenu');
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;
  if (menu && hamburger) {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
    body.classList.toggle('menu-open');
  }
}

// Zamknij menu: klik poza nim
document.addEventListener('click', (e) => {
  const menu = document.getElementById('sidemenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu?.classList.contains('active') && !menu.contains(e.target) && !hamburger?.contains(e.target)) {
    toggleMenu();
  }
});

// ESC zamyka menu i modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDonateModal();
    toggleMenu();
  }
});
