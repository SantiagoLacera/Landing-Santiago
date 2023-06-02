import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.37205a1e.mjs';
import { $ as $$Header, c as $$LinkButton, a as $$Footer, b as $$Layout } from './404.astro.a2dd1218.mjs';
/* empty css                         *//* empty css                           */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                         */
const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "author": "Santiago Lacera", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "class": "astro-J7PV25F6" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="animate__animated animate__slideInUp astro-J7PV25F6">
    <section id="hero" class="astro-J7PV25F6">
      <h1 id="head-text" class="astro-J7PV25F6">
        Welcome visitor<span id="glasses" class="astro-J7PV25F6"></span>
      </h1>
      <img src="data:," class="Room astro-J7PV25F6" alt="Main-Room">
      <p class="astro-J7PV25F6">
        It's a pleasure to have you here. Whether you stumbled upon this page by
        chance or you intentionally sought it out, I'm thrilled that you've
        arrived. This is a space dedicated to showcasing my passion for
        technology, development and web-modeling so sit back, relax, and join me
        on this exciting journey.
      </p>
      <p class="astro-J7PV25F6">
        This blog posts was developed by
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-dashed cursor-[url(http://www.rw-designer.com/cursor-extern.php?id=171267),_auto] astro-J7PV25F6", "href": "https://github.com/satnaing/astro-paper#readme" }, { "default": ($$result3) => renderTemplate`
          Satnaing
        ` })} click for more info.
      </p>
    </section>
  </main>

  ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}
` })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/index.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
