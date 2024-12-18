# Sistema de Recursos Digitales

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
- [MongoDB](https://www.mongodb.com/) (local o en un servicio en la nube como Atlas)

## Instrucciones de instalación y ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone <https://github.com/sara-patino/Sistema-de-Gestion-Recursos-Digitales.git>
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
    http://localhost:3001
    
## Endpoints principales

### ENPOINTS

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
- **FrontEnd:** HTML, CSS y JavaScript
- **Autenticación:** JSON Web Tokens (JWT), bcrypt

## Contribuciones

Si deseas contribuir a este proyecto, puedes:

1. Hacer un fork del repositorio.
2. Crear una nueva rama para tu funcionalidad o corrección de errores.
3. Enviar un pull request con tus cambios.


## Diagramas de Clases
| Diagrama | Código Fuente |
|----------|---------------|
| ![Diagrama General](/diagramas/DiagramaGeneral.svg) | [Ver código](/diagramas/diagramaGeneral.puml)|
| ![Diagrama Users](/diagramas/DiagramaUsers.svg) | [Ver código](/diagramas/diagramaUsers.puml)|
| ![Diagrama Resources](/diagramas/DiagramaResources.svg) | [Ver código](/diagramas/diagramaResources.puml)|

## Diagramas de Estados
| Diagrama | Código Fuente |
|----------|---------------|
| ![Diagrama CrearRecursos](/diagramas/diagramaDeEstados/CrearRecurso.svg) | [Ver código](/diagramas/diagramaDeEstados/crearRecurso.puml)|
