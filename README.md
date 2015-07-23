### migre-me-url

Library para minificação de URL usando o [migre.me](http://migre.me)

### Installation

    npm install migre-me-url

### Usage

Minificar

```javascript
var url = require('short-url');

shorten("https://luigifreitas.me", function(err, result){
   if (err) throw err; // Mostra se ocorreu algum erro.
   console.log(result) // http://migre.me/qThaV
})
```

### API

### shorten(url, callback)
* `url` URL completa
* `callback(err, result)` callback contendo a URL minificada
