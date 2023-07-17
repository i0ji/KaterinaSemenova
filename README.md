## Website for graphic designer **Katerina Semenova** - [HERE!](https://katerinasemenova.ru).
### - My first freelance experience in creating, optimizing, indexing, customizing and launching a site from the moment I first saw the layout and interacted with the designer to putting it into production.

### - In the course of work, some features  were reworked:
* At first, the slider was written from scratch, without a third-party library, but there were problems with the dynamic
  implementation of images in adaptive, so I had to completely rewrite the application for the new slider carousel.

* Multiple attempts to optimize the bundle (in particular, the static image format: AVIF, PNG, tinyPNG through Figma
  compressors) led to the fact that we choose WEBP format. I managed to reduce the size of the bundle from 56 mb
  to 13 mb, i.e. 4.3 times. And yet the work continues!

* Some minor scrolling changes to the #about section. At first, the function was also written, but after some tests, i decided to use a third-party library.


### - Currently/Priority tasks:
- [ ] Indexing (Favicon? Meta description still does not work) - Work is underway to index the site on Yandex.ru and Google.com through the appropriate services.
- [ ] Permanent bundle optimising - Further code optimization using webpack-bundler-analyzer tools. (Maybe "treeshake? What is that!?)
- [ ] Adding/rewriting some content
- [ ] Some space adding between blocks(?)
- [ ] Adding dots to slides(?)

### - Library usage:
* react-response-carousel
* react-scroll
* react-helmet(?) - will depend on the results of indexing