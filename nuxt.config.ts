import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  head: {
    title: "nuxt-typescript-tailwindcss-template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: [],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  modules: [],
  tailwindcss: {
    exposeConfig: true,
    jit: true,
    viewer: false
  }
};

export default config;
