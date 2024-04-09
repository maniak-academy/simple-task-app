const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.get('/todo', (req, res) => {
  ToDo.find()
    .then((toDos) => res.status(200).send(toDos))
    .catch((err) => res.status(400).send(err));
});

app.post('/todo', (req, res) => {
  const body = req.body;
  const toDo = new ToDo({
    text: body.text,
  });
  toDo.save(toDo)
    .then((savedToDo) => res.status(201).send(savedToDo))
    .catch((err) => res.status(400).send(err));
});

app.patch('/todo/:id', (req, res) => {
  const { id } = req.params;
  ToDo.findOneAndUpdate({ _id: id }, { done: true })
    .then((toDo) => res.status(200).send(toDo))
    .catch((err) => res.status(400).send(err));
});

const mongoose = require('mongoose');
const ToDo = require('./toDoModel.js').ToDo;
const DB_URI = 'mongodb://adminUser:adminPassword@54.226.40.144:27017/toDoApp?authSource=admin';

// Include the useNewUrlParser and useUnifiedTopology options in the connection
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, tls: false })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Listening on port: ' + PORT);
    app.listen(PORT);
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));

