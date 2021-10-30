# @react-lit/portal

Appends a new DOM node to the end of the `document.body` and renders it's
child React tree into it. Useful to break out of the DOM hierarchy to prevent
parent styles from clipping or disturbing content (e.g. popovers, dropdowns
and modals).

## Installation

```bash
$ npm i @react-lit/portal
# or
$ yarn add @react-lit/portal
```

## Example

```js
import * as React from 'react';
import { Portal } from "@react-lit/portal";

function Example() {
  return (
    <Portal>
      <div>I'm inside a portal!</div>
    </Portal>
  );
}
```

## Development

(1) Install dependencies

```bash
$ npm i
# or
$ yarn
```

(2) Run initial validation

```bash
$ ./Taskfile.sh validate
```

(3) Run tests in watch-mode to validate functionality.

```bash
$ ./Taskfile test -w
```

---

_This project was set up by @jvdx/core_
