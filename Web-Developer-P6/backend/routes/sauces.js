const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const saucesCtrl = require('../controllers/sauces');
const likesDislikesCtrl = require('../controllers/likesDislikes');


router.post('/', auth, multer, saucesCtrl.createThing);  
router.put('/:id', auth, multer, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);
router.get('/:id', auth, saucesCtrl.getOneThing); 
router.get('/', auth, saucesCtrl.getAllThings);
router.post('/:id/like', auth, likesDislikesCtrl.likesDislikes);

module.exports = router;