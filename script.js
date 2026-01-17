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

// ===== GENEROWANIE KART DONATE NA STRONIE GŁÓWNEJ =====
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
  if (donateModal) {
    donateModal.classList.remove("hidden");
  }
}

function closeDonateModal() {
  if (donateModal) {
    donateModal.classList.add("hidden");
  }
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeDonateModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDonateModal();
});

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

// ===== NAWIGACJA PREMIUM + STRONY =====
document.addEventListener('DOMContentLoaded', () => {
  
  // === OBSŁUGA KLIKNIĘCIA PREMIUM W MENU ===
  const premiumLink = document.querySelector('nav a[href*="premium"], .btn.donate, a:contains("PREMIUM")');
  
  // Lepsze rozwiązanie: znajdź wszystkie linki i sprawdź text
  const allNavLinks = document.querySelectorAll('nav a, .top-bar a');
  allNavLinks.forEach(link => {
    if (link.textContent.trim().toLowerCase() === 'premium') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showPremiumPage();
      });
    }
  });

  // === FREE DOWNLOAD BUTTONS ===
  const guardiansBtn = document.getElementById('guardiansBtn');
  if (guardiansBtn) {
    guardiansBtn.onclick = () => {
      const link = document.createElement('a');
      link.href = 'macros/UTD/UTD_1.41_Free.zip.rar';
      link.download = 'UTD_FREE.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }

  // === PREMIUM BUTTON (LAST STAND) ===
  const lastStandBtn = document.getElementById('lastStandBtn');
  if (lastStandBtn) {
    lastStandBtn.onclick = () => {
      window.open('https://discord.gg/t2sGsddB', '_blank');
    };
  }

  // === V8.2 BUTTON ===
  const royaleBtn = document.getElementById('royaleBtn');
  if (royaleBtn) {
    royaleBtn.onclick = () => {
      window.open('https://discord.gg/t2sGsddB', '_blank');
    };
  }
});

// ===== FUNKCJA POKAZUJĄCA STRONĘ PREMIUM =====
function showPremiumPage() {
  // Znajdź główny kontener (gdzie jest hero, support itp.)
  const mainContainer = document.querySelector('body');
  
  // Ukryj wszystkie sekcje strony głównej
  const homeSections = document.querySelectorAll('.hero, .support, .promo-section, .faq-section, .macros');
  homeSections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Sprawdź czy Premium section już istnieje
  let premiumSection = document.getElementById('premium-page');
  
  if (!premiumSection) {
    // Stwórz nową sekcję Premium
    premiumSection = document.createElement('div');
    premiumSection.id = 'premium-page';
    premiumSection.innerHTML = `
      <div class="hero">
        <h1>💎 Premium Macros</h1>
        <p>Wybierz makro i kup gamepass, następnie /verify na Discord!</p>
      </div>
      
      <div class="support">
        <h2>Dostępne Premium Gamepasses</h2>
        <p>Po zakupie wejdź na nasz Discord i użyj <code>/verify</code> w kanale bot-command</p>
        <div class="cards" id="premium-cards-list"></div>
      </div>
    `;
    mainContainer.appendChild(premiumSection);
    
    // Generuj karty gamepassów
    generatePremiumCards();
  } else {
    // Jeśli już istnieje, tylko pokaż
    premiumSection.style.display = 'block';
  }
  
  // Aktualizuj URL bez przeładowania
  history.pushState({ page: 'premium' }, 'Premium', '#premium');
}

// ===== GENEROWANIE KART PREMIUM =====
function generatePremiumCards() {
  const premiumCardsContainer = document.getElementById('premium-cards-list');
  if (!premiumCardsContainer) return;
  
  premiumCardsContainer.innerHTML = ''; // Wyczyść
  
  gamepasses.forEach((pass) => {
    const card = document.createElement("div");
    card.className = "card" + (pass.special ? " gold" : "");

    const left = document.createElement("div");
    left.className = "card left";

    const icon = document.createElement("div");
    icon.className = "icon-box";
    icon.textContent = "💎";

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
    price.textContent = "Kup za " + pass.price + " Robux";
    price.href = `https://www.roblox.com/game-pass/${pass.id}`;
    price.target = "_blank";
    price.rel = "noopener noreferrer";

    card.appendChild(left);
    card.appendChild(price);

    premiumCardsContainer.appendChild(card);
  });
}

// ===== POWRÓT DO STRONY GŁÓWNEJ (OPCJONALNIE) =====
window.addEventListener('popstate', (e) => {
  if (window.location.hash === '' || window.location.hash === '#home') {
    // Pokaż z powrotem home
    document.querySelectorAll('.hero, .support, .promo-section').forEach(s => {
      s.style.display = 'block';
    });
    const premPage = document.getElementById('premium-page');
    if (premPage) premPage.style.display = 'none';
  }
});
// === FIX DLA DYNAMICZNIE TWORZONYCH PRZYCISKÓW ===
function attachPremiumListeners() {
  // Znajdź WSZYSTKIE linki Premium na stronie (nawet dynamicznie stworzone)
  const allPremiumLinks = document.querySelectorAll('a[href*="premium"], a[href="#premium"], nav a, .top-bar a');
  
  allPremiumLinks.forEach(link => {
    // Sprawdź czy tekst zawiera "Premium" (case insensitive)
    if (link.textContent.toLowerCase().includes('premium') || 
        link.textContent.toLowerCase().includes('prem')) {
      
      // Usuń stare event listenery
      link.onclick = null;
      
      // Dodaj nowy
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showPremiumPage();
      });
    }
  });
}

// === URUCHOM DLA DYNAMICZNYCH ZMIAN ===
setInterval(attachPremiumListeners, 500); // Co pół sekundy sprawdza nowe przyciski

// + Uruchom od razu
attachPremiumListeners();

