const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:AgrinsaDB159@cultivosagrinsadb.zof0u.mongodb.net/sample_geospatial?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));