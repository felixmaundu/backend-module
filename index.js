const express = require('express');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const dbConfig = require('../main1/src/config/db.config');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);
const auth = require('./src/middlewares/auth');
const errors = require('./src/middlewares/errors');
const { unless } = require("express-unless");
// const unless = require('express-unless');
const app = express();

const connectionParams = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
}
//registration example
//https://www.bezkoder.com/node-js-express-login-mongodb/


// const collection = client.db("test").collection("devices");
mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb+srv://felo:felo2590@cluster0.a4pyhy8.mongodb.net/ccdb?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to database ')
}).catch((err) => {
  console.error(`Error connecting to the database. \n${err}`);
});






auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
      //   { url: "/users/otpLogin", methods: ["POST"] },
      //   { url: "/users/verifyOTP", methods: ["POST"] },
    ],
  })
);

app.use(express.json());

app.use('/users', require("./src/routes/users_routes"));
app.use(errors.errorHandler);
app.listen(process.env.port || 4000, function () {
  console.log('ready to go')
})