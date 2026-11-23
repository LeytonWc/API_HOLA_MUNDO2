
# API REST Hola Mundo

## Descripción
Este proyecto consiste en una API REST básica
desarrollada con JavaScript, Node.js y Express.

La API permite realizar una solicitud GET y
obtener una respuesta JSON con el mensaje Hola Mundo.

## Tecnologías utilizadas
- JavaScript
- Node.js
- Express

## Requisitos
- Node.js instalado
- npm
- Visual Studio Code
- Postman

## Instalación

1. Descargar el repositorio de GitHub.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir la terminal.
4. Instalar las dependencias:

npm.cmd install

## Ejecución

Para iniciar el servidor:

node server.js

El servidor funciona en:

http://localhost:3000

## Prueba de la API

Método HTTP: GET

Endpoint:
http://localhost:3000/api/hola

## Respuesta JSON esperada

{
  "mensaje": "Hola Mundo",
  "lenguaje": "JavaScript",
  "framework": "Express"
}

Código de respuesta esperado: 200 OK

## Detener el servidor

Presionar Ctrl + C en la terminal.
