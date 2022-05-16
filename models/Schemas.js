const mongoose = require('mongoose');


const inviteSchema = new mongoose.Schema({
        name: String,
        date: String,
        email: String,
        phone: String,
        address: String,
        amount: Number,
        foods: Array,
        deserts: Array,
        price: Number
});
const Invite = mongoose.model('Invites', inviteSchema, 'invitescol');


const mySchemas = {'Invites':Invite};

module.exports = mySchemas;