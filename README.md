# Find Parent Dir From Bin

Finds the absolute directory path of the app that is using your node module by stepping up to the parent dir of `/node_modules`

Currently synchronous only.

## Usage

```js
const findParentDir = require('find-parent-dir-from-bin');

// Returns either the absoblute dir or null if it can't be found
const parentDir = findParentDir();
```

