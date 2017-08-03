# cpf-check
CPF Validator, Generator e Formatter, runs both on browser and server-side. Incredibly Small 2.2KB (890bytes gziped!!).
### Instalation
Add the latest version of cpf-check to your `package.json`.
```
npm install cpf-check --save
```
Then you can use it in your index.html
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
```
Or, you can import it in your module bundler of choice:
```javascript
const CPF = require('cpf-check');

// or

import CPF from 'cpf-check';
```

## Usage & API
### CPF(String): Boolean
The main export is a function that validates CPF's.
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
```javascript
CPF.generate();
// '676.754.677-10'
```

### CPF.parse(String): String
```javascript
const myText = 'Hey, my CPF is 676.754.677-10';

CPF.parse(myText);
// '676.754.677-10'
```

### CPF.format(String): String
```javascript
const myCpf = '67675467710';

CPF.format(myCpf);
// '676.754.677-10'
```

### CPF.strip(String): String
```javascript
const myCpf = '676.754.677-10';

CPF.strip(myCpf);
// '67675467710'
```
### Copyright and License

Copyright (c) 2017 [Marcel Coelho](https://github.com/flasd) under the [MIT license](https://github.com/flasd/cpf-check/blob/master/LICENSE.md)