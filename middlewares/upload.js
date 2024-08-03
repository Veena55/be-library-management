const multer = require('multer');
const path = require('path');
const fs = require('fs');

//create storage
class Storage {
    constructor() {
        this.upload = multer({ storage: this.fileConfiguration() });
        this.uploadPath = 'uploads';
    }
    fileConfiguration() {
        return multer.diskStorage({
            destination: (req, file, cb) => {
                if (path.extname(file.originalname) == 'mp4') {
                    this.uploadPath += '/videos';
                } else {
                    this.uploadPath += '/images';
                }

                //create the destination folders
                if (!fs.existsSync(this.uploadPath)) {
                    // Create the directory if it doesn't exist
                    fs.mkdirSync(this.uploadPath, { recursive: true });
                }

                cb(null, this.uploadPath);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
            }
        });
    }
}

module.exports = new Storage().upload;
