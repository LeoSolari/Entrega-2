import { LogSuccess } from '../utils/Logger'
import express, { Request, Response, } from 'express'
import { GoodByeController } from '../controllers/GoodByeControllers'

// Router from express

let GoodbyeRouter = express.Router()

// GET --> http://localhost:8000/api/goodbye?name=Leo

GoodbyeRouter.route('/').get(async (req:Request, res:Response) => {
    //Obtener query param
    let name:any = req?.query?.name
    const d: Date = new Date()
    LogSuccess(`Query param: ${name}`)
    LogSuccess(`Query param: ${d}`)

    // Controller instance to execute method
    const controller:GoodByeController = new GoodByeController()

    // Obtain response
    const response = await controller.getMessage(name)

    // Send to the client the response
    return res.send(response)
})

export default GoodbyeRouter