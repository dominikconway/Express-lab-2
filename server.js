const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    //res.send('Hello Stranger')
    res.send("whats up " + req.params.name)
    
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${parseInt(req.params.total) * parseFloat(req.params.tipPercentage)}`) //works with ".20"
    
})



app.listen(3000, () => {
    console.log("we are on port 3000")
})