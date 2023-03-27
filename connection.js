const mongoose = require("mongoose");
require('dotenv').config();
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true

}

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pmc0bct.mongodb.net/?retryWrites=true&w=majority`
//console.log('url',url)
const connexion = mongoose.connect(url, connectionParams).then(() => console.log('connected to cloud atlas'))

.catch((err) => console.log('err',err));


module.exports = connexion