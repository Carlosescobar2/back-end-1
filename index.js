const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())


app.get("/weather")



app.listen(4000, () => {
    console.log("We are listening on port 4000")
})

app.get('/api/users', (req, res) => { 
    let friends = ["Devin", "Jeff", "Christian", "Jason", "Mario"];
    res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res) => { 
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase)
})

