import Respuestas from '../models/Respuestas.js';

const obtenerRespuestas = async (req, res) => {
    const respuesta = new Respuestas(req.body);
    try {
        const respuestasAlmacenadas = await respuesta.save();
        res.json(respuestasAlmacenadas);
        console.log(respuestasAlmacenadas);
    } catch (error) {
        res.json(error);
    }
}


export {
    obtenerRespuestas
}
