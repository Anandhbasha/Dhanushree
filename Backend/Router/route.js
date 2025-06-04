import express from 'express'
import { del, edit, insertController, readController } from '../Controller/Controller.js'
const route = express.Router()

route.get("/read",readController)
route.post('/insert',insertController)
route.put("/edit/:userName",edit)
route.delete("/delete/:userName",del)

export default route