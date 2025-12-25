// ===== LISTA GAMEPASSÓW =====
const gamepasses = [
  {
    name: "UTD Donater",
    description: "Wsparcie podstawowe",
    price: 250,
    id: 48776587,
    special: false
  },
  {
    name: "AC Donator",
    description: "Dodatkowe wsparcie",
    price: 100,
    id: 2345678901,
    special: false
  },
  {
    name: "AV Donator",
    description: "Większe wsparcie",
    price: 200,
    id: 3456789012,
    special: false
  },
  {
    name: "Elite Donation",
    description: "Złota, elitarna darowizna",
    price: 500,
    id: 4567890123,
    special: true
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

    textBox.appendChild(title);
    textBox.appendChild(sub);

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
  if (donateModal) {
    donateModal.classList.remove("hidden");
  }
}

function closeDonateModal() {
  if (donateModal) {
    donateModal.classList.add("hidden");
  }
}

// kliknięcie w tło zamyka
if (modalOverlay) {
  modalOverlay.addEventListener("click", closeDonateModal);
}

// ESC też zamyka
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDonateModal();
});

// ===== SLIDER WIDEO YOUTUBE =====
const promoVideos = [
  "https://www.youtube.com/embed/E2lpnrLXEPs",
  "https://www.youtube.com/embed/H6qDW5rpZBw"
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
  // przyciski
  promoPrev.addEventListener("click", () => {
    promoIndex = (promoIndex - 1 + promoVideos.length) % promoVideos.length;
    updatePromoVideo();
  });

  promoNext.addEventListener("click", () => {
    promoIndex = (promoIndex + 1) % promoVideos.length;
    updatePromoVideo();
  });

  // auto‑zmiana co 5 sekund
  setInterval(() => {
    promoIndex = (promoIndex + 1) % promoVideos.length;
    updatePromoVideo();
  }, 5000);

  // ustaw pierwszy film i licznik
  updatePromoVideo();
}
