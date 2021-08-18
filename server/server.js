const express = require('express');
const app = express();
const routes = require('./routes/router')

app.use(express.json());
 
require('./database/conn')
app.use('/', routes);

// app.get('/', (req, res) => {
//     res.send("this is home page")
// })

app.listen(mduddin.website, () => {
    console.log("app is listening at 3000")
})

