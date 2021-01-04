import mongoose from 'mongoose';

const Rodape = new mongoose.Schema({
    tituloPg: {
        type: String,
        required: true
    },
    tituloCont: {
        type: String,
        required: true
    },
    telCont: {
        type: String,
        required: true
    },
    emailCont: {
        type: String,
        required: true
    },
    tituloRedSoc: {
        type: String,
        required: true
    },
    instTitulo: {
        type: String,
        required: true
    },
    instLink: {
        type: String,
        required: true
    },
    gitTitulo: {
        type: String,
        required: true
    },
    gitLink: {
        type: String,
        required: true
    },
    twiterTitulo: {
        type: String,
        required: true
    },
    twiterLink: {
        type: String,
        required: true
    },
},
{
    timestamps: true
});

export default mongoose.model('rodape', Rodape);