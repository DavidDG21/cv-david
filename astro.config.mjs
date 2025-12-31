// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  site: 'https://DavidDG21.github.io',
  base: '/cv-david/',

  vite: {
    plugins: [tailwindcss()]
  }
});