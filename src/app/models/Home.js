import mongoose from 'mongoose';

const Home = new mongoose.Schema({
    tituloTopo: {
        type: String
    },
    descTopo: {
        type: String
    },
    tituloBtnTopo: {
        type: String
    },
    linkBtnTopo: {
        type: String
    },
    historiaTitulo: {
        type: String
    },
    historiaDesc: {
        type: String
    },
    historiaFoto: {
        type: String
    },
    acusticoTitulo: {
        type: String
    },
    acusticoDesc: {
        type: String
    },
    embedVideo: {
        type: String
    },
    discografiaTitulo: {
        type: String
    },
    discografiaDesc: {
        type: String
    },
    discografiaFotoUm: {
        type: String
    },
    discografiaTituloUm: {
        type: String
    },
    discografiaAnoUm: {
        type: String
    },
    discografiaFotoDois: {
        type: String
    },
    discografiaTituloDois: {
        type: String
    },
    discografiaAnoDois: {
        type: String
    },
    discografiaFotoTres: {
        type: String
    },
    discografiaTituloTres: {
        type: String
    },
    discografiaAnoTres: {
        type: String
    },
    discografiaFotoQuatro: {
        type: String
    },
    discografiaTituloQuatro: {
        type: String
    },
    discografiaAnoQuatro: {
        type: String
    },
    discografiaFotoCinco: {
        type: String
    },
    discografiaTituloCinco: {
        type: String
    },
    discografiaAnoCinco: {
        type: String
    },
    discografiaFotoSeis: {
        type: String
    },
    discografiaTituloSeis: {
        type: String
    },
    discografiaAnoSeis: {
        type: String
    },
    discografiaFotoSete: {
        type: String
    },
    discografiaTituloSete: {
        type: String
    },
    discografiaAnoSete: {
        type: String
    },
    
},
{
    timestamps: true,
})

export default mongoose.model('home', Home);