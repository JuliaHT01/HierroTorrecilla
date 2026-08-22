document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ================================================
       AÑO FOOTER
       ================================================ */

    const year =
      document.getElementById(
        "htCurrentYear"
      );

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }



    /* ================================================
       VOLVER ARRIBA
       ================================================ */

    const backToTop =
      document.getElementById(
        "htBackToTop"
      );


    function updateBackToTop() {

      if (!backToTop) {
        return;
      }


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



    /* ================================================
       ANIMACIONES AL HACER SCROLL
       ================================================ */

    const revealElements =
      document.querySelectorAll(
        "[data-reveal]"
      );


    if (
      "IntersectionObserver"
      in window
    ) {

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


                  observer
                    .unobserve(
                      entry.target
                    );

                }

              }
            );

          },

          {
            threshold: .12
          }

        );


      revealElements.forEach(
        function (element) {

          observer.observe(
            element
          );

        }
      );

    } else {

      revealElements.forEach(
        function (element) {

          element.classList.add(
            "is-visible"
          );

        }
      );

    }



    /* ================================================
       MENÚ MOBILE
       ================================================ */

    const menuButton =
      document.getElementById(
        "htMenuToggle"
      );


    const mobileMenu =
      document.getElementById(
        "htMobileMenu"
      );


    function closeMenu() {

      if (
        !menuButton ||
        !mobileMenu
      ) {
        return;
      }


      menuButton
        .classList
        .remove(
          "is-open"
        );


      mobileMenu
        .classList
        .remove(
          "is-open"
        );


      menuButton
        .setAttribute(
          "aria-expanded",
          "false"
        );

    }


    if (
      menuButton &&
      mobileMenu
    ) {

      menuButton.addEventListener(
        "click",
        function () {

          const isOpen =
            mobileMenu
              .classList
              .toggle(
                "is-open"
              );


          menuButton
            .classList
            .toggle(
              "is-open",
              isOpen
            );


          menuButton
            .setAttribute(
              "aria-expanded",
              String(isOpen)
            );

        }
      );


      mobileMenu
        .querySelectorAll("a")
        .forEach(
          function (link) {

            link.addEventListener(
              "click",
              closeMenu
            );

          }
        );


      window.addEventListener(
        "resize",
        function () {

          if (
            window.innerWidth > 760
          ) {

            closeMenu();

          }

        }
      );

    }



    /* ================================================
       ESC PARA CERRAR MENÚ MOBILE
       ================================================ */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          closeMenu();

        }

      }
    );



    /* ================================================
       CERRAR MENÚ SI SE HACE CLIC FUERA
       ================================================ */

    document.addEventListener(
      "click",
      function (event) {

        if (
          !menuButton ||
          !mobileMenu
        ) {
          return;
        }


        const clickedInsideMenu =
          mobileMenu.contains(
            event.target
          );


        const clickedButton =
          menuButton.contains(
            event.target
          );


        if (
          mobileMenu.classList.contains(
            "is-open"
          ) &&
          !clickedInsideMenu &&
          !clickedButton
        ) {

          closeMenu();

        }

      }
    );


  }
);
