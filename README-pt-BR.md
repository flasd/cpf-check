# cpf-check
Validador, Gerador e Formatados de CPF, roda tanto no navegador quanto no servidor. Incrívelmente pequeno, apenas 2.2KB (890bytes gziped!!).
[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/flasd/cpf-check) [![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/flasd/cpf-check?branch=master) [![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)
### Instalation
Adicione a ultima versão ao seu `package.json`.
```
npm install cpf-check --save
```
Você pode usar o script no navegador:
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
// window.CPF
```
Ou pode importa-lo como um módulo:
```javascript
const CPF = require('cpf-check');

// ou, em ES6

import CPF from 'cpf-check';
```
Funciona no Node, qualquer ambiente CommonJs e como um módulo AMD.

## Uso & API
### CPF(String): Boolean
O Objeto exportado por padrão é uma função que valida CPFs:
```javascript
const CPF = require('cpf-check')
const meuCpf = '676.754.677-10';

CPF(meuCpf);
// true

CPF.validate(meuCpf);
// true
```
O método `CPF.validate()` é um pseudônimo para o método `CPF()`.

### CPF.generate(): String
Gera CPFs válidos:
```javascript
CPF.generate();
// '676.754.677-10'
```

### CPF.parse(String): String
Parse CPFs em strings de texto:
```javascript
const meuTexto = 'Hey, my CPF is 676.754.677-10';

CPF.parse(meuTexto);
// '676.754.677-10'
```

### CPF.format(String): String
Formata CPFs:
```javascript
const meuCpf = '67675467710';

CPF.format(meuCpf);
// '676.754.677-10'
```

### CPF.strip(String): String
Limpa CPFs:
```javascript
const meuCpf = '676.754.677-10';

CPF.strip(meuCpf);
// '67675467710'
```

## PRs
Se você encontrar algo errado, não exite em abrir um PR!
## Bonus!
Se você está curioso para saber como esse módulo funciona antes de implementa-lo no seu próximo projeto, o código fonte está amplamente comentado! (Em inglês, desculpa ;) Vá para [src/index.js](https://github.com/flasd/cpf-check/blob/master/src/index.js) é confira!
## Copyright e Licença

Copyright (c) 2017 [Marcel Coelho](https://github.com/flasd) sob a [MIT license](https://github.com/flasd/cpf-check/blob/master/LICENSE.md)
