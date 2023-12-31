const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config();

const apartmentsRouters = require('./routes/api/apartments');
const ordersRouters = require('./routes/api/orders');
const citiesRouters = require('./routes/api/cities');
const userAuthRouters = require('./routes/api/auth');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/booking/users', userAuthRouters);
app.use('/booking/apartments', apartmentsRouters);
app.use('/booking/orders', ordersRouters);
app.use('/booking/cities', citiesRouters);
app.use('/booking/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
