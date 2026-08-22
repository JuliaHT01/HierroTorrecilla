document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     AÑO FOOTER
     ===================================================== */

  const yearElement = document.getElementById("htCurrentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =====================================================
     VOLVER ARRIBA
     ===================================================== */

  const backToTopButton = document.getElementById("htBackToTop");

  if (backToTopButton) {

    function toggleBackToTop() {

      if (window.scrollY > 350) {
        backToTopButton.classList.add("is-visible");
      } else {
        backToTopButton.classList.remove("is-visible");
      }

    }


    window.addEventListener(
      "scroll",
      toggleBackToTop
    );


    toggleBackToTop();


    backToTopButton.addEventListener(
      "click",
      function () {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

});
