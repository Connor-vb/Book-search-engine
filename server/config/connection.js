const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cvanbrock:Password@cop-or-not.rmr20.mongodb.net/booksearch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
