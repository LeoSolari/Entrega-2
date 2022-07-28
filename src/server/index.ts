import expres, { Express,Request, Response } from 'express'
import dotenv from 'dotenv'

// Root Router

import RootRouter from '../routes'

// Config the .env file

dotenv.config()

// Create express app

const app:Express = expres()

// Define SERVER to use "/api" and use RootRouter from 'index.ts' in routes
app.use('/api', RootRouter)

// Redirection config
app.get('/', (req:Request,res:Response) => {
    res.redirect('/api')
})
// http://localhost:8000/ --> http://localhost:8000/api/

export default app