const{login} = require('../controllers/login');
const{ getCharacterById } = require('../controllers/getCharacterById');
const{postFav, deleteFav} = require('../controllers/handleFavorites');

const router = require('express').Router();


router.get('/character/:id', (req,res)=>{
getCharacterById(req,res)});

router.get('/login', login );

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports= router;
    
