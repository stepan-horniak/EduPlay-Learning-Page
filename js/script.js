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
  }

  //===========================================================
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)
  //===========================================================
}
addEventListener("load", windowLoaded)
