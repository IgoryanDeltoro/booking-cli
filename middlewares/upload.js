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
    let folder;
    if (file.fieldname === 'avatar') {
      folder = 'avatars';
    } else if (file.fieldname === 'Apartment') {
      folder = 'Apartments';
    } else {
      folder = 'misc';
    }
    const { originalname } = file;
    const cutExtraWords = originalname
      .split('')
      .splice(0, originalname.length - 4)
      .join('');

    return {
      folder: folder,
      allowed_formats: ['jpg', 'png', 'webp'],
      public_id: cutExtraWords,
      transformation: [{ aspect_ratio: '1.0', width: 350, crop: 'fill' }],
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
