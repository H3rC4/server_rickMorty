const express = require('express');
const server = express();
const PORT = 3001;
const morgan = require('morgan');
const router = require('./routes/index')

// aca van todos los 'middles' y los 'use'
server.use(express.json());
server.use(morgan('dev'));

//!desde aca ----------------
//da perimsos para acceder a las rutas
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
//!hasta aca--------------------
//hace q se escriba rickandmorty antes de cada ruta
server.use('/rickandmorty', router);


server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
})