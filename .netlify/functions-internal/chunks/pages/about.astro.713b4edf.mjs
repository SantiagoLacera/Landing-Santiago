import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro.37205a1e.mjs';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './404.astro.39f7c7ed.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro("https://www.santiago-lacera.online/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumb astro-ILHXCYM7" aria-label="breadcrumb">
  <ul class="astro-ILHXCYM7">
    <li class="astro-ILHXCYM7">
      <a href="/" class="astro-ILHXCYM7">Home</a>
      <span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
    </li>
    ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li class="astro-ILHXCYM7">
            <span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"} astro-ILHXCYM7`, "class")} aria-current="page">
              
              ${breadcrumb}
            </span>
          </li>` : renderTemplate`<li class="astro-ILHXCYM7">
            <a${addAttribute(`/${breadcrumb}`, "href")} class="astro-ILHXCYM7">${breadcrumb}</a>
            <span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
          </li>`
  )}
  </ul>
</nav>`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/components/Breadcrumbs.astro");

const $$Astro = createAstro("https://www.santiago-lacera.online/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about", "class": "astro-KH7BTL4R" })}
  ${maybeRenderHead($$result2)}<main id="main-content" class="astro-KH7BTL4R">
    <section id="hero" class="astro-KH7BTL4R">
      ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-KH7BTL4R" })}
      <map name="room" class="astro-KH7BTL4R">
        <area shape="circle" coords="610,390,35" href="/welcome" alt="Next" class="astro-KH7BTL4R">
      </map>
      <div class="flex justify-end astro-KH7BTL4R">
        <img alt="Room-1" usemap="#room" class="h-auto w-[650px] astro-KH7BTL4R" src="/assets/room-character-1.png" id="room-one">
      </div>
      <p class="astro-KH7BTL4R">Click on the "NEXT" sign, for the following slide</p>
    </section>
  </main>

  ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-KH7BTL4R" })}

  
` })}`;
}, "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/about.astro");

const $$file = "C:/Users/Raviel007/Desktop/Web_Dev/Astro-Project/Santiago-Landing/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Breadcrumbs as $, about as a };
