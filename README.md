# Seyte. Configuración de eSLint para NestJS

Esta configuración se debe utilizar en cada nuevo proyecto de NestJS

## Instalación y configuración

1. cd directorio-del-proyecto
2. npm i -D eslint @seyte/eslint-config-nest
3. touch .eslintrc.cjs
4. Agregar el siguiente código en .eslintrc.cjs

```js
/* eslint-env node */
module.exports = {
    extends: [
        '@seyte/eslint-config-nest'
    ],
};
```

5. Agregar un script en packague.json si no lo ha generado NestJS

```json
"lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
```

## ¿Como usar esta configuración?
   
- **Configurando el IDE** para que utilize eslint + prettier con la configuración existente en la raíz del proyecto y que cada vez que guardemos un fichero te pase el linter (eslint) y el formateador (prettier)
- **Ejecutando el comando** ```npm run lint```

## Reglas personalizadas incluidas

- @seyte/esling-plugin-nest_decorator_scope_request
  Esta regla lanza un warning cuando un Controlador, Injectable o Processor no tiene el Scope.REQUEST habilitado. Se lanza una adevertencia porque esto no siempre será necesario pero sirve de recordatorio por si nos hace falta en algún momento si utilizamos miembros de clase compartidos entre peticiones. 
  > Recordemos de que NestJS utiliza instancias únicas (singleton) en su contenedor de dependencias y se reutilizan en cada petición, por lo que si usamos miembros de clase puede haber conflicto entre una petición y otra.

## Autores

- Rubén (rgazquez)
