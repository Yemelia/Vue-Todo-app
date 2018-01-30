const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todos = require('./db/todos');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.set('port', (process.env.PORT || 3000));

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.put('/api/add-todo', (req, res) => {
    const reqBody = req.body;
    const todo = {
        title: reqBody.title,
        project: reqBody.project,
        done: reqBody.done
    }
    todos.push(todo);

    res.json(todos);
});

app.post('/api/delete-todo', (req, res) => {
    const todoIndex = req.body.todoIndex;
    todos.splice(todoIndex, 1);

    res.json(todos);
});



app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));