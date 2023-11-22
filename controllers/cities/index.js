const { ctrlWrapper } = require('../../decorators');
const getCities = require('./getCities');


module.exports = {
    getCities: ctrlWrapper(getCities),
 
};