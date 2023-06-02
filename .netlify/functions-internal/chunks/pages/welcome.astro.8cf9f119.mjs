import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.37205a1e.mjs';
import { $ as $$Header, c as $$LinkButton, b as $$Layout, a as $$Footer } from './404.astro.39f7c7ed.mjs';
import { $ as $$Breadcrumbs } from './about.astro.713b4edf.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-232M4WXW" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about", "class": "astro-232M4WXW" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="astro-232M4WXW">
    <section id="hero" class=" astro-232M4WXW">
      ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-232M4WXW" })}
      <map name="room" class="astro-232M4WXW">
        <area shape="circle" coords="45,370,35" href="/about" alt="Back" class="astro-232M4WXW">
        <area shape="circle" coords="650,390,35" href="/education" alt="Next" class="astro-232M4WXW">
      </map>
      <div class="animate__animated animate__slideInRight flex justify-end astro-232M4WXW">
        <img alt="Room-2" usemap="#room" class="h-auto w-[700px] astro-232M4WXW" src="/assets/room-character-2.png" id="room-two">
      </div>
      <p class="astro-232M4WXW">
        To learn more about Colombia, click ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://colombia.travel/en", "class": "astro-232M4WXW" }, { "default": ($$result3) => renderTemplate`
          <img alt="Colombia-icon" src="/assets/colombia-icon.png" class="w-10 hover:animate-pulse astro-232M4WXW" id="col">
        ` })}
        it won't disappoint you ;)
      </p>
    </section>
  </main>
` })}

${renderComponent($$result, "Footer", $$Footer, { "class": "astro-232M4WXW" })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/welcome.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/welcome.astro";
const $$url = "/welcome";

export { $$Welcome as default, $$file as file, $$url as url };
