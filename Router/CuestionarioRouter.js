import express from 'express';

import {
    obtenerRespuestas
} from '../Controllers/CuestionarioController.js';


const router = express.Router();

router.post('/', obtenerRespuestas);


export default router;