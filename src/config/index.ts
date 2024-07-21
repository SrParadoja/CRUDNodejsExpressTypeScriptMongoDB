import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    config();
}

/**
 * El puerto en el que se ejecutará el servidor.
 * @constant {number|string}
 */
export const PORT = process.env.PORT || 5000; // Proporciona un valor predeterminado si no está definido en .env

/**
 * La URI de conexión a la base de datos MongoDB.
 * @constant {string}
 */
export const MONGO_URI = process.env.MONGO_URI;

/**
 * La clave secreta utilizada para la generación de JWT.
 * @constant {string}
 */
export const JWT_SECRET = process.env.JWT_SECRET;
