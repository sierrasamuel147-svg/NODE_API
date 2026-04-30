import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/users';

dotenv.config();



const app: Express = express();
const port = process.env.PORT || 3000;

//Middlewares

app.use(cors());
app.use(express.json());

//Rutas
// Ruta Users
app.use('/api/users', router)

// Ruta Pruebas

 app.get('/', (req: Request, res:Response)=>{
    res.json(   
        {
            Message: "Bienvenido a la API Rest con Node JS!",
            version: '1.0.0'
        }
    );
});

// Ruta manejo de errores

app.use((req: Request, res: Response) =>{
    res.status(404).json ({
        error: 'Ruta no encontrada'
    });
});

//Iniciar el servidor

app.listen(port, ()=>{
    console.log(`Servidor Ejecutandose en http://localhost:${port}`);
});