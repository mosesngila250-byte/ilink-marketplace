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
   iLINK FINDER SYSTEM============================================= */
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("finderInput");
    const findButton = document.getElementById("finderButton");
    const results = document.getElementById("finderResults");
    const chips = document.querySelectorAll(".finder-chip");

    if (!input || !findButton || !results) {
        console.error("iLink Finder: A required HTML element is missing.");
        return;
    }

    const categories = {
        fashion: {
            title: "👗 Fashion Finder",
            description: "Explore clothing, shoes, bags and accessories."
        },
        electronics: {
            title: "📱 Electronics",
            description: "Explore phones, smartwatches and gadgets."
        },
        gifts: {
            title: "🎁 Gift Finder",
            description: "Discover gifts for birthdays and holidays."
        },
        china: {
            title: "🇨🇳 China Marketplace",
            description: "Explore products from Chinese marketplaces."
        },
        deals: {
            title: "🔥 Deals Finder",
            description: "Explore products and special offers."
        },
        tickets: {
            title: "⚽ Football Tickets",
            description: "Explore football ticket opportunities."
        }
    };

    function searchFinder(query) {
        const term = (query || input.value).trim().toLowerCase();

        if (!term) {
            results.innerHTML = `
                <div class="finder-empty">
                    <h3>🔎 What are you looking for?</h3>
                    <p>Enter fashion, electronics, gifts, China products, deals or football tickets.</p>
                </div>`;
            return;
        }

        const key = Object.keys(categories).find(category =>
            term.includes(category) ||
            (category === "tickets" && term.includes("football")) ||
            (category === "china" && term.includes("products"))
        );

        if (!key) {
            results.innerHTML = `
                <div class="finder-empty">
                    <h3>🔍 No matching category yet</h3>
                    <p>Try Fashion, Electronics, Gifts, China, Deals or Football Tickets.</p>
                </div>`;
            return;
        }

        const item = categories[key];

        results.innerHTML = `
            <div class="finder-result-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <button type="button" class="finder-explore">
                    Explore ${item.title.replace(/^[^\s]+\s/, "")}
                </button>
            </div>`;

        results.querySelector(".finder-explore").addEventListener("click", function () {
            const target = key === "tickets"
                ? document.getElementById("tickets")
                : document.getElementById("marketplaces");

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            } else {
                results.insertAdjacentHTML(
                    "beforeend",
                    "<p>More marketplace destinations are coming soon.</p>"
                );
            }
        });
    }

    findButton.addEventListener("click", () => searchFinder());

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") searchFinder();
    });

    chips.forEach(chip => {
        chip.addEventListener("click", function () {
            input.value = this.dataset.search || this.textContent.trim();
            searchFinder(input.value);
        });
    });

    window.selectFashion = function (category) {
        input.value = category;
        searchFinder(category);
    };
});
   }



findButton.addEventListener("click", () => searchFinder());

input.addEventListener("keydown", event => {
    if (event.key === "Enter") searchFinder();
});

chips.forEach(chip => {
    chip.addEventListener("click", function () {
        input.value = this.dataset.search || this.textContent.trim();
        searchFinder(input.value);
    });
});

window.selectFashion = function (category) {
    input.value = category;
    searchFinder(category);
};

});                                        
    
