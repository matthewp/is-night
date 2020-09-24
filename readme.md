# is-night

Is it night time?

```js
const isNight = require('is-night');

const eightOhClock = new Date(2020, 9, 15, 20, 0, 0);
isNight(eightOhClock); // true

const threeFiftyNine = new Date(2020, 9, 15, 3, 59, 0);
isNight(threeFiftyNine); // false
```

## Install

```shell
npm install is-night
```

## License

BSD-2-Clause