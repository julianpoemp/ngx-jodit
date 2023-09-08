# ngx-jodit-pro v1.x <a href="https://www.npmjs.com/package/ngx-jodit-pro"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit-pro"></a></h1>

Angular wrapper for <a href="https://xdsoft.net/jodit/pro/">Jodit PRO</a> WYSIWYG editor. It supports Angular >= 12. You need a license key in order to use this wrapper. <a href="https://xdsoft.net/jodit/pro/#compare">Buy here.</a>

## License
This package does not contain the source code of Jodit Pro. You have to install it as described here (scroll down). This wrapper is licensed under MIT License, Jodit Pro is licensed seperately ([see license](https://xdsoft.net/jodit/pro/license/)).

## Compatibility table

<table>
<thead><tr><th>Ngx-jodit-pro</th><th>Jodit Pro</th><th>Angular</th><th>Type</th><th></th></tr></thead>
<tbody>
<tr>
<td>1.x</td><td>v1.x</td><td>>= v12</td><td>Module</td><td><a href="https://github.com/julianpoemp/ngx-jodit/tree/main/libs/ngx-jodit-pro/README.md">more information</a></td>
</tr>
<tr>
<td>2.x</td><td>v2.x</td><td>>= v12</td><td>Module</td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/v2.x/libs/ngx-jodit-pro/README.md">more information</a></td>
</tr>
<tr>
<td>3.x</td><td>v2.x</td><td>>= v16</td><td>Standalone</td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/v3.x/libs/ngx-jodit-pro/README.md">more information</a></td>
</tr>
</tbody>
</table>

## Demo

The demo for ngx-jodit-pro is not available. You can find a demo of ngx-jodit (not Pro!) [here](https://julianpoemp.github.io/ngx-jodit/).

## Installation

1. Make sure that jodit@^3 is installed (v4 is still in beta and supported only with ngx-jodit >= v2, see compatibility table):
   ```
   npm install jodit@^3 jodit-pro@^1 --save
   ```
   jodit@^3 is needed for typings.
2. ```
   npm install ngx-jodit-pro --save
   ```
3. Add `node_modules/jodit-pro/build/jodit.css` to your app's styles in angular.json (or project.json for
   Nx):
   ```
   ...
    ,
    "styles": [
      "node_modules/jodit-pro/build/jodit.css",
      ...
    ],
   ...
   ```
   ```
4. Add `node_modules/jodit-pro/build/jodit.js` to your app's scripts in angular.json (or project.json for
   Nx):
   ```
   ...
    ,
    "scripts": [
          "node_modules/jodit-pro/build/jodit.js"
      ...
    ],
   ...
   ```
5. Add `NgxJoditProModule` to the `imports` array in your app.module.ts:
   ```
   @NgModule({
    ...
    imports: [
      ...,
      NgxJoditProModule
    ],
    ...
    })
   ```
6. Now you can use the component

   ```angular2html
     <ngx-jodit-pro [(value)]="value" [options]="options" #joditComponent></ngx-jodit-pro>
   ```

## Usage

### Using Jodit Pro API

### Use Pro plugins

At the moment each Pro plugin you want to use must be imported into you angular.json/project.json scripts and styles array. For example the tune-block plugin:

```json
...
styles: [
  ... (after jodit css file)...,
  "node_modules/jodit-pro/build/plugins/tune-block/tune-block.css",
],
scripts: [
  ... (after jodit js file) ...,
  "node_modules/jodit-pro/build/plugins/tune-block/tune-block.js",
]
...
```
After that change restart your angular app. Now you can apply the plugin options to ngx-jodit-pro `options` property.

#### Add custom plugins

You can access the initialized Jodit from the attribute "jodit" of the NgxJoditProComponent to use the Pro API:

Any component.ts:
````Typescript
import {ViewChild} from '@angular/core';

//...
@ViewChild("joditComponent") joditComponent?: NgxJoditProComponent;

// in ngAfterViewInit
if (this.joditComponent){
   // example:
   this.joditComponent.jodit.plugins.add("hello", ()=>{
       alert("hello!");
   });
}
````

Any component.html:
```HTML
<ngx-jodit-pro #joditComponent ...></ngx-jodit-pro>
```

### Options

All [options](https://xdsoft.net/jodit/docs/classes/config.Config.html) from Jodit are supported.

### Options for ngx-jodit

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

### Events for ngx-jodit
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
    <td>joditKeyUp</td>
    <td>Triggers as soon as a key is released.</td>
  </tr>
  <tr>
    <td>joditMousedown</td>
    <td>Triggers as soon as the left mouse button is pressed.</td>
  </tr>
  <tr>
    <td>joditMouseup</td>
    <td>Triggers as soon as the left mouse button is released.</td>
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
