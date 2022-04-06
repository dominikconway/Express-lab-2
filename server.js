const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    //res.send('Hello Stranger')
    res.send("whats up " + req.params.name)
    
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100}`) //works with ".20"
    
})


app.get('/magic/:question', (req, res) => {
   let arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    let randomIndex = Math.floor(Math.random() * arr.length)
    let eightballResponse = arr[randomIndex]

    res.send(`<h1>${req.params.question} ${eightballResponse}</h1>`) 
    
})


app.listen(3000, () => {
    console.log("we are on port 3000")
})