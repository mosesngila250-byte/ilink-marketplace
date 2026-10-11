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
   /* ==========================================
iLINK FINDER V2
========================================== */

document.addEventListener("DOMContentLoaded", function () {

const input = document.getElementById("finderInput");
const findButton = document.getElementById("finderButton");
const results = document.getElementById("finderResults");
const chips = document.querySelectorAll(".finder-chip");

// Stop safely if the Finder HTML is missing.
if (!input || !findButton || !results) {
    console.error("iLink Finder: Required HTML elements not found.");
    return;
}

// iLink Finder categories.
const categories = [
    {
        name: "Fashion",
        icon: "👗",
        keywords: /fashion|clothes|clothing|dress|shoe|sneaker|shirt|bag|jacket|trouser|accessories|clothing|shoes|dresses/i,
        description: "Discover clothing, shoes, bags and accessories.",
        target: "marketplaces"
    },
    {
        name: "Electronics",
        icon: "📱",
        keywords: /phone|iphone|samsung|android|laptop|electronics|headphone|gadget|computer|tablet|smartwatch/i,
        description: "Explore phones, computers and electronic gadgets.",
        target: "marketplaces"
    },
    {
        name: "Gifts",
        icon: "🎁",
        keywords: /gift|christmas|birthday|present|holiday|toys/i,
        description: "Find gifts for birthdays, Christmas and special occasions.",
        target: "marketplaces"
    },
    {
        name: "China Marketplace",
        icon: "🇨🇳",
        keywords: /china|chinese|alibaba|aliexpress|1688/i,
        description: "Explore products from Chinese marketplaces.",
        target: "marketplaces"
    },
    {
        name: "Deals",
        icon: "🔥",
        keywords: /deal|discount|cheap|offer|sale|bargain/i,
        description: "Explore marketplace deals and special offers.",
        target: "marketplaces"
    },
    {
        name: "Football Tickets",
        icon: "⚽",
        keywords: /ticket|football|soccer|manchester united|arsenal|chelsea|liverpool|premier league/i,
        description: "Explore football ticket opportunities.",
        target: "tickets"
    }
];

// Display search results.
function searchFinder(searchTerm) {

    const term = (searchTerm || "").trim();

    if (!term) {
        results.innerHTML = `
            <div class="finder-empty">
                <div class="finder-icon">🔎</div>
                <h3>What are you looking for?</h3>
                <p>Try fashion, phones, gifts, China products, deals or football tickets.</p>
            </div>
        `;
        return;
    }

    const category = categories.find(function (item) {
        return item.keywords.test(term);
    });

    if (!category) {
        results.innerHTML = `
            <div class="finder-empty">
                <div class="finder-icon">🌍</div>
                <h3>Let's keep exploring!</h3>
                <p>We couldn't match that search to a category yet.</p>
                <p>Try fashion, electronics, gifts, China, deals or football tickets.</p>
            </div>
        `;
        return;
    }

    const safeTerm = term.replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });

    results.innerHTML = `
        <div class="finder-result-card">
            <div class="finder-result-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <p><strong>Your search:</strong> ${safeTerm}</p>
            <button type="button" class="finder-explore">
                Explore ${category.name}
            </button>
        </div>
    `;

    const exploreButton = results.querySelector(".finder-explore");

    exploreButton.addEventListener("click", function () {
        const target = document.getElementById(category.target);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            results.querySelector("p").textContent =
                category.description + " The relevant section is coming soon.";
        }
    });
}

// Connect the Find button.
findButton.addEventListener("click", function () {
    searchFinder(input.value);
});

// Allow searches using the Enter key.
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchFinder(input.value);
    }
});

// Connect the suggestion buttons.
chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
        input.value = chip.dataset.search || chip.textContent.trim();
        searchFinder(input.value);
    });
});

// Support the Fashion Finder buttons already in index.html.
window.selectFashion = function (category) {
    input.value = category;
    searchFinder(category);
    results.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
};

console.log("iLink Finder V2 is ready.");

});        
<script src="script.js"></script>
</body>
</html>
