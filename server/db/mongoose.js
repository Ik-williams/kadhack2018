var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://teamknight:teamknight123@ds013405.mlab.com:13405/nocsdb");

module.exports = {mongoose};
