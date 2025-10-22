"usestrict"
function windowLoaded() {
  //===================================
  function clickActions(e) {
    const el = e.target
    //==============burger menu active =====
    if (el.closest(".header__burger")) {
      const burgerEl = document.querySelector(".header__burger")
      const burgerMenuNavEl = document.querySelector(".header__nav")
      burgerEl.classList.toggle("active")
      burgerMenuNavEl.classList.toggle("active")
      if (burgerEl.classList.contains("active"))
        document.body.style.overflow = "hidden"
      else document.body.style.overflow = "auto"
    }
    //=========== change theme ======================
    if (el.closest(".header__theme")) {
      const toggleBtn = document.querySelector(".header__theme")
      const body = document.body
      // При натисканні — перемикання
      body.classList.toggle("dark-theme")
      const isDark = body.classList.contains("dark-theme")
    }

    //========================================================
  }
  addEventListener("click", clickActions)

  //===========================================================
  function handleScreenChange(e) {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    //=============header burger menu============

    const headerRowContainer = document.querySelector(".header__row")
    const headerNavContainer = document.querySelector(".header__nav")
    const headerAppContainer = document.querySelector(".header__app")

    if (screenWidth <= 767.98) {
      if (headerRowContainer && headerNavContainer && headerAppContainer) {
      }
      headerNavContainer.append(headerAppContainer)
    } else {
      headerRowContainer.append(headerAppContainer)
    }

    const exploreButton = document.querySelector(".info-explore__button")
    const exploreInfoContainer = document.querySelector(".explore__info")
    const exploreImage = document.querySelector(".explore__image")
    const exploreMainContainer = document.querySelector(".explore__row")

    if (screenWidth <= 650) {
      if (
        exploreButton &&
        exploreInfoContainer &&
        exploreImage &&
        exploreMainContainer
      ) {
      }
      exploreInfoContainer.append(exploreImage)
      exploreInfoContainer.append(exploreButton)
    } else {
      exploreMainContainer.append(exploreImage)
    }

    const subscriptionContainer = document.querySelector(".subscription__email")
    const subscriptionLabel = document.querySelector(
      ".email-subscription__label"
    )
    const subscriptionButton = document.querySelector(
      ".email-subscription__button"
    )
    if (screenWidth <= 479.98) {
      if (subscriptionContainer && subscriptionLabel && subscriptionButton) {
      }
      subscriptionContainer.append(subscriptionButton)
    } else {
      subscriptionLabel.append(subscriptionButton)
    }
  }

  //===========================================================
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)
  //===========================================================

  const swiper = new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 30,
  })
}
addEventListener("load", windowLoaded)
