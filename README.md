## Website for graphic designer **Katerina Semenova** - [HERE!](https://katerinasemenova.ru).
### My first freelance experience in creating, optimizing, indexing, customizing and launching a site from the moment I first saw the layout and interacted with the designer to putting it into production.
### Current version: 2.0.0/10.10.23


### in the course of work, some features  were reworked:
 * At first, the slider was written from scratch, without a third-party library, but there were problems with the dynamic
implementation of images in adaptive, so I had to completely rewrite the application for the new slider carousel.

 * Multiple attempts to optimize the bundle (in particular, the static image format: AVIF, PNG, tinyPNG through Figma
compressors) led to the fact that we choose WEBP format. I managed to reduce the size of the bundle from 56 mb
to 13 mb, i.e. 4.3 times. And yet the work continues!

**UPDATE:** Some interesting image-artefact we faced: as we've used WEBP format for imgs and not every hosting provider supports this format by default(or without any additional settings) so we had some problems with displaying images.

**SOLVED:** By reloading problematic image files on server.

 * Some minor scrolling changes to the #about section. At first, the function was also written, but after some tests, i decided to use a third-party library.

# Migration/rebuilding project using vite + yarn

### migration results and issues:
* Got some issues with fonts(404 face-font not found) **->** solved by adding viteTSconfigPaths and setting vite.config.ts: adding the path alias;
* Got strange loading speed indicators: issues with images size, TBT, LCP, and overall effiency as a result **->** still optimising/testing;
* Multiple errors in dependencies (TS17004, TS1259) **->** setting the tsconfig.app.json
* Rather large increase in bundling/building/devserver load speed (increase approximately 4-5 times);


# Current/Priority tasks:
- [X] Indexing (Favicon? Meta description still does not work) - Work is underway to index the site on Yandex.ru and Google.com through the appropriate services;<BR>
  <b> - Indexing has ended and i got favicon set</b>
- [X] Adding/rewriting some content;<BR>
  <b>- In progress. Two more blocks have been added</b>
- [X] Some space adding between blocks;<BR>
  <b> - Done and set</b>
- [X] Adding dots to slides;<BR>
- [ ] Permanent bundle optimising;

### next to do
- [ ] Add PurgeCSS
- [X] Adding lazy loading;
- [ ] Sizing images;

### plugins usage:
 * vite-plugin-minify
 * gh-pages(for visual testing and coordination with designer)

### library usage:
 * react-response-carousel;
 * react-scroll;

