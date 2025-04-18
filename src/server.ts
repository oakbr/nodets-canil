import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'; //Importando a rota principal da home.

//Pega informação do arquivo .env e disponibiliza para todo o projeto. Por exemplo PORT=4000
dotenv.config();

const server = express();

server.set('view engine', 'mustache');

server.set('views', path.join(__dirname, 'views'));

server.engine('mustache', mustache());

//Configurar pasta publica
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

//Pagina nao encontrada.
server.use((req, res) => {
    res.render('pages/404');
});

//Definindo a porta para o servidor buscando do arquivo .env
server.listen(process.env.PORT);



