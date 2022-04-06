const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`99 bottles of beer on the wall <br> <a href='http://localhost:3000/${99-1}'>Take one down pass it around</a>`)
    
})

app.get('/:bottles', (req, res) => {
    if(req.params.bottles === '0') {res.send(`<a href='http://localhost:3000/'>I'm Drunk</a>`) } else {
    
    res.send(`${req.params.bottles} bottles of beer on the wall<br> <a href='http://localhost:3000/${parseInt(req.params.bottles -1)}'>Take one down pass it around</a>`)
    
}

})

app.listen(3000, () => {
    console.log("we are on port 3000")
})