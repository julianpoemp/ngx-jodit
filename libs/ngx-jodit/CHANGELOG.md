# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# [3.0.0-beta.10](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.9...ngx-jodit-3.0.0-beta.10) (2023-11-15)


### Features

* **ngx-jodit:** ngx-jodit uses the ESM version of Jodit ([d8b06d7](https://github.com/julianpoemp/ngx-jodit/commit/d8b06d7fdb34320bda58b9b95bcd3ee24d4aa8c5)), closes [#18](https://github.com/julianpoemp/ngx-jodit/issues/18)


### BREAKING CHANGES

* **ngx-jodit:** ngx-jodit v3 now uses the ESM version of jodit. That's
why there are some breaking changes because the way to import the module
and jodit plugins changed. Please have a look on the new installation
instructions.



# [3.0.0-beta.9](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.8...ngx-jodit-3.0.0-beta.9) (2023-10-13)


### Bug Fixes

* **ngx-jodit:** missing icons for toolbar buttons ([c265329](https://github.com/julianpoemp/ngx-jodit/commit/c26532988d92b3ad402d62327452d779c5ccfc81))


### BREAKING CHANGES

* **ngx-jodit:** You have to add the Jodit JS file to the list of your
app's scripts attribute. See installation instructions for more
information



# [3.0.0-beta.8](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.7...ngx-jodit-3.0.0-beta.8) (2023-09-26)


### Bug Fixes

* **ngx-jodit:** [(value)] still resets caret position ([63b3942](https://github.com/julianpoemp/ngx-jodit/commit/63b39423148a157cbbc6e82ad537668edeb288b3))



# [3.0.0-beta.7](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.6...ngx-jodit-3.0.0-beta.7) (2023-09-22)


### Bug Fixes

* **ngx-jodit:** [(value)] not working correctly, e.g. resets cursor ([7ef29e8](https://github.com/julianpoemp/ngx-jodit/commit/7ef29e81cf6656128326fee1354d67cf03be1d69))



# [3.0.0-beta.6](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.5...ngx-jodit-3.0.0-beta.6) (2023-09-18)


### Bug Fixes

* **ngx-jodit:** fix ngModel [(value)] not working with outside changes ([36380cb](https://github.com/julianpoemp/ngx-jodit/commit/36380cbce5c8a58fdb1032e4c0934172a174cd10))



# [3.0.0-beta.5](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.4...ngx-jodit-3.0.0-beta.5) (2023-06-30)


### Features

* **ngx-jodit:** add events joditKeyUp and joditMouseup ([81a08c6](https://github.com/julianpoemp/ngx-jodit/commit/81a08c66dc2eb9b79e047c2608294fa0f8e25e43))
* **ngx-jodit:** add type for options ([47660de](https://github.com/julianpoemp/ngx-jodit/commit/47660de12399e4510502f996cd7779c38bfa6660))
