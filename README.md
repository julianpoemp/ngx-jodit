# ngx-jodit <a href="https://www.npmjs.com/package/ngx-jodit"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit"></a></h1>

Angular wrapper for <a href="https://github.com/xdan/jodit">Jodit</a> WYSIWYG editor. It supports Angular >= 12. For Jodit v4 support go to [README of v2.x branch](https://github.com/julianpoemp/ngx-jodit/tree/v2.x).

## Compatibility table

<table>
<thead><tr><th>Ngx-jodit</th><th>Jodit</th><th>Angular</th><th>Type</th><th></th></tr></thead>
<tbody>
<tr>
<td>1.x</td><td>v3</td><td>>= v12</td><td>Module</td><td><a href="https://github.com/julianpoemp/ngx-jodit/">more Information</a></td>
</tr>
<tr>
<td>2.x</td><td>>= v4</td><td>>= v12</td><td>Module</td><td><a href="https://github.com/julianpoemp/ngx-jodit/tree/v2.x">more Information</a></td>
</tr>
<tr>
<td>3.x</td><td>>= v4</td><td>>= v16</td><td>Standalone</td><td><a href="https://github.com/julianpoemp/ngx-jodit/tree/v3.x">more Information</a></td>
</tr>
</tbody>
</table>

## Demo

You can find a demo [here](https://julianpoemp.github.io/ngx-jodit/).

## Options

All [options](https://xdsoft.net/jodit/docs/classes/config.Config.html) from Jodit are supported.

## Installation

1. Make sure that jodit@^3 is installed (v4 is still in beta and supported only with ngx-jodit >= v2, see compatibility table):
   ```
   npm install jodit@^3 --save
   ```
2. ```
   npm install ngx-jodit --save
   ```
3. Add `node_modules/jodit/build/jodit.min.css` to your app's styles in angular.json (or project.json for
   Nx):
   ```
   ...
    ,
    "styles": [
      "node_modules/jodit/build/jodit.min.css",
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
   check fails to typing errors of the jodit package. If you know any other solution, let me know :):
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
     <ngx-jodit [(value)]="value" [(options)]="options"></ngx-jodit>
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
    <td>Sets options for Jodit</td>
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
