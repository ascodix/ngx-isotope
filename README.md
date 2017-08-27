# [Isotope](https://isotope.metafizzy.co/) module for Angular

[![npm version](https://badge.fury.io/js/angular2-isotope.svg)](https://www.npmjs.com/package/ngx-isotope)

> ngx-isotope is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Consuming the library](#consuming-the-library)
4. [Configuration](#configuration)

## Getting Started

## Installation instructions

To install this library, run:

```bash
$ npm install ngx-isotope --save
```

If you're using angular-cli add `isotope-layout`, `masonry-layout` and `imagesloaded` to your file configuration angular-cli.json:
```json
"scripts": [
  "../node_modules/masonry-layout/dist/masonry.pkgd.min.js",
  "../node_modules/isotope-layout/dist/isotope.pkgd.min.js",
  "../node_modules/imagesloaded/imagesloaded.pkgd.js"
]
```

## Consuming the library

Import `IsotopeModule` from your Angular `AppModule`:

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library
import { IsotopeModule } from 'ngx-isotope';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IsotopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```typescript
 @Component({
   selector: 'my-component',
   template: `
     <isotope-grid>
       <isotope-item *ngFor="let item of items">{{item.name}}</isotope-item>
     </isotope>
 })
 class MyComponent {
   items = [
     {name: 'Item 1'},
     {name: 'Item 2'},
     {name: 'Item 3'},
     {name: 'Item 4'},
     {name: 'Item 5'},
   ]
 }
 ```

## Configuration

### Options
Read about Isotope options here: https://isotope.metafizzy.co/options.html

The options attribute takes an object with the following properties:
* itemSelector: string;
* layoutMode: LayoutModes;
* percentPosition: boolean;
* stamp: string;

#### Examples

Inline object:
```html
<isotope-grid [options]="{ itemSelector: '.grid-item' }"></isotope-grid>
```

From parent component:
```javascript
import { IsotopeOptions } from 'ngx-isotope';

public myOptions: IsotopeOptions = {
  itemSelector: '.grid-item'
};
```
```html
<isotope-grid [options]="myOptions"></isotope-grid>
```

## License

MIT © [Albuisson Stéphane](mailto:stephane.albuisson@gmail.com)
