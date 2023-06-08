import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro.37205a1e.mjs';
import { $ as $$Header, d as $$Hr, a as $$Footer, b as $$Layout } from './404.astro.bf8fcbc3.mjs';
import { $ as $$Breadcrumbs$1 } from './about.astro.d18909f4.mjs';
/* empty css                              */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                           *//* empty css                           */
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$d = createAstro("https://www.santiago-lacera.online/");
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \`\${getPanelHeight(accordionItem)}px\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \`\${getPanelHeight(toggledAccordionItem)}px\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \`accordion-item\${index + 1}\`)
    accordionItemPanel.setAttribute('id', \`item\${index + 1}\`)

    accordionItemHeader.setAttribute('aria-controls', \`item\${index + 1}\`)
    accordionItemPanel.setAttribute('aria-labelledby', \`accordion-item\${index + 1}\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`], ["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \\\`\\\${getPanelHeight(accordionItem)}px\\\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \\\`\\\${getPanelHeight(toggledAccordionItem)}px\\\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \\\`accordion-item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('id', \\\`item\\\${index + 1}\\\`)

    accordionItemHeader.setAttribute('aria-controls', \\\`item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('aria-labelledby', \\\`accordion-item\\\${index + 1}\\\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`])), maybeRenderHead($$result), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Accordion.astro");

const $$Astro$c = createAstro("https://www.santiago-lacera.online/");
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="accordion__item">
  <h3>
    <button id="accordion-header-1" class="accordion__header" aria-expanded="false" aria-controls="accordion-panel-1" onclick="toggleAccordionItem()">
      ${header}
      <svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      </svg>
    </button>
  </h3>
  <div id="accordion-panel-1" role="region" class="accordion__panel" aria-labelledby="accordion-header-1">
    <div class="panel__inner">
      ${renderSlot($$result, $$slots["default"])}
    </div>
  </div>
</li>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/AccordionItem.astro");

const $$Astro$b = createAstro("https://www.santiago-lacera.online/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumbs" aria-label="Breadcrumbs">
  <ol>
    ${renderSlot($$result, $$slots["default"])}
  </ol>
</nav>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Breadcrumbs.astro");

const $$Astro$a = createAstro("https://www.santiago-lacera.online/");
const $$BreadcrumbsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const { href = "#", label = "Breadcrumb", currentPage = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="breadcrumbs__item">
  ${currentPage ? renderTemplate`<span>${label}</span>` : renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`}
</li>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/BreadcrumbsItem.astro");

const $$Astro$9 = createAstro("https://www.santiago-lacera.online/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Card;
  const { url = "#", img = "https://fakeimg.pl/640x360", title = "Default title", footer = "Your name" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card">
  <div class="card__image">
    <img${addAttribute(img, "src")} alt="">
  </div>
  <div class="card__content">
    <h3>
      <a${addAttribute(url, "href")}>${title}</a>
    </h3>
    <p>
      ${renderSlot($$result, $$slots["default"], renderTemplate`Default description.`)}
    </p>
    <small>
      ${footer}
    </small>
  </div>
</div>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Card.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$8 = createAstro("https://www.santiago-lacera.online/");
const $$DarkMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$DarkMode;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled' ? enableDarkMode() : disableDarkMode()
  })
<\/script>`], ["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled' ? enableDarkMode() : disableDarkMode()
  })
<\/script>`])), maybeRenderHead($$result));
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/DarkMode.astro");

const $$Astro$7 = createAstro("https://www.santiago-lacera.online/");
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Media;
  const { class: classNames, src = "https://shorturl.at/tCPS2", alt = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(classNames, "class")}${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Media.astro");

const $$Astro$6 = createAstro("https://www.santiago-lacera.online/");
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Modal;
  const { triggerId, title, closeText = "Close" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="modal" role="dialog"${addAttribute(triggerId, "aria-labelledby")}>
  <div class="modal__inner">
    <div class="modal__content">
      <h3 tabindex="-1">
        ${title}
      </h3>
      ${renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`)}
    </div>
    <div class="modal__close">
      <button>${closeText}</button>
    </div>
  </div>
</div>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Modal.astro");

const $$Astro$5 = createAstro("https://www.santiago-lacera.online/");
const $$Notification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Notification;
  const { type = "default", role = "none", ariaLive = "off" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`notification type-${type}`, "class")}${addAttribute(role, "role")}${addAttribute(ariaLive, "aria-live")}>
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <p><strong>Message:</strong> This is a notification!</p>
  `)}
</div>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Notification.astro");

const $$Astro$4 = createAstro("https://www.santiago-lacera.online/");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    currentPage = "1",
    totalPages = "12"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="pagination" aria-label="Pagination">
  <ul class="pagination__list">
    <li>
      ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")} aria-label="Go to the first page">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>` : renderTemplate`<span class="disabled">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>`}
    </li>
    <li>
      ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(`Go back to ${previousPage}`, "aria-label")}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path>
            </svg>
          </a>` : renderTemplate`<span class="disabled">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path>
            </svg>
          </span>`}
    </li>
    <li>
      <span>Page ${currentPage} of ${totalPages}</span>
    </li>
    <li>
      ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(`Go to ${nextPage}`, "aria-label")}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path>
            </svg>
          </a>` : renderTemplate`<span class="disabled">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path>
            </svg>
          </span>`}
    </li>
    <li>
      ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")} aria-label="Go to the last page">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>` : renderTemplate`<span class="disabled">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>`}
    </li>
  </ul>
</nav>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/Pagination.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://www.santiago-lacera.online/");
const $$SkipLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLinks;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="skip-links">
  <a href="#main-content">Skip to main content</a>
</div>

<script type="module">
  // variables
  const skipLink = document.querySelector('.skip-links a')

  // execution
  skipLink.addEventListener('keydown', (event) => {
    if (!event.target.closest('a')) return
    const key = event.key

    if (key !== 'Enter') return
    event.preventDefault()
    const target = event.target.getAttribute('href')

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target)
      targetElement.setAttribute('tabindex', '-1')
      targetElement.focus()
    } else if (!document.querySelector(target) && document.querySelector('h1')) {
      const h1 = document.querySelector('h1')
      h1.setAttribute('tabindex', '-1')
      h1.focus()
    } else {
      console.warn('SkipLinks are not set, either missing an h1 or main content id on the page.')
    }
  })
<\/script>`])), maybeRenderHead($$result));
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/accessible-astro-components/SkipLinks.astro");

const $$Astro$2 = createAstro("https://www.santiago-lacera.online/");
const $$ContentMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex justify-center py-10 opacity-80 hover:opacity-100 astro-LONFRJQF">
  <div class="container astro-LONFRJQF">
    <div class="md:grid-cols-2 grid grid-cols-1 astro-LONFRJQF">
      ${!reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg astro-LONFRJQF", "src": imgSrc })}` : ""}
      <div class="space-content flex flex-col justify-center astro-LONFRJQF">
        ${renderSlot($$result, $$slots["default"])}
      </div>
      ${reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "background rounded-lg astro-LONFRJQF", "src": imgSrc })}` : ""}
    </div>
  </div>
</section>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/components/ContentMedia.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.santiago-lacera.online/");
const $$ScrollObserver = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollObserver;
  return renderTemplate(_a || (_a = __template(["<script>\n  {\n    const root = document.documentElement;\n    root.setAttribute('data-is-scrolling-up', 'false');\n    root.setAttribute('data-is-bottom', 'false');\n    root.setAttribute('data-is-top', 'true');\n  }\n<\/script>\n\n"])));
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/node_modules/astro-scroll-observer/ScrollObserver.astro");

const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-AID3SR62" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "activeNav": "projects", "class": "astro-AID3SR62" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="headline astro-AID3SR62">
    <section id="hero" class="astro-AID3SR62">
      ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs$1, { "class": "astro-AID3SR62" })}
      <div id="project-hero" class="rounded-xl bg-cover bg-bottom bg-no-repeat astro-AID3SR62">
        <p class="header astro-AID3SR62">
          Throughout my journey as an IT major, I have embarked on various
          projects that have challenged me to think creatively, innovate, and
          deliver high-quality solutions. Whether it's developing robust web
          applications, creating intuitive user interfaces, or implementing
          cutting-edge technologies, I have always strived for excellence.
        </p>
      </div>

      <h2 class="justify-end bg-gradient-to-r from-[#007aff] to-[#dee2e6] bg-clip-text text-transparent sm:my-7 sm:justify-start sm:text-3xl astro-AID3SR62">
        Company website
      </h2>
      <div id="company-website" class="inset-0 mb-10 rounded-md border-2 border-cyan-600 bg-[url('/assets/horses-background.gif')] bg-cover bg-no-repeat pb-2 shadow-md astro-AID3SR62">
        <a href="https://santiagolacera.github.io/Company-Website-Template/" class="astro-AID3SR62">
          ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/assets/company-website.png", "reverseImg": true, "class": "astro-AID3SR62" })}
        </a>
        <p class="backOutline animate__animated animate__slideInDown astro-AID3SR62">
          The website features a clean and modern design with a fixed navigation
          menu at the top of the page. This company provides privates lessons
          for house riding, the homepage includes sections for services, team
          members, testimonials, and a contact form.
        </p>
      </div>
      <div class="bg-transparent p-10 astro-AID3SR62">
        ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-AID3SR62" })}
      </div>
      <h2 class="bg-gradient-to-r from-[#eae6e3] to-[#7f9593] bg-clip-text text-transparent sm:my-7 sm:justify-end sm:text-3xl astro-AID3SR62">
        Personal website
      </h2>

      <div id="personal-website" class="inset-0 z-10 mb-10 rounded-md border-2 border-[#eae6e3] bg-[url('/assets/personal-background.webp')] bg-cover pb-2 pt-5 shadow-md astro-AID3SR62">
        <a href="https://santiagolacera.github.io/Lu-Martinez-Design/" class="astro-AID3SR62">
          ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/assets/personal-website.png", "reverseImg": true, "class": "astro-AID3SR62" })}
        </a>
        <p class="backOutline animate__animated animate__slideInDown astro-AID3SR62">
          The website opens with a visually stunning home page that immediately
          captivates visitors and what better than a personal website this is a
          live website for an interior designer in Colombia which is starting
          company and this website is allowing her to show her products and
          services and you can too.
        </p>
      </div>
      <div class="bg-transparent p-10 astro-AID3SR62">
        ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-AID3SR62" })}
      </div>
      <h2 class="text-[color:#609966] sm:my-7 sm:justify-start sm:text-3xl astro-AID3SR62">
        <span class="text-[#f9e2af] astro-AID3SR62">./</span>Terminal
      </h2>

      <div id="terminal" class="inset-0 z-10 mb-10 rounded-md border-2 border-green-500 bg-[url('/assets/terminal-background.gif')] shadow-md astro-AID3SR62">
        <a href="https://santiagolacera.github.io/Terminal-SL/" class="astro-AID3SR62">
          ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/assets/terminal.png", "reverseImg": true, "class": "astro-AID3SR62" })}
        </a>
        <p class="backOutline animate__animated animate__slideInDown astro-AID3SR62">
          The website provides a brief introduction to "Myself", including
          different commands you can use and a description of its functionality.
          It then provides a detailed my career and my future ideals.
        </p>
      </div>
    </section>
    ${renderComponent($$result2, "ScrollObserver", $$ScrollObserver, { "class": "astro-AID3SR62" })}
  </main>
  ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-AID3SR62" })}
` })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/projects.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
