import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoute from './routes/index.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Usar rutas
app.use(indexRoute);

// Servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Conectar a la base de datos


// Iniciar el servidor
app.listen(3000, () => {
  console.log("El servidor está siendo escuchado por el puerto 3000");
});
