# Galexia Fade Effects

This package contains the JavaScript and CSS to make elements fade in on a website.

It is in use by both [Andromeda](https://github.com/Galexia-Agency/Andromeda) and [Pegasus](https://github.com/Galexia-Agency/Pegasus-Nuxt-Base).

## How to install

`npm install https://github.com/Galexia-Agency/fade-effects`

To use in an ESM context:

```js
import * as fadeEffects from 'fade-effects'

fadeEffects
```

Import the SCSS file:

```scss
@use 'fade-effects/index.scss'
```

Or just add the files to the HTML

```html
<head>
    <link rel="stylesheet" href="/node_modules/fade-effects/index.css">
</head>
<body>
    <script src="/node_modules/fade-effects/index.js"></script>
</body>
```

## How to use

*I would not recommend fading in elements that are above the fold, as this could affect LCP and subsequently SEO rankings.*

* Add the `fade-in` class to an element that you want to fade in. By default, the element will fade from opacity 0 to opacity 1 when it is visible in the viewport.
* You can get the element to fade in a direction of your choosing by adding the `up`, `right`, and `left` classes. These classes can either be added to the element itself, or a child of the `fade-in` class. The `left` and `right` fade in classes will only be active on screens above 782px in width, otherwise they will fade in like normal.
* You can add a delay to the fade, for example, if you want to stagger a heading and content load. There are some helper classes, `delay025`, `delay05`, `delay075`, and `delay1`. These classes are in seconds, so `delay025` is 0.25s. You can also set the `--delay` css variable on the element if you need a different delay duration.
* You can adjust the speed of the fade effect by setting the `--speed` css variable. By default, the fade will take 1.2s.

# Development

Run `pnpm i && pnpm lefthook install` to set up your local development environment.
