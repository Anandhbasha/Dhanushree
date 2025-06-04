import express from 'express'
import route from './Router/route.js'
const app = express()
const PORT = 3006

app.use(express.json())

app.use('/basic',route)

app.listen(PORT,()=>{
    console.log(`The port is running under http://localhost:${PORT}`);
    
})