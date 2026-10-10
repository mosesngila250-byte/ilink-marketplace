/* =====================================================
   iLink V1 — COMPLETE SCRIPT
   Products + Deals + Seasonal + Search + Football Tickets
===================================================== */


/* =====================================================
   PRODUCTS
===================================================== */

const products = [
  {
    icon: "🎧",
    name: "Wireless Smart Headphones",
    price: "KSh 2,999"
  },
  {
    icon: "⌚",
    name: "Smart Watch Pro",
    price: "KSh 3,499"
  },
  {
    icon: "👟",
    name: "Urban Runner Sneakers",
    price: "KSh 2,499"
  },
  {
    icon: "📱",
    name: "Portable Phone Gadget",
    price: "KSh 1,999"
  }
];


/* =====================================================
   DEALS
===================================================== */

const deals = [
  {
    icon: "⚡",
    title: "Tech Flash Picks",
    text: "Discover popular technology deals."
  },
  {
    icon: "🎁",
    title: "Gift Finder",
    text: "Find gifts for every occasion."
  },
  {
    icon: "🌍",
    title: "Global Finds",
    text: "Explore products from international marketplaces."
  }
];


/* =====================================================
   SEASONAL COLLECTIONS
===================================================== */

const seasonal = {

  christmas: {
    eyebrow: "DECEMBER • CHRISTMAS COLLECTION",
    title: "Christmas Gifts from China",
    text: "Discover festive gift ideas and products from international marketplaces.",
    button: "Explore Christmas gifts",
    icon: "🎁"
  },

  valentines: {
    eyebrow: "FEBRUARY • VALENTINE'S COLLECTION",
    title: "Valentine's Gifts from China",
    text: "Discover thoughtful gifts, fashion and special products.",
    button: "Explore Valentine's gifts",
    icon: "❤️"
  },

  normal: {
    eyebrow: "iLINK • GLOBAL MARKETPLACE",
    title: "Discover Products from Around the World",
    text: "Shop and discover products through iLink's growing marketplace.",
    button: "Explore marketplace",
    icon: "🌍"
  }

};


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

  });

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }

  });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(sectionId) {

  const section = document.getElementById(sectionId);

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {

  const notification =
    document.getElementById("notification");

  if (!notification) return;

  notification.textContent = message;

  notification.classList.add("show");

  setTimeout(() => {

    notification.classList.remove("show");

  }, 3000);

}


/* =====================================================
   COMING SOON
===================================================== */

function showComingSoon() {

  showNotification(
    "🚀 This iLink feature is coming soon."
  );

}


/* =====================================================
   FOOTBALL TICKET AFFILIATE LINKS
===================================================== */

/*
   IMPORTANT:

   These are PLACEHOLDER links.

   Once you join a football ticket
   affiliate program, replace these
   URLs with your real tracking links.

   Example:

   football:
   "YOUR_REAL_AFFILIATE_LINK"

*/

const ticketLinks = {

  football:
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  "premier-league":
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  "champions-league":
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  "la-liga":
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  "serie-a":
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  "bundesliga":
    "https://YOUR-AFFILIATE-LINK-HERE.com",

  international:
    "https://YOUR-AFFILIATE-LINK-HERE.com"

};


/* =====================================================
   OPEN FOOTBALL TICKET PARTNER
===================================================== */

function openTicketPartner(type) {

  const link = ticketLinks[type];

  /*
     If we have not added the real
     affiliate link yet, show message.
  */

  if (
    !link ||
    link.includes("YOUR-AFFILIATE-LINK-HERE")
  ) {

    showNotification(
      "🎟️ Football ticket partner coming soon."
    );

    return;

  }


  /*
     Open affiliate tracking link.
  */

  window.open(
    link,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");


function performSearch() {

  if (!searchInput) return;

  const search =
    searchInput.value.trim().toLowerCase();


  /* -------------------------------------
     EMPTY SEARCH
  ------------------------------------- */

  if (!search) {

    showNotification(
      "🔍 Type something to search."
    );

    return;

  }


  /* -------------------------------------
     FOOTBALL TICKETS
  ------------------------------------- */

  if (

    search.includes("football") ||
    search.includes("ticket") ||
    search.includes("tickets") ||
    search.includes("match") ||
    search.includes("premier league") ||
    search.includes("champions league") ||
    search.includes("la liga") ||
    search.includes("serie a") ||
    search.includes("bundesliga") ||
    search.includes("arsenal") ||
    search.includes("chelsea") ||
    search.includes("liverpool") ||
    search.includes("manchester") ||
    search.includes("barcelona") ||
    search.includes("real madrid")

  ) {

    scrollToSection("tickets");

    showNotification(
      "⚽ Football Tickets found."
    );

    return;

  }


  /* -------------------------------------
     GIFTS
  ------------------------------------- */

  if (

    search.includes("gift") ||
    search.includes("gifts") ||
    search.includes("christmas") ||
    search.includes("valentine")

  ) {

    scrollToSection("gifts");

    showNotification(
      "🎁 Gift section found."
    );

    return;

  }


  /* -------------------------------------
     VOUCHERS
  ------------------------------------- */

  if (

    search.includes("voucher") ||
    search.includes("vouchers") ||
    search.includes("coupon") ||
    search.includes("coupons")

  ) {

    scrollToSection("vouchers");

    showNotification(
      "🎟️ Voucher section found."
    );

    return;

  }


  /* -------------------------------------
     CHINA MARKETPLACE
  ------------------------------------- */

  if (

    search.includes("china") ||
    search.includes("chinese") ||
    search.includes("alibaba") ||
    search.includes("electronics") ||
    search.includes("phone") ||
    search.includes("phones") ||
    search.includes("fashion") ||
    search.includes("shoes")

  ) {

    scrollToSection("china");

    showNotification(
      "🇨🇳 China Marketplace found."
    );

    return;

  }


  /* -------------------------------------
     NO RESULT
  ------------------------------------- */

  showNotification(
    "🔎 iLink is still adding more marketplaces."
  );

}


/* =====================================================
   SEARCH BUTTON
===================================================== */

if (searchBtn) {

  searchBtn.addEventListener(
    "click",
    performSearch
  );

}


/* =====================================================
   ENTER KEY SEARCH
===================================================== */

if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        performSearch();

      }

    }
  );

}


/* =====================================================
   iLINK LOADED
===================================================== */

console.log(
  "🚀 iLink V1 loaded successfully."
);


/* =====================================================
   FUTURE FOOTBALL API SYSTEM
===================================================== */

/*

   FUTURE iLINK FOOTBALL SYSTEM

   Football API
        ↓
   iLink backend
        ↓
   Football Tickets
        ↓
   Customer selects competition
        ↓
   Customer selects match
        ↓
   Customer selects ticket
        ↓
   Affiliate tracking link
        ↓
   Ticket partner
        ↓
   Customer completes purchase
        ↓
   iLink receives commission

*/


/* =====================================================
   FUTURE MARKETPLACE SYSTEM
===================================================== */

/*

   FUTURE iLINK GLOBAL MARKETPLACE

   Customer
       ↓
   iLink
       ↓
   Marketplace / Merchant
       ↓
   Affiliate tracking
       ↓
   Customer purchase
       ↓
   Commission
       ↓
   iLink

*/


/* =====================================================
   END OF iLINK SCRIPT
/* =====================================================
   iLINK FINDER SYSTEM
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const finderInput = document.getElementById("finderInput");
    const finderButton = document.getElementById("finderButton");
    const finderResults = document.getElementById("finderResults");
    const finderChips = document.querySelectorAll(".finder-chip");

    if (!finderInput || !finderButton || !finderResults) {
        return;
    }

    const finderData = [
        {
            keywords: ["fashion", "clothes", "shoes", "sneakers", "dress", "shirt"],
            title: "👕 Fashion Finder",
            description: "Find fashion products from major online marketplaces.",
            category: "Fashion"
        },
        {
            keywords: ["phone", "mobile", "smartphone", "iphone", "android"],
            title: "📱 Phone & Electronics",
            description: "Find phones, electronics and accessories.",
            category: "Electronics"
        },
        {
            keywords: ["gift", "christmas", "present", "birthday"],
            title: "🎁 Gift Finder",
            description: "Discover gifts from international marketplaces.",
            category: "Gifts"
        },
        {
            keywords: ["china", "chinese", "alibaba", "1688"],
            title: "🇨🇳 China Marketplace",
            description: "Explore products from Chinese marketplaces.",
            category: "China"
        },
        {
            keywords: ["football", "soccer", "ticket", "tickets", "match"],
            title: "⚽ Football Tickets",
            description: "Find football ticket opportunities through iLink.",
            category: "Football"
        },
        {
            keywords: ["deal", "deals", "cheap", "discount", "offer"],
            title: "🔥 Deals Finder",
            description: "Find products and special offers through iLink.",
            category: "Deals"
        }
    ];

    function searchFinder(searchTerm) {

        const term = (searchTerm || finderInput.value).trim().toLowerCase();

        if (!term) {
            finderResults.innerHTML = `
                <div class="finder-empty">
                    <div class="finder-icon">🔎</div>
                    <h3>What are you looking for?</h3>
                    <p>Try searching for fashion, phones, gifts, China products, football tickets or deals.</p>
                </div>
            `;
            return;
        }

        const words = term.split(/\s+/);

        const results = finderData.filter(item => {
            return words.some(word =>
                item.keywords.some(keyword =>
                    keyword.includes(word) || word.includes(keyword)
                )
            );
        });

        if (results.length === 0) {
            finderResults.innerHTML = `
                <div class="finder-empty">
                    <div class="finder-icon">🔍</div>
                    <h3>No exact match yet</h3>
                    <p>
                        iLink is still expanding. Try searching for
                        fashion, phones, gifts, China products,
                        football tickets or deals.
                    </p>
                </div>
            `;
            return;
        }

        finderResults.innerHTML = results.map(item => `
            <div class="finder-result-card">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>

                <button
                    type="button"
                    onclick="finderCategory('${item.category}')">
                    Explore
                </button>
            </div>
        `).join("");
    }

    window.searchFinder = searchFinder;

    window.finderCategory = function(category) {

        const marketplaceSection =
            document.getElementById("marketplaces");

        if (marketplaceSection) {
            marketplaceSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        console.log("iLink Finder category:", category);
    };

    finderButton.addEventListener("click", function () {
        searchFinder();
    });

    finderInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchFinder();
        }
    });

    finderChips.forEach(chip => {
        chip.addEventListener("click", function () {
            const searchValue = this.dataset.search || this.textContent;
            finderInput.value = searchValue;
            searchFinder(searchValue);
        });
    });

});===================================================== */
/* =========================================================
   iLINK FINDER V2 — SEARCH + CATEGORY FILTER
   ========================================================= */

const ilinkFinderProducts = [
  {
    name: "Smartphone Deals",
    category: "Electronics",
    marketplace: "Global Marketplace",
    description: "Find smartphones and mobile accessories.",
    link: "#marketplace"
  },
  {
    name: "Fashion Deals",
    category: "Fashion",
    marketplace: "Fashion Marketplace",
    description: "Discover clothing, shoes and accessories.",
    link: "#marketplace"
  },
  {
    name: "Christmas Gifts",
    category: "Gifts",
    marketplace: "China Marketplace",
    description: "Find unique gifts and products from China.",
    link: "#marketplace"
  },
  {
    name: "Football Tickets",
    category: "Tickets",
    marketplace: "iLink Tickets",
    description: "Explore football ticket opportunities.",
    link: "#tickets"
  }
];

function searchILinkFinder() {
  const input = document.getElementById("ilinkFinderSearch");
  const results = document.getElementById("ilinkFinderResults");

  if (!input || !results) return;

  const query = input.value.toLowerCase().trim();

  const matches = ilinkFinderProducts.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.marketplace.toLowerCase().includes(query)
  );

  displayILinkFinderResults(matches);
}

function filterILinkFinder(category) {
  const results = document.getElementById("ilinkFinderResults");

  if (!results) return;

  if (category === "All") {
    displayILinkFinderResults(ilinkFinderProducts);
    return;
  }

  const matches = ilinkFinderProducts.filter(product =>
    product.category === category
  );

  displayILinkFinderResults(matches);
}

function displayILinkFinderResults(products) {
  const results = document.getElementById("ilinkFinderResults");

  if (!results) return;

  if (products.length === 0) {
    results.innerHTML = `
      <div class="finder-result card">
        <h3>No results found</h3>
        <p>Try another product or category.</p>
      </div>
    `;
    return;
  }

  results.innerHTML = products.map(product => `
    <div class="finder-result card">
      <span class="marketplace-name">
        ${product.marketplace}
      </span>

      <h3>${product.name}</h3>

      <p>${product.description}</p>

      <a href="${product.link}" class="finder-action btn">
        Explore →
      </a>
    </div>
  `).join("");
}
// iLink Fashion Finder
function selectFashion(category) {
  const results = document.getElementById("fashionResults");

  if (!results) return;

  results.innerHTML = `
    <h3>🔎 ${category}</h3>
    <p>Finding ${category.toLowerCase()} products for you...</p>
    <button type="button" onclick="showNotification('Searching iLink marketplaces for ${category}...')">
      Explore ${category}
    </button>
  `;
}
// iLink V2 - Finder Button Functionality
document.addEventListener("DOMContentLoaded", function () {
const finderButtons = document.querySelectorAll(
"#finder button, .finder button, .finder-btn"
);

finderButtons.forEach(function (button) {
button.addEventListener("click", function () {
const category =
button.dataset.category ||
button.textContent.trim();

  const message =
    "iLink Finder: " + category +
    " selected. Product matching is coming soon!";

  alert(message);
});

});
});
// iLink Finder V2
(function () {
  function setupFinder() {
    const finderButtons = document.querySelectorAll("button");
    const finderInput = document.querySelector(
      'input[placeholder*="black sneakers"], input[placeholder*="Try:"]'
    );

    const categories = {
      "Fashion": "Fashion products",
      "Electronics": "Electronics and gadgets",
      "Gifts": "Gifts",
      "China": "Products from China",
      "Deals": "iLink deals",
      "Tickets": "Football tickets"
    };

    finderButtons.forEach(function (button) {
      const text = button.textContent.trim();

      if (!categories[text]) return;

      button.addEventListener("click", function () {
        if (finderInput) {
          finderInput.value = categories[text];
        }

        const resultBox = document.querySelector(
          ".finder-results, .finder-result, #finder-results"
        );

        if (resultBox) {
          resultBox.innerHTML =
            "<h2>🔎 " + categories[text] + "</h2>" +
            "<p>iLink is ready to help you find the best options.</p>";
        } else {
          alert(
            "iLink Finder\n\n" +
            categories[text] +
            " selected.\n\nProduct matching will appear here next."
          );
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupFinder);
  } else {
    setupFinder();
  }
})();
