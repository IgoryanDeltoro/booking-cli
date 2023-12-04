const cloudinary = require('cloudinary').v2;

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const { originalname } = file;
    const cutExtraWords = originalname
      .split('')
      .splice(0, originalname.length - 4)
      .join('');

    let setup = {};

    if (file.fieldname === 'avatar') {
      setup = {
        folder: 'avatars',
        allowed_formats: ['jpg', 'png', 'webp'],
        public_id: cutExtraWords,
        transformation: [
          { gravity: 'face', height: 350, width: 350, crop: 'thumb' },
          { fetch_format: 'auto' },
        ],
      };
    } else if (file.fieldname === 'Apartment') {
      setup = {
        folder: 'apartments',
        allowed_formats: ['jpg', 'png', 'webp'],
        public_id: cutExtraWords,
        transformation: [{ aspect_ratio: '1.0', width: 900 }],
      };
    } else {
      setup.folder = 'misc';
    }

    return setup;
  },
});

const upload = multer({ storage });

module.exports = upload;
