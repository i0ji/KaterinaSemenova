# Website for graphic designer **Katerina Semenova** - [HERE!](https://katerinasemenova.ru).

## My first freelance experience in creating, optimizing, indexing, customizing and launching a site from the moment I first saw the layout and interacted with the designer to putting it into production.

<br />

> Current version: 2.2.1/20.10.23

### Current/Priority tasks:

- [ ] Permanent bundle optimising;

### Done:

- [X] Adding `PurgeCSS`;
- [X] Indexing;<br>
  <b> - Indexing has ended, and I got favicon set</b>;
- [X] Adding/rewriting some content;<br>
  <b>- In progress. Two more blocks added</b>;
- [X] Some space adding between blocks;<br>
  <b> - Done and set</b>;
- [X] Adding dots to slides;<br>
- [X] Adding lazy loading;
- [X] Migration/rebuilding project using vite + yarn;
- [X] Sizing images/dynamic images;<br>
  <b> - Abandoned this idea because low-resolution images look frankly terrible even on small devices. We choose
  quality</b>

### Migration results and issues:

* Easy alias addition - refactored in tsconfig and vite.config <br>
* Rather large load speed increase in bundling/building/devserver (increase approximately 4-5 times);<br>
* Issue with fonts in the bundle(404 face-font not found);<br>
  <b>- Solved by adding alias to `vite.config.ts` and '@' in my `_fonts.scss` in the beginning of the source to
  font;</b><br>

* Strange loading speed indicators: issues with images size, `TBT`, `LCP`, and overall efficiency as a result;
  <b>- still optimising/testing;</b><br>

* Multiple errors in dependencies (`TS17004`, `TS1259`);<br>
  <b>- Setting the tsconfig.app.json;</b><br>

### Some features were reworked:

* At first, the slider was written from scratch, without a third-party library, but there were problems with the dynamic
  implementation of images in adaptive, so I had to completely rewrite the application for the new slider carousel.

* Multiple attempts to optimize the bundle (in particular, the static image format: `AVIF`, `PNG`, `tinyPNG`
  through `Figma`
  compressors) led to the fact that we choose `WEBP` format. I managed to reduce the size of the bundle from 56 mb
  to 13 mb, i.e., 4.3 times. And yet the work continues!

> [!IMPORTANT]
**UPDATE:** Some interesting image-artefact we faced: as we have used 'WEBP' format for images and not every hosting
> provider supports this format by default (or without any additional settings) so we had some problems with displaying
> images.<BR>**SOLVED:** By reloading problematic image files on the server;

* Some minor scrolling changes to the `#about` section. At first, the function was also written, but after some tests, I
  decided to use a third-party library;

### Plugins usage:

* vite-plugin-minify;
* gh-pages (for visual testing and coordination with designer);

### Library usage:

* react-response-carousel;
* react-scroll;