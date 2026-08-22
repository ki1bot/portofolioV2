import { ASSET_BASE_URL, PERSONAL_INFO } from "../lib/portfolio";

export const HERO_ROLES = ["Fullstack Website", "Mobile Application"];

export const NAV_ITEMS = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Portofolio",
    target: "projects",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    value: "Rifqi Susanto",
    href: PERSONAL_INFO.linkedin,
    image: `${ASSET_BASE_URL}/media/linkedin.png`,
  },
  {
    label: "GitHub",
    value: "@ki1bot",
    href: PERSONAL_INFO.github,
    image: `${ASSET_BASE_URL}/media/github.png`,
  },
  {
    label: "Instagram",
    value: "@ki1bot_",
    href: PERSONAL_INFO.instagram,
    image: `${ASSET_BASE_URL}/media/instagram.png`,
  },
  {
    label: "YouTube",
    value: "@kibot7659",
    href: PERSONAL_INFO.youtube,
    image: `${ASSET_BASE_URL}/media/youtube.png`,
  },
  {
    label: "Spotify",
    value: "kibot",
    href: PERSONAL_INFO.spotify,
    image: `${ASSET_BASE_URL}/media/Spotify.png`,
  },
  {
    label: "TikTok",
    value: "@kiibott_",
    href: PERSONAL_INFO.tiktok,
    image: `${ASSET_BASE_URL}/media/tiktok.png`,
  },
];
