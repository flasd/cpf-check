# cpf-check
CPF generator, validator and formatter that runs both on the browser and in the server. Super small, only 1.6KB gzipped.

[![Build Status](https://travis-ci.org/husscode/cpf-check.svg?branch=master)](https://travis-ci.org/husscode/cpf-check) 
[![Coverage Status](https://coveralls.io/repos/github/husscode/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/husscode/cpf-check?branch=master) 
[![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check) 
[![npm downloads per month](https://img.shields.io/npm/dm/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)

(README disponível em português [README](https://github.com/husscode/cpf-check/blob/master/README.md)).
## Installation
Install the latest version of cpf-check:
```
npm install cpf-check --save
```
Now you can use it in your index.html
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
// window.CPF
```
Or import it as a module.
```javascript
const CPF = require('cpf-check');

// or, in ES6+

import CPF from 'cpf-check';
```
This module is [UMD](https://github.com/umdjs/umd) compliant, therefore it's compatible with  RequireJs, AMD, CommonJs 1 & 2, etc.

## API & Usage.
#### CPF() & CPF.validate();
Method signature:
```c
Boolean validate(String someCpf);
```
The default export is an method that validates CPFs. It is an alias for the `CPF.validate()`.
```javascript
import CPF, { validate } from 'cpf-check';

const someCpf = '676.754.677-10';

const { valid, error, code } = CPF(algumCpf);
// valid => true
// error => false
// code => 'VALID'

const result = CPF.validate(algumCpf);
// result => { valid: true, error: false, code: 'VALID' }

const result = validate('not-a-cpf');
// result => { valid: false, error: true, code: 'LENGTH }

const result = validate('12345678910');
// result => { valid: false, error: true, code: 'INVALID' }
```


#### CPF.generate();
Method signature:
```c
String generate(?Boolean format);
```
This method generates valid CPFs:

```javascript
import CPF, { generate } from 'cpf-check';

CPF.generate();
// '676.754.677-10'

generate();
// '676.754.677-10'

generate(false);
// '67675467710'
```

#### CPF.format();
Method signature:
```c
String format(String someCpf);
```
This method beautifies CPFs strings.
```javascript
import CPF, { format } from 'cpf-check';

const someCpf = '67675467710';

CPF.format(someCpf);
// '676.754.677-10'

format(someCpf);
// '676.754.677-10'
```

#### CPF.strip();
Method signature:
```c
String strip(String someCpf);
```
This method removes non-numeric characters from a string. It does the opposite of `format()`;
```javascript
import CPF, { strip } from 'cpf-check';

const someCpf = '676.754.677-10';

CPF.strip(someCpf);
// '67675467710'

strip(someCpf);
// '67675467710'
```

### Copyright & License

Copyright (c) 2017 [Marcel de Oliveira Coelho](https://github.com/husscode) under the [MIT License](https://github.com/husscode/cpf-check/blob/master/LICENSE.md). Go Crazy. :rocket:
