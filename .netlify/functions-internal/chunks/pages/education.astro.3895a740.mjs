import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.37205a1e.mjs';
import { $ as $$Header, c as $$LinkButton, b as $$Layout, a as $$Footer } from './404.astro.bf8fcbc3.mjs';
import { $ as $$Breadcrumbs } from './about.astro.d18909f4.mjs';
/* empty css                               */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-MFXB7Y7I" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about", "class": "astro-MFXB7Y7I" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="astro-MFXB7Y7I">
    <section id="hero" class="astro-MFXB7Y7I">
      ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-MFXB7Y7I" })}
      <map name="room" class="hover:animate-pulse astro-MFXB7Y7I">
        <area shape="circle" coords="60,360,35" href="/welcome" alt="Back" class="astro-MFXB7Y7I">
        <area shape="circle" coords="650,370,35" href="/goodbye" alt="Next" class="astro-MFXB7Y7I">
      </map>
      <div id="selected" class="animate__animated animate__slideInRight flex justify-end astro-MFXB7Y7I">
        <img alt="Room-3" usemap="#room" class="h-auto w-[700px] astro-MFXB7Y7I" src="/assets/room-character-3.png" id="room-three">
      </div>
      <p class="astro-MFXB7Y7I">
        Learn more about UCF by visiting
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://www.ucf.edu/", "className": "hover:text-skin-accent text-transparent bg-clip-text bg-gradient-to-r  from-gray-600  to-yellow-500 text-2xl astro-MFXB7Y7I" }, { "default": ($$result3) => renderTemplate`
          <img alt="UCF" id="ucf" src="/assets/UCF-icon.png" class="w-14 hover:animate-pulse astro-MFXB7Y7I">
        ` })}
        and my previous projects by visiting
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/projects", "className": "hover:text-skin-accent underline text-[color:#00a6cc] astro-MFXB7Y7I" }, { "default": ($$result3) => renderTemplate`
          PROJECT-SECTION
        ` })}

        you can find examples of my previous projects, showcasing my technical
        skills and problem-solving abilities.
      </p>
    </section>
  </main>
` })}

${renderComponent($$result, "Footer", $$Footer, { "class": "astro-MFXB7Y7I" })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/education.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/education.astro";
const $$url = "/education";

export { $$Education as default, $$file as file, $$url as url };
