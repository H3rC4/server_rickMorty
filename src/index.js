const http = require('http');
const {getCharById} = require('./controllers/getCharacterById');

const PORT = 3001;

http.createServer((req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
      
      const id = req.url.split('/').at(-1);
      getCharById(res,Number(id));

    }
}).listen(PORT,"localhost");