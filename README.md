# cpf-check
Gerador, validador e formatador de CPF que roda tanto no navegador quanto no servidor. Super pequeno, apenas 447 Bytes gzipped.

[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/husscode/cpf-check) 
[![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/husscode/cpf-check?branch=master) 
[![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check) 
[![npm downloads per month](https://img.shields.io/npm/dm/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)

(README available in english in [README-en](https://github.com/husscode/cpf-check/blob/master/README-en.md)).
## Instalação
Instale a última versão do cpf-check:
```
npm install cpf-check --save
```
Agora é só usá-lo no seu index.html
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/index.umd.js"></script>
// window.cpfCheck
```
Ou importa-lo como um módulo:
```javascript
const cpfCheck = require('cpf-check');

// ou, em ES6+

import cpfCheck from 'cpf-check';
```
Esse módulo é compativel com o padrão [UMD](https://github.com/umdjs/umd), portanto é compatível com o RequireJs, AMD, CommonJs 1 e 2, etc.

## API & Uso.
#### cpfCheck.validate();
Assinatura do método:
```typescript
validate(algumCpf: any): boolean;
```
```javascript
import cpfCheck, { validate } from 'cpf-check';

const algumCpf = '676.754.677-10';

cpfCheck.validate(algumCpf);
// « true

validate(algumCpf);
// « true

validate('não-cpf');
// « false

validate('12345678910');
// « false
```


#### cpfCheck.generate();
Assinatura do método:
```typescript
generate(formatar?: boolean): string;
```
Esse método gera CPFs válidos.

```javascript
import cpfCheck, { generate } from 'cpf-check';

cpfCheck.generate();
// « '67675467710'

generate(true);
// « '676.754.677-10'

generate();
// « '67675467710'
```

#### cpfCheck.format();
Assinatura do método:
```typescript
format(algumCpf: any): string;
```
Esse método adiciona pontuação a strings de CPFs.
```javascript
import cpfCheck, { format } from 'cpf-check';

const meuCpf = '67675467710';

cpfCheck.format(meuCpf);
// « '676.754.677-10'

format(meuCpf);
// « '676.754.677-10'

format('não-cpf');
// « ''
```

#### cpfCheck.strip();
Assinatura do método:
```typescript
strip(algumCpf: any): string;
```
Esse método retira caracteres não numéricos de uma string.
```javascript
import cpfCheck, { strip } from 'cpf-check';

const algumCpf = '676.754.677-10';

cpfCheck.strip(algumCpf);
// « '67675467710'

strip(algumCpf);
// « '67675467710'
```

### Copyright e Licença

Copyright (c) 2019 [Marcel de Oliveira Coelho](https://github.com/husscode) sob a [Licença MIT](https://github.com/husscode/cpf-check/blob/master/LICENSE.md). Go Crazy. :rocket:
