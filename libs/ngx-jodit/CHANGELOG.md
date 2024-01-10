# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [3.0.2](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.1...ngx-jodit-3.0.2) (2024-01-10)


### Features

* **ngx-jodit:** new type for Jodit options: JoditConfig ([5949571](https://github.com/julianpoemp/ngx-jodit/commit/5949571ca3ab29de885292e0cbf948a6fd5a658c))



## [3.0.1](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.10...ngx-jodit-3.0.1) (2024-01-08)


### Features

* **ngx-jodit:** Jodit v4 was released as stable version. ngx-jodit v3 now stable. ([503db2a](https://github.com/julianpoemp/ngx-jodit/commit/503db2adea178177551160863715b4baa2f28c9c))


### BREAKING CHANGES

* **ngx-jodit:** If you update from the latest beta version to the
stable version you don't have to do anything. If you update from
ngx-jodit v1 you should read the installation instructions of ngx-jodit
v2 AND the breaking changes of Jodit v4:
https://github.com/xdan/jodit/releases/tag/4.0.1



## [1.0.8](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.7...ngx-jodit-1.0.8) (2023-09-26)


### Bug Fixes

* **ngx-jodit:** [(value)] still resets caret position ([1b3a7a0](https://github.com/julianpoemp/ngx-jodit/commit/1b3a7a0a4e47faa491c3fe4c2f98d7abb8c7fa44))



## [1.0.7](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.6...ngx-jodit-1.0.7) (2023-09-22)


### Bug Fixes

* **ngx-jodit-pro:** [(value)] not working correctly, e.g. resets cursor ([bf4a223](https://github.com/julianpoemp/ngx-jodit/commit/bf4a223dabeda5dc91cb1b1456804296da9aeefa))
* **ngx-jodit:** [(value)] not working correctly, e.g. resets cursor ([1821283](https://github.com/julianpoemp/ngx-jodit/commit/182128372ffb21b4be5b7b6907b063800e71a9ce))



## [1.0.6](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-1.0.5...ngx-jodit-1.0.6) (2023-09-18)



## [1.0.5](https://github.com/julianpoemp/ngx-jodit/compare/ngx-jodit-3.0.0-beta.5...ngx-jodit-1.0.5) (2023-09-18)


### Bug Fixes

* **ngx-jodit:** add missing joditKeyUp event ([32cf560](https://github.com/julianpoemp/ngx-jodit/commit/32cf560452a623543ad178bc1f2dd93357ecd9ca))
* **ngx-jodit:** ngModel [(value)] not working for outside changes ([35f0e59](https://github.com/julianpoemp/ngx-jodit/commit/35f0e5906781fd9b1665d875485a1e9c6811ab47))



## 1.0.4 (2023-06-17)



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
