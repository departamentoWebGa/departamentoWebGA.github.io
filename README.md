# Documentación Departamento Web

1. [Introducción](#introducción)
2. [HTML](#html)
   1. [index.html](#indexhtml)
   2. [Carpeta departament](#carpeta-departament)
      - [web.html](#webhtml)
3. [Assets](#assets)
   1. [JavaScript](#javascript)
      1. [main.js](#mainjs)
         - [Recargar Select](#recargar-select)
         - [Escoger Opción a Previsualizar](#escoger-opción-a-previsualizar)
         - [Descargar](#descargar)
      2. [copy.js](#copyjs)
      3. [style.js](#stylejs)
   2. [Estilos CSS](#estiloscss)
   3. [Fuentes](#fuentes)
   4. [Imágenes](#imágenes)
   5. [Bootstrap](#bootstrap)

## Introducción

En este proyecto, crearemos un repositorio para almacenar componentes genéricos destinados a los departamentos de Delivery (componentes de canvas) y también al departamento de Web (shortcodes, secciones HTML, etc.).

## HTML

### index.html

Este será el archivo HTML principal, donde, a través de funciones, añadiremos el contenido del departamento que deseemos mediante un selector.

### Carpeta departament

En esta carpeta, guardaremos los archivos HTML de los departamentos que contienen esos componentes.

#### web.html

En este archivo, almacenaremos los componentes del departamento de Web.

## Assets

### JavaScript

#### main.js

Dentro de main.js encontramos diferentes tipos de funciones:

##### Escoger Opción a Previsualizar

Con este código, logramos visualizar solo aquel componente que queremos previsualizar. Su funcionamiento es el siguiente.

Primero seleccionamos el select de departamento y cuando haya una modificación en él, veremos si tiene un valor. En caso de tener un valor, esperará 100 ms.
Después de esperar, seleccionamos todos los select que hay dentro del departamento escogido y cuando haya un cambio en ellos, añadimos la clase d-none al texto de introducción, para que no se muestre.
Seleccionamos todos los data-department con el valor del departamento y con un forEach los recorremos. Dentro de este bucle tenemos un condicional que, si alguna no tiene la clase d-none, se la añade.
Fuera de ese forEach seleccionamos el valor del option que hemos escogido y seleccionamos el data-option con el valor recogido anteriormente y le quitamos la clase d-none para que se muestre.

##### Descargar

Este código te permite descargar la hoja de estilos con la declaración de las fuentes y también el root de la universidad escogida. También puedes descargar un archivo ZIP con las fuentes necesarias.

#### copy.js

Dentro de este archivo encontramos varias funciones.

Con la primera función `codificar()`, sustituiremos los elementos de apertura y de cierre de las etiquetas HTML. Y le tendremos que pasar un parámetro que será el texto que queramos modificar.

La siguiente función es `precode()`. Esta función escogerá el valor del select de shortcode. Una vez escogido el valor, seleccionaremos el id de la sección que sea igual al valor para obtener el código HTML. Pasamos la función por ese texto seleccionado y una vez estén los cambios, añadirá el texto a un `pre` que tendrá un id igual a la sección con un -code añadido.

La última función será `copy()`. La usaremos para copiar el código de la sección.

#### style.js

En este documento, lo que haremos será cambiar los estilos de la página gracias a las siguientes funciones:
Una de ellas es `logoChange()`, con esta función cambiaremos el logo del header y del footer según la universidad.
Otra es `styleChange()`, con la que cambiaremos la hoja de estilos según la universidad.
Y la última función es `styleUniversity()`, donde si el select de la universidad tiene un valor que será el id de la universidad, hará las llamadas de las otras dos funciones pasando los parámetros del id, código y nombre de la universidad.

### Estilos CSS

En esta carpeta tendremos unos estilos genéricos de la página `style-main.css` y también los estilos correspondientes a cada universidad `style-general-ID.css`.

### Fuentes

Las fuentes tendrán una división por universidad y también en esta carpeta tendremos un zip con las fuentes.

### Imágenes

Las imágenes tienen una primera división: Iconos y logos. Dentro de los logos tendremos una división de cada universidad y luego dentro tendremos el logo en color y en blanco.

Los logos tendrán también una división por universidad y los logos que sean de uso general de la página no tendrán carpetas.

### Bootstrap

Para este proyecto usamos Bootstrap 5.3.2.
