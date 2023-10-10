## Website for graphic designer **Katerina Semenova** - [HERE!](https://katerinasemenova.ru).
### My first freelance experience in creating, optimizing, indexing, customizing and launching a site from the moment I first saw the layout and interacted with the designer to putting it into production.

### In the course of work, some features  were reworked:
 * At first, the slider was written from scratch, without a third-party library, but there were problems with the dynamic
implementation of images in adaptive, so I had to completely rewrite the application for the new slider carousel.

 * Multiple attempts to optimize the bundle (in particular, the static image format: AVIF, PNG, tinyPNG through Figma
compressors) led to the fact that we choose WEBP format. I managed to reduce the size of the bundle from 56 mb
to 13 mb, i.e. 4.3 times. And yet the work continues!

**UPDATE:** Some interesting atrefact we faced: as we`ve used WEBP format for imgs and not every hosting provider supports this format by default(or without any additional settings) so we had some problems with images like this:
**SOLVED:** By recompiling slides to WEBP using Figma`s plugin, rebuilding project and redeploy.

 * Some minor scrolling changes to the #about section. At first, the function was also written, but after some tests, i decided to use a third-party library.


# Currently/Priority tasks:
- [X] Indexing (Favicon? Meta description still does not work) - Work is underway to index the site on Yandex.ru and Google.com through the appropriate services<BR>
  <b>Indexing has ended and i got favicon set. Meta set</b>
- [ ] Permanent bundle optimising - Further code optimization using webpack-bundler-analyzer tools.\
- [ ] Adding/rewriting some content<BR>
  <b>In progress. Two more blocks have been added</b>
- [X] Some space adding between blocks(?)<BR>
  <b>Done and set</b>
- [X] Adding dots to slides(?)<BR>
<b>Together with the designer, it was decided to add these points for best UX</b>

# New idea of migration/rebuilding project using Vite + yarn.


# Library usage:
 * react-response-carousel
 * react-scroll
 * react-helmet(?) - will depend on the results of indexing - <b>No needed</b>
