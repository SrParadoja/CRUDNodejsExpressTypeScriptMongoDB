import express, { Request, Response, NextFunction } from 'express';
import { connectDB } from './database';
import userRoutes from './routes/user.route';
import taskRoutes from './routes/task.route';
import { PORT } from './config';
import { swaggerDocs, swaggerUi } from './swagger';

const app = express();
app.use(express.json());

/**
 * Rutas para la API de usuarios.
 */
app.use('/api/users', userRoutes);

/**
 * Rutas para la API de tareas.
 */
app.use('/api/task', taskRoutes);

/**
 * Configura la ruta para la documentación Swagger.
 */
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * Middleware de manejo de errores.
 * 
 * @param {Error} err - El objeto de error.
 * @param {Request} req - El objeto de solicitud de Express.
 * @param {Response} res - El objeto de respuesta de Express.
 * @param {NextFunction} next - La función de siguiente paso de Express.
 * @returns {void}
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

/**
 * Conecta a la base de datos MongoDB.
 */
connectDB();

/**
 * Inicia el servidor en el puerto especificado.
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
