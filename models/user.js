const { model, Schema } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const DEFAULT_AVATAR =
  'https://res.cloudinary.com/dcfetki7g/image/upload/v1689155120/avatars/man.png.png';

const userSchema = new Schema(
  {
    name: { type: String },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    avatarURL: {
      type: String,
      default: DEFAULT_AVATAR,
    },
    token: {
      type: String,
    },
    ordersList: {
      _id: false,
      type: [
        {
          apartmentId: {
            type: String,
            required: true,
          },
          date: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = User;
