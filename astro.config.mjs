// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://lonewanderer27.github.io",
  base: "resume",
  vite: {
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '/src/styles/mixins.scss';
          `
        }
      }
    }
  }
});
