const express = require('express');
const app = express();

app.get('/', (req, res) => 
{
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(5000);