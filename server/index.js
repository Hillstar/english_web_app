const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const questions = require('./db/questions');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});
 
app.get('/questions', (req, res) => {
    questions.getAll().then((questions) => {
        res.json(questions);
    });
});

app.post('/questions', (req, res) => {
    console.log(req.body);
    questions.create(req.body).then((question) => {
        res.json(question);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});