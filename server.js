const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(
    {
        path: `${__dirname}/config.env`
    }
)

const DB = process.env.LOCAL_DB
const PORT = process.env.PORT

mongoose.connect(DB)
    .then(con=>{
        console.log('MongoDB connected')
    })
    .catch(err=>{
        console.log("DB error occured")
    })


app.listen(PORT, ()=>{
    console.log("Myanwin api is started at")
    console.log(`http://localhost:${PORT}`)
})
