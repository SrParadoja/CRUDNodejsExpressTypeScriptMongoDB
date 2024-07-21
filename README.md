# Sistema de Gestión de Tareas💻⌨️

## Descripción

Hola, Soy Jose Alejandro De la Rosa David y este proyecto, es una API para la gestión de tareas con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar) y un sistema de autenticación y autorización. Los usuarios pueden gestionar únicamente sus propias tareas, asegurando la privacidad y la correcta gestión de los datos. La API está documentada y es consumible desde Postman.

## Tecnologías

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para construir aplicaciones web.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **MongoDB Atlas**: Base de datos en la nube para almacenar datos de manera segura sin depender de una instancia local.

## Funcionalidades Requeridas

### 1. Autenticación y Autorización

- **Registro e inicio de sesión de usuarios**: Permite a los usuarios registrarse y autenticarse en el sistema.
- **Middleware para proteger rutas autenticadas**: Asegura que solo los usuarios autenticados puedan acceder a rutas protegidas.

### 2. Gestión de Tareas

- **Crear, leer, actualizar y eliminar tareas**: Permite gestionar las tareas de manera completa.
- **Campos de cada tarea**: Cada tarea incluye título, descripción, fecha de vencimiento y estado.

### 3. Validación y Manejo de Errores

- **Validación de entradas del usuario**: Asegura que los datos enviados por los usuarios sean correctos.
- **Manejo de errores y respuestas apropiadas**: Envía mensajes de error claros y precisos en caso de problemas.

### 4. Documentación

- **Documentación del API con Swagger**: La API está documentada utilizando Swagger para facilitar su comprensión y uso.
- **Instrucciones para ejecutar el proyecto localmente**: Incluye pasos para configurar y ejecutar el proyecto.
- **Comentarios JSDoc detallados en el código**: El código está comentado con JSDoc para una mejor comprensión y mantenimiento.

### 5. Buenas Prácticas

- **Código limpio y estructurado**: El código sigue las prácticas de TypeScript.

## Middlewares

- **Middleware de Autenticación**: Protege las rutas que requieren autenticación, asegurando que solo los usuarios autenticados puedan acceder a ellas.
- **Middleware de Validación**: Valida las entradas del usuario antes de procesar las solicitudes para asegurar que los datos sean correctos y cumplan con las reglas establecidas.

## Cómo Ejecutar el Proyecto

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/SrParadoja/CRUDNodejsExpressTypeScriptMongoDB.git
   
El proyecto ya viene con las dependencias instaladas pero en caso de que no las tengas por alguna razón, usa los comandos:

npm install bcryptjs cors dotenv express express-validator jsonwebtoken mongoose morgan swagger-jsdoc swagger-ui-express

npm install --save-dev @types/bcryptjs @types/cors @types/express @types/jsonwebtoken @types/morgan @types/swagger-jsdoc @types/swagger-ui-express nodemon ts-node

Luego ejecutas el proyecto con:  npm run dev

Y ya con esos pasos puedes probar el Proyecto
