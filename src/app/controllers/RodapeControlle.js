import * as Yup from 'yup';
import Rodape from '../models/Rodape';

class RodapeController{
    async show(req, res){
        Rodape.findOne({}).then((rodape) => {
            return res.json({
                error: false,
                rodape: rodape
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 125,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async store(req, res) {

        const dados = {
            tituloPg: "Marcio",
            tituloCont: "Contato",
	        telCont:"(11) 98948-9076",
            emailCont: "marciocamollez@hotmail.com",
            tituloRedSoc: "Redes Sociais",
            instTitulo: "Instagram",
            instLink: "https://www.instagram.com/marciocamoju",
            gitTitulo: "Git Hub",
            gitLink: "https://github.com/marciocamollez",
            twiterTitulo: "Twiter",
            twiterLink: "https://twitter.com/Marcio_Camollez"
        };
        
        const rodape = await Rodape.findOne({});
        if(rodape){
            return res.status(400).json({
                error: true,
                code: 126,
                message: "Erro: O rodapé já possui um registro!"
            });
        };

        const cadRodape = await Rodape.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 127,
                message: "Error: Dados do rodapé não foram cadastrado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Dados do rodapé cadastrado com sucesso!"
            });
        });
    };

    async update(req, res){

        const schema = Yup.object().shape({
            tituloPg: Yup.string().required(), 
            tituloCont: Yup.string().required(),
            telCont: Yup.string().required(),
            emailCont: Yup.string().required(),
            tituloRedSoc: Yup.string().required(),
            instTitulo: Yup.string().required(),
            instLink: Yup.string().required(),
            instTitulo: Yup.string().required(),
            instLink: Yup.string().required(),
            twiterTitulo: Yup.string().required(),
            twiterLink: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                code: 124,
                message: "Erro: Dados do formulário inválido!"
            });
        };

        await Rodape.updateOne({}, req.body, (err) => {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro: Conteúdo do rodapé não foi editado com sucesso!"
            });
        });

        return res.json({
            error: false,
            message: "Conteúdo do rodapé editado com sucesso!"
        });
    };

};

export default new RodapeController();