import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brightexits.github.io/launchbigbrands',
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/confirmed/') // Exclude thank you pages from sitemap
    })
  ],
  build: {
    format: 'directory', // Creates /page/ instead of /page.html
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
