const products = [
  { icon: "🎧", name: "Wireless Smart Headphones", price: "KSh 3,499", rating: "★★★★★", note: "Tracked shopping" },
  { icon: "⌚", name: "Smart Watch Pro", price: "KSh 4,999", rating: "★★★★☆", note: "Tracked shopping" },
  { icon: "👟", name: "Urban Runner Sneakers", price: "KSh 5,850", rating: "★★★★★", note: "Tracked shopping" },
  { icon: "📱", name: "Portable Phone Gadget Kit", price: "KSh 2,150", rating: "★★★★☆", note: "Tracked shopping" }
];

const deals = [
  { icon: "⚡", title: "Tech Flash Picks", text: "Trending electronics and smart gadgets.", price: "From KSh 999" },
  { icon: "🎁", title: "Gift Finder", text: "Ideas for birthdays, holidays and celebrations.", price: "Explore gifts" },
  { icon: "🌍", title: "Global Finds", text: "Discover products from international marketplaces.", price: "Explore stores" }
];

const seasonal = {
  christmas: {
    eyebrow: "DECEMBER • CHRISTMAS COLLECTION",
    title: "Christmas Gifts from China",
    text: "Discover festive gift ideas and products from the Chinese marketplace.",
    button: "Explore Christmas gifts",
    icon: "🎁"
  },
  valentines: {
    eyebrow: "FEBRUARY • VALENTINE'S COLLECTION",
    title: "Valentine's Gifts from China",
    text: "Discover thoughtful gifts, fashion and special finds for Valentine's season.",
    button: "Explore Valentine's gifts",
    icon: "❤️"
  },
  blackFriday: {
    eyebrow: "NOVEMBER • BLACK FRIDAY",
    title: "Black Friday Global Deals",
    text: "Explore seasonal deals and trending products from global marketplaces.",
    button: "Explore Black Friday",
    icon: "🛍️"
  },
  normal: {
    eyebrow: "ILINK • GLOBAL DISCOVERY",
    title: "Trending Products Around the World",
    text: "Discover new products, gifts and deals from iLink's global marketplace.",
    button: "Explore marketplace",
    icon: "🌍"
  }
};

function getSeason(date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 12) return "christmas";
  if (month === 2 && day <= 14) return "valentines";
  if (month === 11) return "blackFriday";
  return "normal";
}

function applySeason() {
  const key = getSeason();
  const data = seasonal[key];

  document.getElementById("seasonEyebrow").textContent = data.eyebrow;
  document.getElementById("heroTitle").innerHTML =
    key === "normal"
      ? "Shop the world.<br><span>Earn as you shop.</span>"
      : `${data.title}.<br><span>Discover it on iLink.</span>`;
  document.getElementById("heroText").textContent = data.text;

  document.getElementById("promoEyebrow").textContent = data.eyebrow;
  document.getElementById("promoTitle").textContent = data.title;
  document.getElementById("promoText").textContent = data.text;
  document.getElementById("promoButton").textContent = data.button + " →";
  document.querySelector(".gift-box").textContent = data.icon;
}

function renderProducts(items = products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-image">
        <span class="product-badge">iLink pick</span>
        ${p.icon}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="rating">${p.rating}</div>
        <div class="price-row">
          <span class="price">${p.price}</span>
          <span class="commission-note">${p.note}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderDeals() {
  document.getElementById("dealStrip").innerHTML = deals.map(d => `
    <article class="deal-card">
      <div class="deal-icon">${d.icon}</div>
      <h3>${d.title}</h3>
      <p>${d.text}</p>
      <div class="deal-price">${d.price} →</div>
    </article>
  `).join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function runSearch(value) {
  const query = value.trim();
  if (!query) {
    showToast("Type something to search on iLink.");
    return;
  }
  showToast(`iLink search ready for: ${query}`);
  document.getElementById("personalized").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("searchButton").addEventListener("click", () => {
  runSearch(document.getElementById("heroSearch").value);
});

document.getElementById("heroSearch").addEventListener("keydown", e => {
  if (e.key === "Enter") runSearch(e.target.value);
});

document.querySelectorAll(".pill, .category-card").forEach(btn => {
  btn.addEventListener("click", () => {
    const query = btn.dataset.query || "";
    document.getElementById("heroSearch").value = query;
    runSearch(query);
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("open");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("mobileNav").classList.remove("open"));
});

document.querySelectorAll("[data-action]").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.action === "refresh") {
      renderProducts([...products].sort(() => Math.random() - .5));
      showToast("Your iLink picks were refreshed.");
    } else {
      showToast("More categories are coming to iLink.");
    }
  });
});

document.getElementById("promoButton").addEventListener("click", () => {
  showToast("Seasonal collection is ready for product links.");
});

document.getElementById("voucherButton").addEventListener("click", () => {
  showToast("iLink digital vouchers are coming next.");
});

document.querySelectorAll(".market-card").forEach(card => {
  card.addEventListener("click", () => showToast(`${card.querySelector("b").textContent} marketplace selected.`));
});

document.getElementById("searchToggle").addEventListener("click", () => {
  document.getElementById("heroSearch").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

applySeason();
renderProducts();
renderDeals();
