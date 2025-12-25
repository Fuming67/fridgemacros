// Lista gamepassów
const gamepasses = [
  {
    name: "UTD Donater",
    description: "Wsparcie podstawowe",
    price: 250,
    id: 48776587,        // <-- tutaj Twoje prawdziwe ID gamepassa
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
    special: true        // ta karta będzie złota
  }
];

// GENEROWANIE KART
const cardsContainer = document.getElementById("cards");

gamepasses.forEach((pass) => {
  const card = document.createElement("div");
  card.className = "card" + (pass.special ? " gold" : "");

  const left = document.createElement("div");
  left.className = "card left";

  const icon = document.createElement("div");
  icon.className = "icon-box";
  icon.textContent = "F"; // dowolna literka / ikonka

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
  price.href = `https://www.roblox.com/game-pass/${pass.id}/view`; // poprawny format linku do gamepassa
  price.target = "_blank";
  price.rel = "noopener noreferrer";

  card.appendChild(left);
  card.appendChild(price);

  cardsContainer.appendChild(card);
});

  card.appendChild(left);
  card.appendChild(price);

  cardsContainer.appendChild(card);
});

// Modal Donate
const donateModal = document.getElementById("donate-modal");
const modalOverlay = donateModal.querySelector(".modal-overlay");

function openDonateModal() {
  donateModal.classList.remove("hidden");
}

function closeDonateModal() {
  donateModal.classList.add("hidden");
}

modalOverlay.addEventListener("click", closeDonateModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDonateModal();
});

// Modal Donate
const donateModal = document.getElementById("donate-modal");
const modalOverlay = donateModal.querySelector(".modal-overlay");

function openDonateModal() {
  donateModal.classList.remove("hidden");
}

function closeDonateModal() {
  donateModal.classList.add("hidden");
}

modalOverlay.addEventListener("click", closeDonateModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDonateModal();
});
