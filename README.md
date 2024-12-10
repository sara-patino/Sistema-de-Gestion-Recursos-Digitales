# Gestión de Recursos Digitales

Este proyecto tiene como objetivo proporcionar una solución para la gestión de recursos materiales, como impresoras, computadoras, proyectores y otros activos dentro de una organización. Con esta aplicación, los usuarios pueden crear, editar, consultar y eliminar recursos, facilitando así el control y la organización de los mismos.

## Propósito

El propósito principal de este proyecto es brindar una herramienta sencilla y eficiente para el manejo de recursos materiales, permitiendo a las organizaciones:

- Tener un inventario actualizado de sus recursos.
- Agilizar la gestión de información sobre recursos disponibles.
- Facilitar la edición y eliminación de recursos según sea necesario.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Node.js](https://nodejs.org/) (v12 o superior)
- [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)

## Instrucciones de instalación y ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone <https://github.com/sara-patino/Sistema-de-Gestion-Recursos-Digitales.git>
   cd gestion-recursos

2. **Instalar las dependencias:**
    ```bash
    npm install
3. **Inicializar el proyecto:**

    Inicia el servidor ejecutando el siguiente comando:
    ```bash
    node server.js
4. **Acceso al proyecto**
    Una vez que el servidor esté corriendo, podrás acceder al proyecto desde tu navegador web ingresando a:
    ```arduino
    http://localhost:3000
    
## Endpoints principales

### Recursos

- **Crear recurso:** `POST /resources/create`
- **Obtener todos los recursos:** `GET /resources/getAll`
- **Obtener recurso por ID:** `GET /resources/:id`
- **Editar recurso:** `PUT /resources/update/:id`
- **Eliminar recurso:** `DELETE /resources/delete/:id`
- **Crear usuario:** `POST /users/register`
- **Obtener todos los usuarios:** `GET /users/getAll`
- **Obtener usuario por ID:** `GET /users/:id`
- **Editar usuario:** `PUT /users/update/:id`
- **Eliminar usuario:** `DELETE /users/delete/:id`

## Tecnologías utilizadas

- **Backend:** Node.js, Express.js
- **Base de datos:** MongoDB
- **Autenticación:** JSON Web Tokens (JWT)

## Contribuciones

Si deseas contribuir a este proyecto, puedes:

1. Hacer un fork del repositorio.
2. Crear una nueva rama para tu funcionalidad o corrección de errores.
3. Enviar un pull request con tus cambios.
