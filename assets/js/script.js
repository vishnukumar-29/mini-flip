'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}



  document.addEventListener("DOMContentLoaded", function () {
      const INITIAL_DAYS = 30;
      const INITIAL_HOURS = 24;
      const INITIAL_MINUTES = 59;
      const INITIAL_SECONDS = 0;

      const getTotalSeconds = (d, h, m, s) =>
        d * 24 * 3600 + h * 3600 + m * 60 + s;

      let totalSeconds = getTotalSeconds(
        INITIAL_DAYS,
        INITIAL_HOURS,
        INITIAL_MINUTES,
        INITIAL_SECONDS
      );

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      function updateCountdown() {
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');

        if (totalSeconds > 0) {
          totalSeconds--;
        } else {
          // Restart the countdown
          totalSeconds = getTotalSeconds(
            INITIAL_DAYS,
            INITIAL_HOURS,
            INITIAL_MINUTES,
            INITIAL_SECONDS
          );
        }
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    });

    // add to cart
      const addToCartBtn = document.getElementById("add-to-cart");
    const cartCount = document.getElementById("cart-count");
    const cartIcon = document.getElementById("cart-icon");
    const productCard = document.getElementById("product-card");
    const cartModal = document.getElementById("cart-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");

    let isItemInCart = false;

    addToCartBtn.addEventListener("click", () => {
      if (!isItemInCart) {
        cartCount.textContent = "1";
        isItemInCart = true;
      }
    });

    cartIcon.addEventListener("click", () => {
      if (isItemInCart) {
        // Remove old cloned product if any
        const existingClone = modalContent.querySelector(".showcase-container");
        if (existingClone) existingClone.remove();

        // Clone product
        const clone = productCard.cloneNode(true);
        const cloneBtn = clone.querySelector(".add-cart-btn");
        cloneBtn.textContent = "Order Now"; // Replace text
        cloneBtn.disabled = true;

        modalContent.appendChild(clone);
        cartModal.classList.add("show");
        document.body.style.overflow = "hidden"; // Disable scroll
      }
    });

    closeModal.addEventListener("click", () => {
      cartModal.classList.remove("show");
      document.body.style.overflow = "auto"; // Enable scroll
    });

    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) {
        cartModal.classList.remove("show");
        document.body.style.overflow = "auto"; // Enable scroll
      }
    });



    // hot offer