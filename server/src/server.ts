import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {


    return response.json({welcomeTo: "Proffy server"})
})

app.get('/users', (request, response) => {
    const users = [
        {name: "Hugo"}
    ]

    return response	.json(users)
})

app.listen(3333);