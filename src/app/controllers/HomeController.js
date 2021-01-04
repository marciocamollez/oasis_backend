import * as Yup from 'yup';
import Home from '../models/Home';
import Rodape from '../models/Rodape';

class HomeController {
    async show(req, res) {

        Home.findOne({}).then((home) => {
            Rodape.findOne({}).then((rodape) => {
                return res.json({
                    error: false,
                    home: home,
                    rodape: rodape
                });
            }).catch((err) => {
                return res.status(400).json({
                    error: true,
                    code: 123,
                    message: "Erro: Não foi possível executar a solicitação!"
                });
            });            
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 123,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async store(req, res) {

        const dados = {
            tituloTopo: "Oasis",
            descTopo: "Confira a história e a discografia da banda",
	        tituloBtnTopo:"QUERO VER",
            linkBtnTopo: "#historia",
            historiaTitulo: "Um pouco de história",
            historiaDesc: "Oasis foi uma banda inglesa de rock formada no ano de 1991, na cidade de Manchester. Até a sua extinção em 2009, era composta por Liam Gallagher (vocal e pandeireta), Noel Gallagher (guitarra e backing vocal), Gem Archer (guitarra e teclado), Andy Bell (baixo e teclado) e Chris Sharrock (bateria e percussão). Seu estilo musical consistia basicamente do rock com ênfase no alternativo e elementos do gênero da música pop, como o britpop. Em sua existência, ocorreram várias mudanças em sua formação: originalmente era composta por Liam, Paul 'Bonehead' Arthurs (guitarra), Paul 'Guigsy' McGuigan (baixo), Tony McCarroll (bateria) e por último, Noel, sendo convidado a se juntar como o quinto membro, formando o núcleo musical.",
            historiaFoto: "http://localhost:8080/tmp/uploads/banda-oasis.jpg",
            acusticoTitulo: "Acústico MTV",
            acusticoDesc: "Em 1996 a banda gravou seu álbum acústico, mas ele nunca foi lançado oficialmente devido à brigas entre os irmãos Noel e Liam. Neste dia, Liam não subiu ao palco e Noel assumiu o vocal",
            embedVideo: "<iframe className='embed-responsive-item' src='https://www.youtube.com/embed/D1iGNA6M434'></iframe>",
            discografiaTitulo: "Discografia",
            discografiaDesc: "A banda gravou 7 álbuns de estúdio entre 1994 e 2008. Confira abaixo",
            discografiaFotoUm: "http://localhost:8080/tmp/uploads/1.jpg",
            discografiaTituloUm: "Definitely Maybe",
            discografiaAnoUm: "1994",
            discografiaFotoDois: "http://localhost:8080/tmp/uploads/2.jpg",
            discografiaTituloDois: "(What's the Story) Morning Glory?",
            discografiaAnoDois: "1995",
            discografiaFotoTres: "http://localhost:8080/tmp/uploads/3.jpg",
            discografiaTituloTres: "Be Here Now",
            discografiaAnoTres: "1997",
            discografiaFotoQuatro: "http://localhost:8080/tmp/uploads/4.jpg",
            discografiaTituloQuatro: "Standing on the Shoulder of Giants",
            discografiaAnoQuatro: "2000",
            discografiaFotoCinco: "http://localhost:8080/tmp/uploads/5.jpg",
            discografiaTituloCinco: "Heathen Chemistry",
            discografiaAnoCinco: "2002",
            discografiaFotoSeis: "http://localhost:8080/tmp/uploads/6.jpg",
            discografiaTituloSeis: "Don't Believe the Truth",
            discografiaAnoSeis: "2005",
            discografiaFotoSete: "http://localhost:8080/tmp/uploads/7.jpg",
            discografiaTituloSete: "Dig Out Your Soul",
            discografiaAnoSete: "2008",
        };
        
        const homeExiste = await Home.findOne({});
        if(homeExiste){
            return res.status(400).json({
                error: true,
                code: 122,
                message: "Erro: A página home já possui um registro!"
            });
        };

        const home = await Home.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 121,
                message: "Error: Dados da página home não foram cadastrado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Dados da página home cadastrado com sucesso!"
            });
        });
    };

    async update(req, res){

        const schema = Yup.object().shape({
            tituloTopo: Yup.string(), 
            descTopo: Yup.string(), 
            tituloBtnTopo: Yup.string(), 
            linkBtnTopo: Yup.string(), 
            historiaTitulo: Yup.string(), 
            historiaDesc: Yup.string(), 
            historiaFoto: Yup.string(), 
            acusticoTitulo: Yup.string(), 
            acusticoDesc: Yup.string(), 
            embedVideo: Yup.string(), 
            discografiaTitulo: Yup.string(), 
            discografiaDesc: Yup.string(), 
            discografiaFotoUm: Yup.string(), 
            discografiaTituloUm: Yup.string(), 
            discografiaAnoUm: Yup.string(), 
            discografiaFotoDois: Yup.string(), 
            discografiaTituloDois: Yup.string(), 
            discografiaAnoDois: Yup.string(), 
            discografiaFotoTres: Yup.string(), 
            discografiaTituloTres: Yup.string(), 
            discografiaAnoTres: Yup.string(), 
            discografiaFotoQuatro: Yup.string(), 
            discografiaTituloQuatro: Yup.string(), 
            discografiaAnoQuatro: Yup.string(), 
            discografiaFotoCinco: Yup.string(), 
            discografiaTituloCinco: Yup.string(), 
            discografiaAnoCinco: Yup.string(), 
            discografiaFotoSeis: Yup.string(), 
            discografiaTituloSeis: Yup.string(), 
            discografiaAnoSeis: Yup.string(), 
            discografiaFotoSete: Yup.string(), 
            discografiaTituloSete: Yup.string(), 
            discografiaAnoSete: Yup.string()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                code: 124,
                message: "Erro: Dados do formulário inválido!"
            });
        };

        await Home.updateOne({}, req.body, (err) => {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro: Conteúdo da página home não foi editado com sucesso!"
            });
        });

        return res.json({
            error: false,
            message: "Conteúdo da página home editado com sucesso!"
        });
    };

};

export default new HomeController();