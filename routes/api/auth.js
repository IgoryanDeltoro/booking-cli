const express = require('express');
const { validateBody } = require('../../decorators');
const { authSchema } = require('../../schemas');

const userAuth = require('../../controllers/auth');
const {
  authenticate,
  upload,
  validateFormNameBody,
} = require('../../middlewares');

const router = express.Router();

router.post('/register', validateBody(authSchema), userAuth.userRegister);
router.post('/login', validateBody(authSchema), userAuth.userLogin);
router.get('/current', authenticate, userAuth.getCurrent);
router.post('/logout', authenticate, userAuth.logout);
router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  validateFormNameBody,
  userAuth.uploadAvatar
);
router.post('/subscribe', authenticate, userAuth.subscribe);

module.exports = router;
