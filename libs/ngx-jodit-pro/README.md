# ngx-jodit-pro v2.x

Angular wrapper for <a href="https://xdsoft.net/jodit/pro/">Jodit PRO</a> WYSIWYG editor. It supports Angular >= 12 and jodit-pro beta. You need a license key in order to use this wrapper. <a href="https://xdsoft.net/jodit/pro/#compare">Buy here.</a>

## License

This package does not contain the source code of Jodit Pro. You have to install it as described here (scroll down). This
wrapper is licensed under MIT License, Jodit Pro is licensed
seperately ([see license](https://xdsoft.net/jodit/pro/license/)).

## Compatibility table

<table>
<thead><tr><th>Ngx-jodit-pro</th><th>Jodit Pro</th><th>Angular</th><th>Type</th><th>Demo</th><th>Readme</th></tr></thead>
<tbody>
<tr>
<td style="text-align:center;"><a href="https://www.npmjs.com/package/ngx-jodit-pro"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit-pro"></a></td><td>v4.x</td><td>>= v16</td><td>Standalone</td><td><a href="https://github.julianpoemp.com/ngx-jodit-pro/3.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/main/libs/ngx-jodit-pro/README.md">Readme</a></td>
</tr>
<tr>
<td style="text-align:center;"><a href="https://www.npmjs.com/package/ngx-jodit-pro/v/2x"><img alt="npm" src="https://img.shields.io/npm/v/ngx-jodit-pro/2x"></a></td><td>v4.x</td><td>v12 - v15</td><td>Module</td><td><a href="https://github.julianpoemp.com/ngx-jodit-pro/2.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/v2.x/libs/ngx-jodit-pro/README.md">Readme</a></td>
</tr>
<tr>
<td style="text-align:center;">v1.x <i>(deprecated)</i></td><td>v1.x</td><td>v12 - v15</td><td>Module</td><td><a href="https://github.julianpoemp.com/ngx-jodit-pro/1.x/">Demo</a></td><td><a href="https://github.com/julianpoemp/ngx-jodit/blob/v1.x/libs/ngx-jodit-pro/README.md">Readme</a></td>
</tr>
</tbody>
</table>

## Demo

You can find a demo of ngx-jodit-pro 3.x [here](https://github.julianpoemp.com/ngx-jodit-pro/2.x/).

## Remarks

ESM for Jodit-Pro is not currently working. See [issue 34](https://github.com/julianpoemp/ngx-jodit/issues/34). You have to include the es2021 build (see installation).

## Installation

1. Make sure that jodit-pro@4 AND jodit@4 is installed:
   ```
   npm install jodit-pro@4 jodit@4 --save
   ```
2. ```
   npm install ngx-jodit-pro@2x --save
   ```
3. Add the following paths to your app's styles and scripts in angular.json (or project.json for
   Nx):
   ```
   ...
    ,
    "styles": [
      "node_modules/jodit-pro/es2021/jodit.min.css",
      ...
    ],
    "scripts": [
      "node_modules/jodit-pro/es2021/jodit.min.js",
      ...
    ],
   ...
   ```

4. Add `NgxJoditProModule` to the `imports` array in your app.module.ts:
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

6. Each toolbar element by Jodit v4 is considered as plugin. While basic plugins are imported automatically, you have to import other plugins manually. See section "How to import plugins".

7. Now you can use the component. See [example here](https://github.com/julianpoemp/ngx-jodit/tree/v2.x/apps/demo-pro).

- Without AngularForms:

     ```angular2html
       <ngx-jodit-pro [(value)]="value" [options]="options"></ngx-jodit-pro>
     ```

- With AngularForms (make sure to import AngularForms):
  - Template driven

    ```angular2html
      <ngx-jodit-pro [(ngModel)]="value" [options]="options"></ngx-jodit-pro>
    ```
  - Reactive
    ```angular2html
      <form [formGroup]="formGroup">
        <ngx-jodit-pro [options]="options" formControlName="editor"></ngx-jodit-pro>
      </form>
    ```

If you are facing any issues have a look on [Troubleshooting](https://github.com/julianpoemp/ngx-jodit/blob/main/libs/ngx-jodit/README.md#troubleshooting) first. Create an issue if it's not solved.

## How to import plugins

You can install plugins from Jodit and Jodit Pro. For more information about Jodit Pro plugins see [Jodit Pro Docs](https://xdsoft.net/jodit/pro/docs/).

1. Open folder "node_modules/jodit-pro" or "node_modules/jodit" depending on if you want to add jodit oder jodit-pro plugins.
2. Open the plugin folder in "esm/plugins", e.g. "tune-block" in "jodit-pro".
3. Look for the main file named like the plugin e.g. "tune-block.js".
4. Import "jodit" and the path to this file in a Typescript file of your application. E.g. the Angular component that includes ngx-jodit-pro. For example:

```typescript
import "node_modules/jodit-pro/esm/plugins/tune-block/tune-block.js";

declare const Jodit: any; // <- needed because of missing ESM, see issue 34
Jodit.lang.de = de;
```

You can import your plugins wherever you want, e.g. in a global ts file that's imported anyway like index.ts or main.ts files.

Now you can apply the plugin options to ngx-jodit-pro `options` property. For example:

```typescript
import {JoditProConfig} from 'ngx-jodit-pro';
import "node_modules/jodit-pro/esm/plugins/tune-block/tune-block.js";

declare const Jodit: any; // <- needed because of missing ESM, see issue 34

options: JoditProConfig = {
  tuneBlock: {
    popup: {
      p: Jodit.atom(['align', 'tune.up', 'tune.remove', 'tune.down'])
    }
  }
}
```

### Add custom plugins

You can access the initialized Jodit from the attribute "jodit" of the NgxJoditProComponent to use the Pro API:

Any component.ts:

````Typescript
import {ViewChild} from '@angular/core';

//...
@ViewChild("joditComponent") joditComponent?: NgxJoditProComponent;

// in ngAfterViewInit
if (this.joditComponent) {
  // example:
  this.joditComponent.jodit.plugins.add("hello", () => {
    alert("hello!");
  });
}
````

Any component.html:

```HTML

<ngx-jodit-pro #joditComponent ...></ngx-jodit-pro>
```

### Options

All [options](https://xdsoft.net/jodit/docs/classes/config.Config.html) from Jodit AND JoditPro are supported. Use type "JoditProConfig" for options.

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

## Events for ngx-jodit

You can bind events using the Angular way, e.g.:

```angular2html

<ngx-jodit-pro (joditChange)="onChange($event)"></ngx-jodit-pro>
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

## Troubleshooting

- **Some of the buttons don't show any icon**<br/>Check your options if you used the correct button names. If yes, check the folder `node_modules/jodit/es2021/plugins/` for a folder named like the button you want to use. Then import the found plugin to your app as described [here](https://github.com/julianpoemp/ngx-jodit/blob/main/libs/ngx-jodit-pro/README.md#how-to-import-plugins). If that doesn't helpt look in the web console for an error message that indicates a missing plugin.
