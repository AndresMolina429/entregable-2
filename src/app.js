const express = require('express');
const cors = require('cors');
const db = require('./utils/databases')
require('dotenv').config()
const port = process.env.PORT || 8000
const todosRoutes = require('./routes/todos.routes');

db.authenticate()
.then(() => {
    console.log('ok');
})
.catch(err => {
    console.log('error: ' + err);
});

db.sync({ alter: true })
.then(() => {
 console.log('Base de datos sincronizada');
})
.catch(err => {
    console.log('error: ' + err);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(todosRoutes);

app.get('/', (req,res)=>{
    res.send()
})

app.listen(port, () =>{
   console.log('listening on port '+port);
})