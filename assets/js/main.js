document.addEventListener("DOMContentLoaded", function () {


  /* =====================================================
     AÑO DEL FOOTER
     ===================================================== */

  const year =
    document.getElementById("htCurrentYear");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* =====================================================
     BOTÓN VOLVER ARRIBA
     ===================================================== */

  const backToTop =
    document.getElementById("htBackToTop");


  function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 420) {

      backToTop.classList.add(
        "is-visible"
      );

    } else {

      backToTop.classList.remove(
        "is-visible"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateBackToTop,
    {
      passive: true
    }
  );


  updateBackToTop();


  if (backToTop) {

    backToTop.addEventListener(
      "click",
      function () {

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }
    );

  }


  /* =====================================================
     REVEAL AL HACER SCROLL
     ===================================================== */

  const elements =
    document.querySelectorAll(
      "[data-reveal]"
    );


  const observer =
    new IntersectionObserver(

      function (entries) {

        entries.forEach(
          function (entry) {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.12
      }

    );


  elements.forEach(
    function (element) {

      observer.observe(
        element
      );

    }
  );

});
