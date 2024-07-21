import { connect } from 'mongoose';
import { MONGO_URI } from '../config';

/**
 * Conecta a la base de datos MongoDB usando la URI proporcionada en la configuración.
 * @throws {Error} Si ocurre un error durante la conexión a la base de datos.
 */
export const connectDB = () => {
    connect(MONGO_URI as string)
        .then(() => {
            console.log('Conexión con MongoDB exitosa');
        })
        .catch((error) => {
            console.error('Error de conexión con MongoDB', error);
        });
};
