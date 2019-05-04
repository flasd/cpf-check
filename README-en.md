# cpf-check
CPF generator, validator and formatter that runs both on the browser and in the server. Super small, only 447 Bytes gzipped.

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
<script type="text/javascript" src="./node_modules/cpf-check/dist/index.umd.js"></script>
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
#### CPF.validate();
Method signature:
```typescript
validate(someCpf: any): boolean;
```
```javascript
import CPF, { validate } from 'cpf-check';

const someCpf = '676.754.677-10';

CPF.validate(someCpf);
// « true

validate(someCpf);
// « true

validate('not-a-cpf');
// « false

validate('12345678910');
// « false
```


#### CPF.generate();
Method signature:
```typescript
generate(format?: boolean): string;
```
This method generates valid CPFs:

```javascript
import CPF, { generate } from 'cpf-check';

CPF.generate();
// « '67675467710'

generate(true);
// « '676.754.677-10'

generate();
// « '67675467710'
```

#### CPF.format();
Method signature:
```typescript
format(someCpf: any): string;
```
This method add punctuation to CPFs strings.
```javascript
import CPF, { format } from 'cpf-check';

const someCpf = '67675467710';

CPF.format(someCpf);
// « '676.754.677-10'

format(someCpf);
// « '676.754.677-10'

format('not-a-cpf');
// « ''
```

#### CPF.strip();
Method signature:
```typescript
strip(someCpf: any): string;
```
This method removes non-numeric characters from a string.
```javascript
import CPF, { strip } from 'cpf-check';

const someCpf = '676.754.677-10';

cpfCheck.strip(someCpf);
// « '67675467710'

strip(someCpf);
// « '67675467710'
```

### Copyright & License

Copyright (c) 2019 [Marcel de Oliveira Coelho](https://github.com/husscode) under the [MIT License](https://github.com/husscode/cpf-check/blob/master/LICENSE.md). Go Crazy. :rocket:
