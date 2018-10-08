# 🌎 in-us

`in-us` is a utility to determine if a user is in the U.S., without an HTTP connection or IP address.

It uses the browser's timezone (via [jstz](https://github.com/iansinnott/jstz) and [locale](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language) (`navigator.languages`) to infer whether someone is in U.S..
This project is inspired by [`in-eu`](https://github.com/segmentio/in-eu).

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
*/

isInUSTimezone()
// => true | false
```

### isUSLocale

```javascript
import { isUSLocale } from 'in-us'

/*
 Only uses the browser's language/locale
 e.g. en-US (english from United Staes)
*/

isUSLocale()
// => true | false
```

## Contributing

All contributions are super welcome! in-us is [MIT-licensed](./license).
