const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const tweetSchema = new mongoose.Schema({
    tweet: {type:String, required:true},
    user: {type:mongoose.Schema.Types.ObjectId, ref:'users'}
});

// SELECT FROM a INNER JOIN  b ON a.id = b.id

const Users = mongoose.model('users', userSchema, 'users');
const Tweets = mongoose.model('tweets', tweetSchema, 'tweets');
const mySchemas = {'Users':Users, 'Tweets':Tweets};

module.exports = mySchemas;