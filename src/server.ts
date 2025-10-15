import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'; //Importando a rota principal da home.

//Pega informação do arquivo .env e disponibiliza para todo o projeto. Por exemplo PORT=3000. Arquivo de ser criado na raiz do projeto
dotenv.config();

//Criar o servidor
const server = express();

//Definir o mustache no servidor (engine)
server.set('view engine', 'mustache');

//Definir o diretório publico com as imagens 
server.set('views', path.join(__dirname, 'views'));

//ativar o engine do servidor
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



