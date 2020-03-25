const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/jagger-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err =>console.error(err));



