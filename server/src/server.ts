import express, { response } from 'express';

const app = express();

app.use(express.json());
// localhost:3333/users/contacts

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação dentro do backend
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para crianção ou atualização do registro
//Route Params: Identificar um recurso na nossa rota, atualizar o deletar
//Query Params: 

app.get('/', (request, response) => {
  
    return response.json({Imessage: ' Hello World'});
});


app.listen(3333); //ouvir requisiçoes http
