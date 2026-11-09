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
   iLINK FLIP V8
   SMART PRICE HUNTER
   Product Discovery + Price Comparison
===================================================== */

(function () {

    function initFlipV8() {

        const input = document.getElementById("finderInput");
        const button = document.getElementById("finderButton");
        const results = document.getElementById("finderResults");

        if (!input || !button || !results) {
            console.error("iLink V8: Finder elements missing.");
            return;
        }

        /* =====================================
           CONFIGURATION
        ===================================== */

        const API_URL = "/api/products/search";

        const marketplaces = [

            {
                id: "amazon",
                name: "Amazon",
                icon: "🌎",
                url: term =>
                    "https://www.amazon.com/s?k=" +
                    encodeURIComponent(term)
            },

            {
                id: "alibaba",
                name: "Alibaba",
                icon: "🇨🇳",
                url: term =>
                    "https://www.alibaba.com/trade/search?SearchText=" +
                    encodeURIComponent(term)
            },

            {
                id: "aliexpress",
                name: "AliExpress",
                icon: "🛍️",
                url: term =>
                    "https://www.aliexpress.com/w/wholesale-" +
                    encodeURIComponent(term) + ".html"
            },

            {
                id: "ebay",
                name: "eBay",
                icon: "🏷️",
                url: term =>
                    "https://www.ebay.com/sch/i.html?_nkw=" +
                    encodeURIComponent(term)
            }

        ];


        /* =====================================
           CATEGORY INTELLIGENCE
        ===================================== */

        const categories = [

            {
                name: "Fashion",
                icon: "👗",
                pattern: /fashion|clothes|dress|shoes|sneakers|shirt|jeans|bags|jacket/i
            },

            {
                name: "Electronics",
                icon: "📱",
                pattern: /phone|iphone|samsung|laptop|computer|headphones|tablet|camera|watch|gadget/i
            },

            {
                name: "Gifts",
                icon: "🎁",
                pattern: /gift|christmas|birthday|valentine|present|toys/i
            },

            {
                name: "China Products",
                icon: "🇨🇳",
                pattern: /china|chinese|alibaba|aliexpress|wholesale|supplier/i
            },

            {
                name: "Deals",
                icon: "🔥",
                pattern: /deal|discount|cheap|sale|offer|bargain/i
            }

        ];


        /* =====================================
           SECURITY
        ===================================== */

        function escapeHTML(value) {

            return String(value).replace(/[&<>"']/g, char => ({

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"

            })[char]);

        }


        /* =====================================
           CATEGORY RECOGNITION
        ===================================== */

        function recognizeCategory(term) {

            return categories.find(category =>
                category.pattern.test(term)
            ) || {

                name: "Global Products",
                icon: "🌍"

            };

        }


        /* =====================================
           SEARCH MEMORY
        ===================================== */

        function saveSearch(term) {

            try {

                let history = JSON.parse(
                    localStorage.getItem("ilinkFlipSearches") || "[]"
                );

                if (!Array.isArray(history)) history = [];

                history = history.filter(item => item !== term);

                history.unshift(term);

                localStorage.setItem(
                    "ilinkFlipSearches",
                    JSON.stringify(history.slice(0, 10))
                );

            } catch (error) {

                console.warn("Search memory unavailable.");

            }

        }


        /* =====================================
           PRICE FORMATTING
        ===================================== */

        function formatPrice(price, currency) {

            return new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: currency || "USD"

            }).format(price);

        }


        /* =====================================
           CALCULATE TOTAL COST
        ===================================== */

        function calculateTotal(product) {

            return Number(product.price) +
                   Number(product.shipping || 0);

        }


        /* =====================================
           DISPLAY PRODUCT RESULTS
        ===================================== */

        function displayProducts(products, term) {

            const validProducts = products.filter(product => {

                return (

                    Number.isFinite(Number(product.price)) &&
                    Number(product.price) >= 0 &&
                    typeof product.name === "string" &&
                    typeof product.url === "string" &&
                    /^https:\/\//i.test(product.url) &&
                    Number.isFinite(Number(product.shipping || 0)) &&
                    Number(product.shipping || 0) >= 0

                );

            });

            if (!validProducts.length) {

                results.innerHTML = `
                    <div class="finder-v3-panel">
                        <h3>🔎 No verified prices found</h3>
                        <p>Try another product search.</p>
                    </div>
                `;

                return;

            }


            /* Cheapest total cost first */

            validProducts.sort((a, b) => {

                return calculateTotal(a) -
                       calculateTotal(b);

            });


            const cheapest = validProducts[0];

            results.innerHTML = `

                <div class="finder-v3-panel">

                    <div class="finder-v3-heading">

                        <span class="finder-v3-live">
                            ● iLINK FLIP V8
                        </span>

                        <h3>🏆 Smart Price Hunter</h3>

                        <p>
                            Search:
                            <strong>${escapeHTML(term)}</strong>
                        </p>

                        <p>
                            ${validProducts.length}
                            product listings found.
                        </p>

                    </div>


                    <div class="finder-v3-product-grid">

                        ${validProducts.map((product, index) => {

                            const market = marketplaces.find(
                                item => item.id === product.marketplace
                            );

                            const total = calculateTotal(product);

                            return `

                                <div class="finder-v3-product-card">

                                    ${index === 0 ? `

                                        <div class="finder-v3-flip-badge">
                                            🥇 CHEAPEST OPTION
                                        </div>

                                    ` : ""}


                                    ${product.image ? `

                                        <img
                                            src="${escapeHTML(product.image)}"
                                            alt="${escapeHTML(product.name)}"
                                            loading="lazy"
                                            style="width:100%;max-height:180px;object-fit:contain;"
                                        >

                                    ` : ""}


                                    <h4>
                                        ${escapeHTML(product.name)}
                                    </h4>

                                    <p>
                                        ${market ? market.icon : "🌍"}
                                        ${escapeHTML(
                                            market ? market.name : product.marketplace
                                        )}
                                    </p>


                                    <div class="finder-v3-comparison-info">

                                        <div>
                                            <span>💰</span>
                                            <strong>Price</strong>
                                            <small>
                                                ${formatPrice(
                                                    Number(product.price),
                                                    product.currency
                                                )}
                                            </small>
                                        </div>

                                        <div>
                                            <span>🚚</span>
                                            <strong>Shipping</strong>
                                            <small>
                                                ${formatPrice(
                                                    Number(product.shipping || 0),
                                                    product.currency
                                                )}
                                            </small>
                                        </div>

                                        <div>
                                            <span>🏆</span>
                                            <strong>Total</strong>
                                            <small>
                                                ${formatPrice(
                                                    total,
                                                    product.currency
                                                )}
                                            </small>
                                        </div>

                                    </div>


                                    <a
                                        class="finder-v3-link"
                                        href="${escapeHTML(product.url)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Product →
                                    </a>

                                </div>

                            `;

                        }).join("")}

                    </div>


                    <div class="finder-v3-note">

                        🏆 Cheapest listed option:

                        <strong>
                            ${escapeHTML(cheapest.name)}
                        </strong>

                        <br><br>

                        Prices are sorted by product price
                        plus shipping.

                        Check taxes, delivery charges and
                        product availability before buying.

                    </div>

                </div>

            `;

            results.scrollIntoView({

                behavior: "smooth",
                block: "nearest"

            });

        }


        /* =====================================
           MARKETPLACE SEARCH FALLBACK
        ===================================== */

        function showMarketplaceSearch(term) {

            results.innerHTML = `

                <div class="finder-v3-panel">

                    <span class="finder-v3-live">
                        ● iLINK FLIP V8
                    </span>

                    <h3>⚡ Smart Price Hunter</h3>

                    <p>
                        Live product price integration
                        is not connected yet.
                    </p>

                    <p>
                        You can still search these marketplaces:
                    </p>

                    <div class="finder-v3-product-grid">

                        ${marketplaces.map(market => `

                            <div class="finder-v3-product-card">

                                <h4>
                                    ${market.icon}
                                    ${market.name}
                                </h4>

                                <a
                                    class="finder-v3-link"
                                    href="${market.url(term)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Search ${market.name} →
                                </a>

                            </div>

                        `).join("")}

                    </div>

                    <div class="finder-v3-note">

                        🔌 Connect authorised marketplace
                        product APIs or affiliate feeds to
                        activate automatic price comparison.

                    </div>

                </div>

            `;

        }


        /* =====================================
           SMART PRICE SEARCH
        ===================================== */

        async function searchProducts() {

            const term = input.value.trim();

            if (!term) {

                results.innerHTML = `
                    <div class="finder-empty">
                        <h3>🔎 What are you looking for?</h3>
                        <p>Enter a product to hunt for the best price.</p>
                    </div>
                `;

                return;

            }

            saveSearch(term);

            results.innerHTML = `

                <div class="finder-v3-panel">

                    <h3>🔍 Hunting for the best price...</h3>

                    <p>
                        iLink Flip is checking product listings.
                    </p>

                </div>

            `;


            try {

                const response = await fetch(

                    API_URL + "?q=" + encodeURIComponent(term),

                    {
                        method: "GET",
                        headers: {
                            "Accept": "application/json"
                        }
                    }

                );

                if (!response.ok) {

                    throw new Error("Price service unavailable.");

                }

                const data = await response.json();

                if (!data || !Array.isArray(data.products)) {

                    throw new Error("Invalid product data.");

                }

                displayProducts(data.products, term);

            } catch (error) {

                console.warn("Live price search unavailable:", error);

                showMarketplaceSearch(term);

            }

        }


        /* =====================================
           FIND IT BUTTON
        ===================================== */

        button.addEventListener("click", function (event) {

            event.preventDefault();

            searchProducts();

        });


        /* =====================================
           ENTER KEY
        ===================================== */

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchProducts();

            }

        });


        /* =====================================
           CATEGORY CHIPS
        ===================================== */

        document.querySelectorAll(".finder-chip").forEach(chip => {

            chip.addEventListener("click", function () {

                input.value =
                    chip.dataset.search ||
                    chip.textContent.trim();

                searchProducts();

            });

        });


        /* =====================================
           FASHION FINDER SUPPORT
        ===================================== */

        window.selectFashion = function (category) {

            input.value = category;

            searchProducts();

        };


        console.log(
            "🚀 iLink Flip V8 Smart Price Hunter loaded."
        );

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initFlipV8,
            { once: true }
        );

    } else {

        initFlipV8();

    }

})(); 

