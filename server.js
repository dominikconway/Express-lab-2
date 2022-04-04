const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    //res.send('Hello Stranger')
    res.send("whats up " + req.params.name)
    
})

app.listen(3000, () => {
    console.log("we are on port 3000")
})