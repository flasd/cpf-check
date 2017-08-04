# cpf-check
CPF Validator, Generator e Formatter, runs both on browser and server-side. Incredibly Small 2.2KB (890bytes gziped!!).
[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/flasd/cpf-check) [![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/flasd/cpf-check?branch=master) [![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)
(README available in portuguese in [README-pt-BR](https://github.com/flasd/cpf-check/blob/master/README-pt-BR.md)).
### Instalation
Add the latest version of cpf-check to your `package.json`.
```
npm install cpf-check --save
```
Then you can use it in your index.html
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
// window.CPF
```
Or, you can import it as a module:
```javascript
const CPF = require('cpf-check');

// or, in ES6

import CPF from 'cpf-check';
```
Works on Node, any CommonJs Env. and as an AMD modules.

## Usage & API
### CPF(String): Boolean
The main export is a function that validates CPFs.
```javascript
const CPF = require('cpf-check')
const myCpf = '676.754.677-10';

CPF(myCpf);
// true

CPF.validate(myCpf);
// true
```
The `CPF.validate()` is an alias for the `CPF()` method.

### CPF.generate(): String
Generates valid CPFs:
```javascript
CPF.generate();
// '676.754.677-10'
```

### CPF.parse(String): String
Parse CPFs from text strings:
```javascript
const myText = 'Hey, my CPF is 676.754.677-10';

CPF.parse(myText);
// '676.754.677-10'
```

### CPF.format(String): String
Format (beautify) CPF strings:
```javascript
const myCpf = '67675467710';

CPF.format(myCpf);
// '676.754.677-10'
```

### CPF.strip(String): String
Strip (uglify) CPF strings:
```javascript
const myCpf = '676.754.677-10';

CPF.strip(myCpf);
// '67675467710'
```

## PRs
And if you find something that is not working as supposed to, please, open a PR.
## Bonus!
If you're curious to know how this module works before implementing it, the source code is heavily commented! head to [src/index.js](https://github.com/flasd/cpf-check/blob/master/src/index.js) to take a look!
## Copyright and License

Copyright (c) 2017 [Marcel Coelho](https://github.com/flasd) under the [MIT license](https://github.com/flasd/cpf-check/blob/master/LICENSE.md)
