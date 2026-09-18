// =========================
// COLOUR SHOWCASE
// =========================


// Get all colour buttons
const colourSwatches =
    document.querySelectorAll(".colour-swatch");


// Get the preview box
const colourPreview =
    document.getElementById("colourPreview");


// Get the colour name
const colourName =
    document.getElementById("colourName");


// Get the colour code
const colourCode =
    document.getElementById("colourCode");


// Listen for clicks on every colour
colourSwatches.forEach(function(swatch) {

    swatch.addEventListener("click", function() {


        // Get information from the clicked colour

        const selectedName =
            swatch.dataset.name;

        const selectedCode =
            swatch.dataset.code;


        // Change the preview colour

        colourPreview.style.backgroundColor =
            selectedCode;


        // Change the colour name

        colourName.textContent =
            selectedName;


        // Change the colour code

        colourCode.textContent =
            selectedCode;


        // Remove active class from all colours

        colourSwatches.forEach(function(item) {

            item.classList.remove("active");

        });


        // Make clicked colour active

        swatch.classList.add("active");

    });

});
// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING A LINK

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.querySelector(".nav-links");

        menu.classList.remove("active");

    });

});
// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .about-image, .product-card, .why-card, .colour-preview, .process-card, .project-card, .testimonial-card, .cta-content"
    );

const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
// =========================
// PRODUCT DETAILS POPUP
// =========================

const productModal =
    document.getElementById("productModal");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");


function openProduct(product) {

    if (product === "interior") {

        modalCategory.textContent =
            "INTERIOR PAINT";

        modalTitle.textContent =
            "ASCO Interior Paint";

        modalDescription.textContent =
            "Smooth, beautiful finishes designed " +
            "for bedrooms, living rooms and other " +
            "indoor spaces.";

    }


    if (product === "exterior") {

        modalCategory.textContent =
            "EXTERIOR PAINT";

        modalTitle.textContent =
            "ASCO Exterior Paint";

        modalDescription.textContent =
            "Durable exterior coatings designed " +
            "to protect surfaces while maintaining " +
            "a beautiful appearance.";

    }


    if (product === "emulsion") {

        modalCategory.textContent =
            "EMULSION PAINT";

        modalTitle.textContent =
            "ASCO Emulsion Paint";

        modalDescription.textContent =
            "Easy-to-apply paint with a smooth finish " +
            "and excellent colour coverage for " +
            "interior spaces.";

    }


    productModal.classList.add("active");

}


function closeProduct() {

    productModal.classList.remove("active");

}


// CLOSE WHEN CLICKING OUTSIDE

productModal.addEventListener(
    "click",
    function(event) {

        if (event.target === productModal) {

            closeProduct();

        }

    }
);


// CLOSE WITH ESCAPE KEY

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);
// =========================
// ASCO COLOUR CATALOGUE
// =========================
const colourCards =
    document.querySelectorAll(".colour-card");

const colourSearch =
    document.getElementById("colourSearch");

// =========================
// CHANGE SELECTED COLOUR
// =========================

colourCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const selectedName =
            card.dataset.name;

        const selectedCode =
            card.dataset.code;


        // Change preview colour

        colourPreview.style.backgroundColor =
            selectedCode;


        // Change colour name

        colourName.textContent =
            selectedName;


        // Change colour code

        colourCode.textContent =
            selectedCode;


        // Remove active state

        colourCards.forEach(function(item) {

            item.classList.remove("active");

        });


        // Add active state

        card.classList.add("active");

    });

});


// =========================
// COLOUR SEARCH
// =========================

colourSearch.addEventListener(
    "input",
    function() {

        const searchText =
            colourSearch.value
                .toLowerCase()
                .trim();


        colourCards.forEach(function(card) {

            const colourName =
                card.dataset.name.toLowerCase();


            if (
                colourName.includes(searchText)
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    }
);
// ================================
// QUOTE FORM → WHATSAPP
// ================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("quoteName").value;

        const phone =
            document.getElementById("quotePhone").value;

        const email =
            document.getElementById("quoteEmail").value;

        const paint =
            document.getElementById("quotePaint").value;

        const quantity =
            document.getElementById("quoteQuantity").value;

        const message =
            document.getElementById("quoteMessage").value;

        const whatsappMessage =
            "Hello ASCO, I would like to request a quote.%0A%0A" +
            "*Customer Details*%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A%0A" +
            "*Order Details*%0A" +
            "Paint Type: " + encodeURIComponent(paint) + "%0A" +
            "Quantity: " + encodeURIComponent(quantity) + "%0A%0A" +
            "*Project Details*%0A" +
            encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/2347030335090?text=" +
            whatsappMessage;

        window.open(whatsappURL, "_blank");

    });

}