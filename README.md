Analizador de Metadatos con ANTLR4

Este proyecto es un analizador léxico y sintáctico para un lenguaje de metadatos, construido con ANTLR4 y Node.js. Permite analizar archivos de texto con metadatos estructurados, obtener su árbol de análisis sintáctico y obtener su interpretación en JavaScript.

-----------

Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Java](https://www.java.com/) (para generar el parser con ANTLR4)
- Archivo `antlr-4.13.1-complete.jar` en la raíz del proyecto (puedes descargarlo desde [aquí](https://www.antlr.org/download/antlr-4.13.1-complete.jar))

----------

Instalación

1. Clona el repositorio o descarga los archivos.

2. Instala las dependencias:
   npm install //Desde la terminal

3. Genera el parser de ANTLR4:
   npm run build //Desde la terminal
   Esto creará los archivos necesarios en la carpeta `parser/`.

----------

Formato de los archivos de entrada

El archivo de entrada debe tener la siguiente estructura (todos los textos entre comillas dobles):

nombre: "documento.pdf";
tipo: "pdf";
tamaño: 102400;
creado: 2025-05-01 10:00;
modificado: 2025-05-01 10:30;
autor: "IA Modelo";
descripcion: "Documento de prueba para la gramática de metadatos.";
etiquetas: ["documento","prueba","gramática","metadatos"];

----------

Ejecución

1. Coloca tu archivo de entrada en la raíz del proyecto (por ejemplo, `input_correcto_1.txt`).

2. Ejecuta el analizador:
   node index.js input_correcto_1.txt //Desde la terminal
   //probar con los 4 ejemplos dados

4. Salida esperada:

   - Si el archivo es válido, se mostrará:
     - Mensaje de éxito
     - Tabla de tokens
     - Árbol de análisis sintáctico
     - Interpretación

   - Si el archivo tiene errores, se mostrará:
     - Lista de errores encontrados
     - Tabla de tokens
     - Árbol de análisis sintáctico (hasta donde se pudo analizar)
     - Interpretación: `null`

----------

Notas y aclaraciones

- Todos los textos deben ir entre comillas dobles.
- Las fechas deben tener el formato: `YYYY-MM-DD HH:MM`
- La lista de etiquetas debe estar entre corchetes y cada elemento entre comillas dobles, separados por comas.
- Si el archivo de entrada no cumple con la gramática, se mostrarán los errores detectados y la interpretación será `null`.
