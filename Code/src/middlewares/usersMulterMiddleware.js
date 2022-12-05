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
var upload = multer ({storage});

module.exports = upload;