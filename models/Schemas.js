const mongoose = require('mongoose');


const inviteSchema = new mongoose.Schema({
        name: String,
        date: String
        
});
const Invite = mongoose.model('Invites', inviteSchema, 'invitescol');


const mySchemas = {'Invites':Invite};

module.exports = mySchemas;