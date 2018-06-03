# cpf-check
Gerador, validador e formatador de CPF que roda tanto no navegador quanto no servidor. Super pequeno, apenas 1.6KB gzipped.
[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/flasd/cpf-check) 
[![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/flasd/cpf-check?branch=master) 
[![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check) 
[![npm downloads per month](https://img.shields.io/npm/dm/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)

(README available in english in [README-en](https://github.com/flasd/cpf-check/blob/master/README-en.md)).
## Instalação
Instale a última versão do cpf-check:
```
npm install cpf-check --save
```
Agora é só usá-lo no seu index.html
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
// window.CPF
```
Ou, importe como um módulo:
```javascript
const CPF = require('cpf-check');

// ou, em ES6+

import CPF from 'cpf-check';
```
Esse módulo é compativel com o padrão [UMD](https://github.com/umdjs/umd), portanto é compatível com o RequireJs, AMD, CommonJs 1 e 2, etc.

## API & Uso.
#### CPF() & CPF.validate();
Assinatura do método:
```c
Boolean validate(String algumCpf);
```
O export padrão é um método que valida CPFs. O método `CPF()` é um pseudônimo do método `CPF.validate()`. O e 
```javascript
import CPF, { validate } from 'cpf-check';

const algumCpf = '676.754.677-10';

CPF(algumCpf);
// true

CPF.validate(algumCpf);
// true

validate(algumCpf);
// true
```


#### CPF.generate();
Assinatura do método:
```c
String generate(?Boolean formatar);
```
Esse método gera CPFs válidos.

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
Assinatura do método:
```c
String format(String algumCpf);
```
Esse método embeleza strings de CPFs.
```javascript
import CPF, { format } from 'cpf-check';

const meuCpf = '67675467710';

CPF.format(meuCpf);
// '676.754.677-10'

format(meuCpf);
// '676.754.677-10'
```

#### CPF.strip();
Assinatura do método:
```c
String strip(String algumCpf);
```
Esse método retira caracteres não numéricos de uma string. Faz o oposto do método `format()`;
```javascript
import CPF, { strip } from 'cpf-check';

const algumCpf = '676.754.677-10';

CPF.strip(algumCpf);
// '67675467710'

strip(algumCpf);
// '67675467710'
```

### Copyright e Licença

Copyright (c) 2017 [Marcel de Oliveira Coelho](https://github.com/flasd) sob a [Licença MIT](https://github.com/flasd/cpf-check/blob/master/LICENSE.md). Go Crazy. :rocket:
