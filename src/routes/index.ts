import express, { Request, Response } from 'express'
import GoodbyeRouter from './GoodbyeRouter'
import { LogSuccess } from '../utils/Logger'

// Server instance

let server = express()

// Router instance

let rootRouter = express.Router()

// Activate for requests to http://localhost:8000/api

rootRouter.get('/', (req:Request, res:Response) => {
    LogSuccess('GET: http://localhost:8000/api')
    res.send('WELCOME TO ROOT ROUTER')
})

// Redirections to routers & controllers

server.use('/', rootRouter) // http://localhost:8000/api 
server.use('/goodbye', GoodbyeRouter) // http://localhost:8000/api/goodbye --> GoodbyeRouter

export default server