//import {constants} from '/util/constants'

const toggleMobileNav = function () {
  const el = document.querySelector('.main-navbar')
  el.classList.toggle('hidden-sm-down')
}

/**
 * Header shows the header and also takes car of the nav (and what nav items are
 * shown based on the logged in state)
 */
export class Header {
  constructor(hostElement, contentFunction) {
    this._hostElement = hostElement
    this.addListeners()
  }

  getElement() {
    return this._hostElement
  }

  addListeners() {
    const contactEl = this._hostElement.querySelector('a[href="#contact"]')
    contactEl.addEventListener('click', function () {
      const newEvent = new CustomEvent(eventTypes.REQUEST_CONTACT_FORM, {
        bubbles: true
      })
      this._hostElement.dispatchEvent(newEvent)
    }.bind(this))

    //hide mobile nav
    const navEl = this._hostElement.querySelector('ul.main-navbar')
    navEl.addEventListener('click', function () {
     /* if (window.innerWidth < constants.BREAKPOINTS.SM)
        toggleMobileNav()*/
    }.bind(this))

    const toggleMobileNavEl = this._hostElement.querySelector('#toggleMobileNav')
    toggleMobileNavEl.addEventListener('click', toggleMobileNav)

    if (this._hostElement.querySelector('.account-toggle')) {
      //here we open and close the account dropdown for clicking on the logged in icon or the body
      const accountToggleEl = this._hostElement.querySelector(".account-toggle")
      const accountInfoEl = this._hostElement.querySelector(".account-info")

      accountToggleEl.addEventListener("click", function toggleAccount(event) {
        if ((window.getComputedStyle(accountInfoEl).display === "none")) {
          accountInfoEl.style.display = "block"
          document.addEventListener("click", function closeAccount(event) {
            accountInfoEl.style.display = "none"
            document.removeEventListener('click', closeAccount)
          })
        } else {
          accountInfoEl.style.display = "none"
        }
        event.stopPropagation()
      })
    }
  }
}

