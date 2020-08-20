const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./models/Surveys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        //max age es de 30 dias, 24 hrs, 60 min., 60 sec 1000milsec.
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    /** 
     * El servidor Express ubicará los asstes necesarios
        Con esta línea verificará el existente del main.js o del main.css
    */   
   app.use(express.static('client/build'));
   /** 
    * En esta parte el servidor expres buscará el index.html
    * en caso que no reconozca la ruta
   */
  const path = require('path');
  app.get('*', (req, res) =>{

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  
    });
}

const PORT = process.env.PORT || 5000;
console.log("Escuchando en el puerto: "+PORT);
app.listen(PORT);