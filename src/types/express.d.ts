import { Request } from 'express';

// Extiende el tipo Request de Express para incluir la propiedad 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}
