# cpf-check
Validador, gerador e formatdor de CPFs que funciona tanto em navegadores quanto no servidor. Incrívelmente pequeno, apenas 2.2KB (890Bytes GZiped!)

[![Build Status](https://travis-ci.org/flasd/cpf-check.svg?branch=master)](https://travis-ci.org/flasd/cpf-check) 
[![Coverage Status](https://coveralls.io/repos/github/flasd/cpf-check/badge.svg?branch=master)](https://coveralls.io/github/flasd/cpf-check?branch=master) 
[![npm version](https://badge.fury.io/js/cpf-check.svg)](https://www.npmjs.com/package/cpf-check) 
[![npm downloads per month](https://img.shields.io/npm/dm/cpf-check.svg)](https://www.npmjs.com/package/cpf-check)

(README dispoível em inglês [aqui](https://github.com/flasd/cpf-check/blob/master/README.md)).
## Instalação
Instale a ultima versão do cpf-check:
```
npm install cpf-check --save
```
Agora você pode usar ele no seu `index.html`
```html
<script type="text/javascript" src="./node_modules/cpf-check/dist/cpf.min.js"></script>
// window.CPF
```
Ou, pode importa-lo como um módulo:
```javascript
const CPF = require('cpf-check');

// ou, em ES6+

import CPF from 'cpf-check';
```
O module obedece a especificação [UMD](https://github.com/umdjs/umd), portanto ele é compativel com RequireJs, AMD, CommonJs 1 & 2, etc.


## API & Usage
#### CPF() & CPF.validate();
Assinatura do método:
```c
Boolean validate(String CPF);
```
O método `CPF()` é um pseudônimo para o método `CPF.validate()`. O exportado por padrão é uma função que valida CPFs.

```javascript
const CPF = require('cpf-check')
const algumCPF = '676.754.677-10';

CPF(algumCPF);
// true

CPF.validate(algumCPF);
// true
```


#### CPF.generate();
Assinatura do método:
```c
String generate();
```
Este método gera CPFs validos.

```javascript
CPF.generate();
// '676.754.677-10'
```


#### CPF.parse();
Assinatura do método:
```c
String parse(String text);
```
Analisar uma String em busca de CPFs usando RegEx:
```javascript
const umText = 'Hey, my CPF is 676.754.677-10';

CPF.parse(umText);
// '676.754.677-10'
```

#### CPF.format();
Assinatura do método:
```c
String format(String rawCPF);
```
Este método formata Strings de CPFs:
```javascript
const umCpf = '67675467710';

CPF.format(umCpf);
// '676.754.677-10'
```

#### CPF.strip();
Assinatura do método:
```c
String strip(String umCPF);
```
Esté método tira quaisquer simbolos do CPF, deixando apenas os números. Ele faz o oposto do método `format()`.
```javascript
const meuCpf = '676.754.677-10';

CPF.strip(meuCpf);
// '67675467710'
```

### Copyright e Licença

Copyright (c) 2017 [Marcel de Oliveira Coelho](https://github.com/flasd) sob a [licença MIT](https://github.com/flasd/cpf-check/blob/master/LICENSE.md). :rocket:
