import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../models/User';

class PerfilController{
    async show(req, res){
        User.findOne({_id: req.userId }, '_id namen email createdAt updatedAt').then((user) => {
            return res.json({
                error: false,
                user: user
            });
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                code: 115,
                message: "Erro: Perfil não encontrado!"
            });
        });
    };
    
    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string()
                .email(),
            password: Yup.string()
                .min(6)
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: true,
                code: 108,
                message: "Erro: Dados do formulário inválido!"
            });
        };

        const { email }= req.body;

        const usuarioExiste = await User.findOne({_id: req.userId});

        if(!usuarioExiste){
            return res.status(400).json({
                error: true,
                code: 109,
                message: "Erro: Usuário não encontrado!"
            });
        };

        if(email != usuarioExiste.email){
            const emailExiste = await User.findOne({email});
            if(emailExiste){
                return res.status(400).json({
                    error: true,
                    code: 110,
                    message: "Erro: Este e-mail já está cadastrado!"
                });
            };
        };

        var dados = req.body;
        if(dados.password){
            dados.password = await bcrypt.hash(dados.password, 8);
        };

        await User.updateOne({_id: req.userId}, dados, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 116,
                message: "Erro: Usuário não foi editado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Usuário editado com sucesso!"
            });
        });        
    };
};

export default new PerfilController();