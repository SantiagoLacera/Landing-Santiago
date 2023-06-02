import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.37205a1e.mjs';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './404.astro.8195c6d3.mjs';
import { $ as $$Breadcrumbs } from './about.astro.74178f17.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-UW5KDBXL" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "activeNav": "contact", "class": "astro-UW5KDBXL" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="astro-UW5KDBXL">
    <section id="hero" class="astro-UW5KDBXL">
      ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-UW5KDBXL" })}
      <p class="astro-UW5KDBXL">Any questions or concern contact me here 👇</p>
      <div class="feedback-card astro-UW5KDBXL">
        <div class="feedback-header astro-UW5KDBXL">SEND FEEDBACK</div>
        <form action="https://api.web3forms.com/submit" method="POST" class="feedback-body astro-UW5KDBXL" id="myForm">
          <input type="hidden" name="access_key" value="f77c8d23-fc77-4b93-91b4-c243ef8b752e" class="astro-UW5KDBXL">

          <input type="text" name="name" required placeholder="Name" class="feedback-body__name astro-UW5KDBXL">
          <input type="text" name="phone" required placeholder="Phone #" class="feedback-body__phone astro-UW5KDBXL">
          <input type="email" name="email" required placeholder="Email" class="feedback-body__email astro-UW5KDBXL">
          <textarea name="message" required placeholder="Send me a message here..." class="feedback-body__message astro-UW5KDBXL"></textarea>
          <input type="hidden" name="redirect" value="https://www.santiago-lacera.online/" class="astro-UW5KDBXL">

          <button type="submit" class="feedback-body__submit astro-UW5KDBXL">Submit Form</button>
        </form>
      </div>
    </section>
  </main>
  ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-UW5KDBXL" })}
` })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/contact.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
