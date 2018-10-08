<p align="center">
  <strong>🌎 in-us</strong>
</p>

<p align="center">
  Utility to determine if a user is in the United States<br />
  without an HTTP request or IP address.
</p>

<p align="center">
  <a href="https://unpkg.com/in-us/src/index.js">
    <img src="https://img.badgesize.io/https://unpkg.com/in-us/src/index.js?compression=gzip&amp;label=in--us&cache=2">
  </a>
  <a href="https://www.npmjs.com/package/in-us">
    <img src="https://img.shields.io/npm/v/in-us.svg?maxAge=3600&label=in--us&colorB=007ec6">
  </a>
</p>
<br/>

It uses the browser's timezone (via [jstz](https://github.com/iansinnott/jstz) and [locale](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language) (`navigator.languages`) to infer whether someone is in United States.
This project is inspired by [`in-eu` by Segment](https://github.com/segmentio/in-eu).

## Getting Started

### Installation

Install with npm:

```bash
npm install --save in-us
```

Or with yarn:

```bash
yarn add in-us
```

## Usage

### inUS

```javascript
import inUS from 'in-us'

inUS()
// => true | false
```

### isInUSTimezone

```javascript
import { isInUSTimezone } from 'in-us'

/*
  Only checks the browser timezone.
  e.g. America/Chicago
*/

isInUSTimezone()
// => true | false
```

### isUSLocale

```javascript
import { isUSLocale } from 'in-us'

/*
  Only uses the browser's language/locale
  e.g. es-US (spanish from United Staes)
*/

isUSLocale()
// => true | false
```

## Contributing

All contributions are super welcome! in-us is [MIT-licensed](./license).
