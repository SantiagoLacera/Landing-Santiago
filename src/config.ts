import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.santiago-lacera.online/",
  author: "Santiago Lacera",
  desc: "A minimal, responsive and website",
  title: "Santigo Lacera Landing",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/SantiagoLacera",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:santiagolacera251@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/14074605686",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/channels/@me",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];
