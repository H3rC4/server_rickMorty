 const axios = require('axios');

const getCharById = (res,id) => {
     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     .then(result=>result.data)
     .then( ({name, gender, origin, status, image, species}) =>{
        let char = {
            id,
            name,
            gender,
            origin,
            image,
            species,
            status
        }
        res.writeHead(200,{'Content-Type': 'application/json'} ).end(JSON.stringify(char))
     })
     .catch((error)=> res.writeHead(500,{'Content-Type': 'text/plain'})
     .end(error.message))
};

module.exports = {
    getCharById,
};