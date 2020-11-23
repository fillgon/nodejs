const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

/**
 *  Métodos HTTP:
 * 
 *  GET: Buscar informações do back-end
 *  POST: Criar um informação no back-end
 *  PUT/PATCH: Alterar um informação no back-end
 *  DELETE: Deletar uma informação no back-end
 */

 /**
  *  Tipos de parâmetros:
  * 
  * Query Params: Filtros e paginações
  * Route Params: Identificar recursos (Atualizar/Deletar)
  * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
  */

app.get('/projects', (request, response)=> {
    const query = request.query;

    console.log(query);

    return response.json([
        'Projeto 1', 
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    const body = request.body;

    console.log(body);
    console.log(params);

    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])
})

app.listen(3333, () => {
    console.log('Back-end started!');
});