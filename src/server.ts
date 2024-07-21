import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './database';
import { PORT } from './config';
import { routes } from './routes';
import { swaggerDocs, swaggerUi } from './swagger';

/**
 * Clase que representa el servidor de la aplicación.
 */
export class Server {
    private app: Express;

    /**
     * Inicializa una nueva instancia de la clase Server.
     */
    constructor() {
        this.app = express();
        this.initialize();
    }

    /**
     * Inicializa la configuración, middlewares y rutas del servidor.
     * @private
     * @returns {void}
     */
    private initialize(): void {
        connectDB();
        this.configuration();
        this.middlewares();
        this.routes();
    }

    /**
     * Configura el puerto del servidor.
     * @private
     * @returns {void}
     */
    private configuration(): void {
        this.app.set('port', PORT || 3000);
    }

    /**
     * Configura los middlewares del servidor.
     * @private
     * @returns {void}
     */
    private middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    /**
     * Configura las rutas del servidor.
     * @private
     * @returns {void}
     */
    private routes(): void {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                name: 'API gestión de tareas'
            });
        });

        // Configura las rutas para las tareas y los usuarios
        this.app.use('/api/task', routes.TaskRoute);
        this.app.use('/api/user', routes.UserRoute);

        // Configura la ruta para Swagger
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    /**
     * Inicia el servidor en el puerto configurado.
     * @public
     * @returns {void}
     */
    public listen(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`El Servidor está corriendo en el puerto ${this.app.get('port')}`);
        });
    }
}
