# cpf-check
CPF validator, generator and formatter that runs both in the browser and in the server. Incredibly Small 2.2KB (890bytes gziped!).

[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/flasd/cpf-check) 
[![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/flasd/cpf-check?branch=master) 
[![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check) 
[![npm downloads per month](https://img.shields.io/npm/dm/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)

(README available in portuguese in [README-pt-BR](https://github.com/flasd/cpf-check/blob/master/README-pt-BR.md)).
## Instalation
Install the latest version of cpf-check:
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

// or, in ES6+

import CPF from 'cpf-check';
```
The module is compliant with [UMD](https://github.com/umdjs/umd), so it's compatible with RequireJS, AMD, CommonJs 1 & 2, etc. :hushed:


## API & Usage
#### CPF() & CPF.validate();
Method signature:
```c
Boolean validate(String CPF);
```
The `CPF()` methods is an alias for `CPF.validate()`. The default export is a function that validates CPFs. 
```javascript
const CPF = require('cpf-check')
const someCPF = '676.754.677-10';

CPF(someCPF);
// true

CPF.validate(someCPF);
// true
```


#### CPF.generate();
Method signature:
```c
String generate();
```
This method generatres valid CPFs.

```javascript
CPF.generate();
// '676.754.677-10'
```


#### CPF.parse();
Method signature:
```c
String parse(String text);
```
Parse CPFs from text strings using RegEx:
```javascript
const myText = 'Hey, my CPF is 676.754.677-10';

CPF.parse(myText);
// '676.754.677-10'
```

#### CPF.format();
Method signature:
```c
String format(String rawCPF);
```
Format beautifies CPF strings:
```javascript
const myCpf = '67675467710';

CPF.format(myCpf);
// '676.754.677-10'
```

#### CPF.strip(String): String
Method signature:
```c
String strip(String cuteCPF);
```
Strip uglifies CPF strings: This does the oposite of the  `format()`  method.
```javascript
const myCuteCpf = '676.754.677-10';

CPF.strip(myCuteCpf);
// '67675467710'
```

### Copyright and License

Copyright (c) 2017 [Marcel de Oliveira Coelho](https://github.com/flasd) under the [MIT license](https://github.com/flasd/cpf-check/blob/master/LICENSE.md). Go Crazy. :rocket:
