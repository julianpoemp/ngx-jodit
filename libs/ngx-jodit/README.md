# ngx-jodit v3.x

Angular wrapper for <a href="https://github.com/xdan/jodit">Jodit</a> WYSIWYG editor. It supports Angular >= 16 and jodit v4.

## Compatibility table

<table>
<thead><tr><th>Ngx-jodit</th><th>Jodit</th><th>Angular</th><th>Type</th><th>Demo</th><th>Readme</th></tr></thead>
<tbody>
<tr>
<td style="text-align:center;"><a href="https://www.npmjs.com/package/ngx-jodit"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit"></a></td><td>v4</td><td>>= v16</td><td>Standalone</td><td><a href="https://github.julianpoemp.com/ngx-jodit/3.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/main/libs/ngx-jodit/README.md">Readme</a></td>
</tr>
<tr>
<td style="text-align:center;"><a href="https://www.npmjs.com/package/ngx-jodit/v/2x"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit/2x"></a></td><td>v4</td><td>v12 - v15</td><td>Module</td><td><a href="https://github.julianpoemp.com/ngx-jodit/2.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/tree/v2.x/libs/ngx-jodit/README.md">Readme</a></td>
</tr>
<tr>
<td style="text-align:center;"><a href="https://www.npmjs.com/package/ngx-jodit/v/1x"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit/1x"></a></td><td>v3</td><td>v12 - v15</td><td>Module</td><td><a href="https://github.julianpoemp.com/ngx-jodit/1.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/tree/v1.x/libs/ngx-jodit/README.md">Readme</a></td>
</tr>
</tbody>
</table>

## Jodit Pro, Multi & OEM

For Jodit Pro, Multi and OEM you have to install the jodit-pro package and another Angular library: [ngx-jodit-pro](https://github.com/julianpoemp/ngx-jodit/tree/v3.x/libs/ngx-jodit-pro). For more information click [here](https://github.com/julianpoemp/ngx-jodit/tree/v3.x/libs/ngx-jodit-pro).

## Demo

You can find a demo for ngx-jodit 3.x  [here](https://github.julianpoemp.com/ngx-jodit/3.x/).

## Options

All [options](https://xdsoft.net/jodit/docs/classes/config.Config.html) from Jodit are supported.

## Installation

1. Make sure that the latest jodit v4 and ngx-jodit v3 is installed:
   ```
   npm install jodit@4 --save
   ```
2. ```
   npm install ngx-jodit@3 --save
   ```
3. Add jodit stylesheet to your app's styles in angular.json (or project.json for
   Nx).
     ```
     ...
      ,
      "styles": [
        ...
        "node_modules/jodit/es2021/jodit.min.css",
        ...
      ],
     ...
    ```
4. Add `NgxJoditComponent` to the `imports` array in your app.module.ts (it's standalone):
   ```
   @NgModule({
    ...
    imports: [
      ...,
      NgxJoditComponent
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

6. Each toolbar element by Jodit v4 ESM version is considered as plugin. While basic plugins are imported automatically, you have to import other plugins manually. See section "How to import plugins".

7. Now you can use the component. See [example here](https://github.com/julianpoemp/ngx-jodit/blob/v3.x/apps/demo/src/app/app.component.ts).

  - Without AngularForms:

       ```angular2html
         <ngx-jodit [(value)]="value" [options]="options"></ngx-jodit>
       ```

  - With AngularForms (make sure to import AngularForms):

      ```angular2html
        <ngx-jodit [(ngModel)]="value" [options]="options"></ngx-jodit>
      ```

## How to import plugins

Jodit v4 automatically imports a [basic set of plugins](https://github.com/xdan/jodit/blob/main/tools/utils/resolve-alias-imports.ts#L59) and the English language. If you want to use more you have to import it separately. For example:

```typescript
import {Jodit} from "jodit";
import 'jodit/esm/plugins/add-new-line/add-new-line.js';
import 'jodit/esm/plugins/fullsize/fullsize.js';
import de from 'jodit/esm/langs/de.js'; // <-- make sure "compilerOptions.allowSyntheticDefaultImports" is set to "true" in tsconfig.json

Jodit.lang.de = de;

//..
```

You can import your plugins wherever you want, e.g. in a global ts file that's imported anyway like index.ts or main.ts files.


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

You can bind events using the Angular way, e.g.:

```angular2html

<ngx-jodit (joditChange)="onChange($event)"></ngx-jodit>
```

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
