import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Configuración de Swagger JSDoc
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Gestión de Tareas',
        version: '1.0.0',
        description: 'Documentación de la API para la gestión de tareas.',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Servidor de desarrollo',
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            User: {
                type: 'object',
                required: ['username', 'email', 'password'],
                properties: {
                    id: {
                        type: 'string',
                        description: 'ID auto-generado del usuario',
                    },
                    username: {
                        type: 'string',
                        description: 'Nombre de usuario',
                    },
                    email: {
                        type: 'string',
                        description: 'Correo electrónico del usuario',
                    },
                    password: {
                        type: 'string',
                        description: 'Contraseña del usuario',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Fecha de creación del usuario',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Fecha de última actualización del usuario',
                    },
                },
                example: {
                    id: 'd5fE_asz',
                    username: 'Juan Perez',
                    email: 'juan.perez@example.com',
                    password: 'password123',
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                },
            },
        },
    },
    security: [
        {
            BearerAuth: [],
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Asegúrate de que estas rutas sean correctas
};

const swaggerDocs = swaggerJSDoc(options);

export { swaggerDocs, swaggerUi };
