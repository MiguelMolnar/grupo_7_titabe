const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'/../../public/images/users'));
    },
    filename : (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
})
var upload = multer ({storage:storage});

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.post('/', upload.single('image'), usersController.store);


module.exports = router;