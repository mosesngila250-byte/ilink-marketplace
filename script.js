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
   END OF iLINK V1 SCRIPT
===================================================== */
  

/* =====================================================
   iLINK INTELLIGENCE V7
   SMART DISCOVERY + FLIP ENGINE
===================================================== */

(function () {

    function initIlinkV7() {

        const input = document.getElementById("finderInput");
        const button = document.getElementById("finderButton");
        const results = document.getElementById("finderResults");

        if (!input || !button || !results) {
            console.error("iLink V7: Finder HTML elements missing.");
            return;
        }

        console.log("🚀 iLink Intelligence V7 starting...");


        /* ==========================================
           MARKETPLACE CONFIGURATION
        ========================================== */

        const marketplaces = [

            {
                id: "amazon",
                name: "Amazon",
                icon: "🌎",
                buildURL: function (term) {
                    return "https://www.amazon.com/s?k=" +
                        encodeURIComponent(term);
                }
            },

            {
                id: "alibaba",
                name: "Alibaba",
                icon: "🇨🇳",
                buildURL: function (term) {
                    return "https://www.alibaba.com/trade/search?SearchText=" +
                        encodeURIComponent(term);
                }
            },

            {
                id: "aliexpress",
                name: "AliExpress",
                icon: "🛍️",
                buildURL: function (term) {
                    return "https://www.aliexpress.com/w/wholesale-" +
                        encodeURIComponent(term) + ".html";
                }
            },

            {
                id: "ebay",
                name: "eBay",
                icon: "🏷️",
                buildURL: function (term) {
                    return "https://www.ebay.com/sch/i.html?_nkw=" +
                        encodeURIComponent(term);
                }
            }

        ];


        /* ==========================================
           INTELLIGENT CATEGORY RECOGNITION
        ========================================== */

        const categories = [

            {
                name: "Football Tickets",
                icon: "⚽",
                pattern: /\bticket(s)?\b|football|soccer|premier league|champions league|la liga|serie a|bundesliga|arsenal|chelsea|liverpool|barcelona|real madrid|manchester united/i,
                description: "Discover football ticket opportunities.",
                type: "tickets"
            },

            {
                name: "Fashion",
                icon: "👗",
                pattern: /fashion|clothes|clothing|dress|dresses|shoes|sneakers|shirt|shirts|jacket|trousers|jeans|handbag|bags|watch|accessories/i,
                description: "Discover fashion, clothing, shoes and accessories.",
                type: "fashion"
            },

            {
                name: "Electronics",
                icon: "📱",
                pattern: /phone|iphone|samsung|laptop|computer|tablet|headphones|earphones|electronics|smartwatch|gadget|camera|charger|speaker/i,
                description: "Discover electronic products and gadgets.",
                type: "electronics"
            },

            {
                name: "Gifts",
                icon: "🎁",
                pattern: /gift|gifts|christmas|birthday|valentine|present|toys|anniversary/i,
                description: "Discover gifts for every occasion.",
                type: "gifts"
            },

            {
                name: "China Products",
                icon: "🇨🇳",
                pattern: /china|chinese|alibaba|aliexpress|1688|wholesale|manufacturer|supplier/i,
                description: "Discover products from Chinese marketplaces.",
                type: "china"
            },

            {
                name: "Deals",
                icon: "🔥",
                pattern: /deal|deals|discount|cheap|offer|offers|sale|bargain/i,
                description: "Discover marketplace deals and offers.",
                type: "deals"
            }

        ];


        /* ==========================================
           SAFE HTML
        ========================================== */

        function escapeHTML(value) {

            return String(value).replace(/[&<>"']/g, function (char) {

                return {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }[char];

            });

        }


        /* ==========================================
           CATEGORY INTELLIGENCE
        ========================================== */

        function recognizeCategory(term) {

            return categories.find(function (category) {

                return category.pattern.test(term);

            }) || {

                name: "Global Products",
                icon: "🌍",
                description: "Explore products across global marketplaces.",
                type: "general"

            };

        }


        /* ==========================================
           SMART MARKETPLACE MATCHING
        ========================================== */

        function matchMarketplaces(category) {

            switch (category.type) {

                case "china":

                    return marketplaces.filter(function (market) {

                        return market.id === "alibaba" ||
                               market.id === "aliexpress";

                    });

                case "fashion":

                case "electronics":

                case "gifts":

                case "deals":

                case "general":

                    return marketplaces;

                default:

                    return [];

            }

        }


        /* ==========================================
           SEARCH MEMORY
        ========================================== */

        function saveSearch(term) {

            try {

                let history = JSON.parse(
                    localStorage.getItem("ilinkFlipSearches") || "[]"
                );

                if (!Array.isArray(history)) {
                    history = [];
                }

                history = history.filter(function (item) {

                    return item !== term;

                });

                history.unshift(term);

                localStorage.setItem(
                    "ilinkFlipSearches",
                    JSON.stringify(history.slice(0, 10))
                );

            } catch (error) {

                console.warn("iLink search memory unavailable.");

            }

        }


        /* ==========================================
           CLICK ANALYTICS
        ========================================== */

        function recordClick(marketplace, term) {

            try {

                let history = JSON.parse(
                    localStorage.getItem("ilinkFlipClicks") || "[]"
                );

                if (!Array.isArray(history)) {
                    history = [];
                }

                history.push({

                    marketplace: marketplace,
                    search: term,
                    date: new Date().toISOString()

                });

                localStorage.setItem(
                    "ilinkFlipClicks",
                    JSON.stringify(history.slice(-100))
                );

            } catch (error) {

                console.warn("iLink click tracking unavailable.");

            }

        }


        /* ==========================================
           FOOTBALL INTELLIGENCE
        ========================================== */

        function showFootballResults(term) {

            const safeTerm = escapeHTML(term);

            results.innerHTML = `

                <div class="finder-v3-panel">

                    <div class="finder-v3-heading">

                        <span class="finder-v3-live">
                            ● iLINK FOOTBALL INTELLIGENCE
                        </span>

                        <h3>⚽ Football Ticket Finder</h3>

                        <p>
                            Searching for:
                            <strong>${safeTerm}</strong>
                        </p>

                    </div>

                    <div class="finder-v3-note">

                        Football ticket discovery is ready.

                        Verified ticket partners and
                        affiliate links will be connected
                        in a future upgrade.

                    </div>

                </div>

            `;

        }


        /* ==========================================
           SMART DISCOVERY ENGINE
        ========================================== */

        function searchFinder() {

            const term = input.value.trim();

            if (!term) {

                results.innerHTML = `

                    <div class="finder-empty">

                        <div class="finder-icon">🔎</div>

                        <h3>What are you looking for?</h3>

                        <p>
                            Search products, fashion,
                            electronics, gifts or tickets.
                        </p>

                    </div>

                `;

                return;

            }


            saveSearch(term);


            /* Football recognition */

            const category = recognizeCategory(term);

            if (category.type === "tickets") {

                showFootballResults(term);

                results.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

                return;

            }


            /* Marketplace matching */

            const matchedMarkets = matchMarketplaces(category);

            const safeTerm = escapeHTML(term);


            /* Build comparison */

            results.innerHTML = `

                <div class="finder-v3-panel">

                    <div class="finder-v3-heading">

                        <span class="finder-v3-live">
                            ● iLINK INTELLIGENCE V7
                        </span>

                        <h3>
                            ⚡ Smart Global Discovery
                        </h3>

                        <p>
                            ${category.icon}
                            ${category.description}
                        </p>

                        <p>
                            Your search:
                            <strong>${safeTerm}</strong>
                        </p>

                        <p>
                            Comparing ${matchedMarkets.length}
                            marketplaces.
                        </p>

                    </div>


                    <div class="finder-v3-product-grid">

                        ${matchedMarkets.map(function (market) {

                            return `

                                <div class="finder-v3-product-card">

                                    <div class="finder-v3-flip-badge">
                                        ⚡ FLIP OPTION
                                    </div>

                                    <h4>
                                        ${market.icon}
                                        ${market.name}
                                    </h4>

                                    <p>
                                        Discover your search
                                        on ${market.name}.
                                    </p>

                                    <div class="finder-v3-comparison-info">

                                        <div>
                                            <span>💰</span>
                                            <strong>Price</strong>
                                            <small>Check current price</small>
                                        </div>

                                        <div>
                                            <span>🚚</span>
                                            <strong>Shipping</strong>
                                            <small>Check delivery</small>
                                        </div>

                                        <div>
                                            <span>📦</span>
                                            <strong>Stock</strong>
                                            <small>Check availability</small>
                                        </div>

                                    </div>

                                    <a
                                        class="finder-v3-link"
                                        href="${market.buildURL(term)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-market="${market.id}"
                                    >
                                        🔎 View ${market.name} →
                                    </a>

                                </div>

                            `;

                        }).join("")}

                    </div>


                    <div class="finder-v3-note">

                        🧠 iLink Intelligence V7

                        <br><br>

                        One search. Multiple marketplaces.
                        Discover, compare and choose.

                        <br><br>

                        Remember to check actual prices,
                        shipping costs and availability
                        before purchasing.

                    </div>

                </div>

            `;


            /* Record marketplace clicks */

            results.querySelectorAll("[data-market]").forEach(
                function (link) {

                    link.addEventListener("click", function () {

                        recordClick(
                            link.dataset.market,
                            term
                        );

                    });

                }
            );


            results.scrollIntoView({

                behavior: "smooth",
                block: "nearest"

            });

        }


        /* ==========================================
           FIND IT BUTTON
        ========================================== */

        button.addEventListener("click", function (event) {

            event.preventDefault();

            searchFinder();

        });


        /* ==========================================
           ENTER KEY
        ========================================== */

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchFinder();

            }

        });


        /* ==========================================
           CATEGORY SUGGESTIONS
        ========================================== */

        document.querySelectorAll(".finder-chip").forEach(
            function (chip) {

                chip.addEventListener("click", function () {

                    input.value =
                        chip.dataset.search ||
                        chip.textContent.trim();

                    searchFinder();

                });

            }
        );


        /* ==========================================
           FASHION FINDER SUPPORT
        ========================================== */

        window.selectFashion = function (category) {

            input.value = category;

            searchFinder();

            results.scrollIntoView({

                behavior: "smooth",
                block: "nearest"

            });

        };


        console.log(
            "🚀 iLink Intelligence V7 loaded successfully."
        );

    }


    /* ==========================================
       INITIALIZATION
    ========================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initIlinkV7,
            { once: true }
        );

    } else {

        initIlinkV7();

    }

})();


        

    
