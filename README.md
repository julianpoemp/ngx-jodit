# ngx-jodit <a href="https://www.npmjs.com/package/ngx-jodit"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit"></a></h1>

Angular wrapper for <a href="https://github.com/xdan/jodit">Jodit</a> WYSIWYG editor. It supports Angular >= 12 and jodit >=4.0.0-beta. **Jodit v4 is still in development. PLEASE have a look an the installation instructions, there are some breaking changes in jodit v4.**

[Demo](https://julianpoemp.github.io/ngx-jodit/)

## Options

All [options](https://xdsoft.net/jodit/docs/classes/config.Config.html) from Jodit are supported.

## Installation

1. Make sure that jodit is installed:
   ```
   npm install jodit@latest --save
   ```
2. ```
   npm install ngx-jodit@beta --save
   ```
3. Add jodit stylesheet  to your app's styles in angular.json (or project.json for
   Nx).
   - For ES5:
      ```
      ...
       ,
       "styles": [
         "node_modules/jodit/es5/jodit.min.css",
         ...
       ],
      ...
      ```
   - For other (it doesn't matter which stylesheet, all for >= es2015 are the same:
     ```
      ...
       ,
       "styles": [
         "node_modules/jodit/es2015/jodit.min.css",
         ...
       ],
      ...
     ```
4. Add `NgxJoditModule` to the `imports` array in your app.module.ts:
   ```
   @NgModule({
    ...
    imports: [
      ...,
      NgxJoditModule
    ],
    ...
    })
   ```
5. Add `"skipLibCheck": true` to compilerOptions in your `tsconfig.app.json`. This is needed because the
   check fails to typing errors of the jodit package. **This is still the issue in v4**. If you know any other solution, let me know :):
   ```
   ...
     "compilerOptions": {
       ...,
       "skipLibCheck": true
     }
   ...
   ```
6. Now you can use the component
   
   ```angular2html
     <ngx-jodit [(value)]="value" [options]="options"></ngx-jodit>
   ```


## Options for ngx-jodit

<table class="table table-sm table-striped table-bordered">
  <thead>
  <tr>
    <td class="fw-bold">Name</td>
    <td class="fw-bold">Type</td>
    <td class="fw-bold">Description</td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>value</td>
    <td>two-way data-binding</td>
    <td>Updates as soon as HTML value of the editor changed. You can set your value, too.</td>
  </tr>
  <tr>
    <td>options</td>
    <td>one-way data-binding</td>
    <td>Sets options for Jodit on the fly.</td>
  </tr>
  </tbody>
</table>

## Events for ngx-jodit
<p>
  You can bind events using the Angular way, e.g.:<br/><code>&lt;ngx-jodit (joditChange)="onChange($event)">&lt;/ngx-jodit></code>
</p>
<table class="table table-sm table-striped table-bordered">
  <thead>
  <tr>
    <td class="fw-bold">Name</td>
    <td class="fw-bold">Description</td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>joditChange</td>
    <td>Triggers as soon as something of the HTML value changes.</td>
  </tr>
  <tr>
    <td>joditKeyDown</td>
    <td>Triggers as soon as a key is pressed down.</td>
  </tr>
  <tr>
    <td>joditMousedown</td>
    <td>Triggers as soon as the left mouse button is pressed.</td>
  </tr>
  <tr>
    <td>joditClick</td>
    <td>Triggers as soon as the user clicks on the editor.</td>
  </tr>
  <tr>
    <td>joditFocus</td>
    <td>Triggers as soon as Jodit gets focus.</td>
  </tr>
  <tr>
    <td>joditPaste</td>
    <td>Triggers as soon as something is pasted.</td>
  </tr>
  <tr>
    <td>joditResize</td>
    <td>Triggers as soon as the editor resizes.</td>
  </tr>
  <tr>
    <td>joditBeforeEnter</td>
    <td>Triggers as soon as enter key is pressed.</td>
  </tr>
  <tr>
    <td>joditBeforeCommand</td>
    <td>Triggers before a command is executed.</td>
  </tr>
  <tr>
    <td>joditAfterExec</td>
    <td>Triggers after a command is executed.</td>
  </tr>
  <tr>
    <td>joditAfterPaste</td>
    <td>Triggers after something pasted.</td>
  </tr>
  <tr>
    <td>joditChangeSelection</td>
    <td>Triggers as soon as selection is changed.</td>
  </tr>
  </tbody>
</table>
