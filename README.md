# Tajweed

_Tajweed-ts is [npm](https://en.wikipedia.org/wiki/Npm_(software)) package for Tajweed and Buck_

## Quran Tools for Parsing Tajweed and Buck

The npm package is to be used with the [AlQuran.cloud](https://alquran.cloud/api) and [GlobalQuran.com](http://docs.globalquran.com/API:Data/Quran_List) APIs. They are made available so you may get the most out of the APIs.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Tajweed.

```bash
npm install tajweed-ts
#or
yarn add tajweed-ts
#or
pnpm add tajweed-ts
```

## Usage

```javascript
const { Tajweed } = require("tajweed-ts");

let string = "۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"; //
let parseTajweed = new Tajweed();
let parseString = parseTajweed.parse("string", true);
console.log(parseString);
```

OR

```javascript
import "tajweed-ts/tajweed.css";
import { Tajweed } from "tajweed-ts";

function App() {
  let string = "۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"; //
  let parseTajweed = new Tajweed();
  let parseString = parseTajweed.parse(string, true);

  return <div dangerouslySetInnerHTML={{ __html: parseString }}></div>;
}

export default App;
```

OR

```typescript
import { Tajweed } from "tajweed-ts";

let string = "۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"; //
let parseTajweed = new Tajweed();
let parseString = parseTajweed.parse(string, true);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Source code is taken from https://github.com/aamirbhat382/Tajweed @aamirbhat382, moved to typescript and added few tests.
