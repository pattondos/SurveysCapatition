const express = require('express');
const app = express();

app.get('/', (req, res) => 
{
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

console.log("Escuchando en el puerto: "+PORT);
app.listen(PORT);