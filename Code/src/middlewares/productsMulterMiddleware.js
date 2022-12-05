const multer = require('multer');
const path = require('path');

//Declaración de variables de Multer para subir imagenes
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'/../../public/images/products'));
    },
    filename : (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer ({storage:storage});

module.exports = upload;