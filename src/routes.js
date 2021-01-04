import { Router } from 'express';
import mongoose from 'mongoose';

import multer from 'multer';
import multerUpImgSobre from './app/middlewares/uploadImgSobre';

import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';
import PerfilController from './app/controllers/PerfilController';
import RodapeControlle from './app/controllers/RodapeControlle';
import HomeController from './app/controllers/HomeController';

import authMiddleware from './app/middlewares/auth';


const routes = new Router();
//const uploadImgSobre = multer(multerUpImgSobre);


/* Visualizar Perfil */
routes.get('/perfil', authMiddleware, PerfilController.show);
routes.put('/perfil', authMiddleware, PerfilController.update);

/* Login do Usuário */
routes.post('/login', LoginController.store);

/* CRUD de Usuário */
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);


/* Rodapé */
routes.get('/rodape', RodapeControlle.show);
routes.post('/rodape', authMiddleware, RodapeControlle.store);
routes.put('/rodape', authMiddleware, RodapeControlle.update);

/* Home */
routes.get('/home', HomeController.show);
routes.post('/home', authMiddleware, HomeController.store);
routes.put('/home', authMiddleware, HomeController.update);

export default routes;
