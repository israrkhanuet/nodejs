const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hello Dolly')
})

const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`The app is listing at ${port}.....`));