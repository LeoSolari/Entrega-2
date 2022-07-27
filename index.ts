import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

const anon = "anonimo"

// Configurando el archivo .env

dotenv.config()

// Creando la APP

const app = express()
const port: string | number = process.env.PORT || 8000

// Definiendo Rutas

app.get('/', (req: Request, res: Response) => {
    res.send({data:{'message': 'Goodbye, world!'}})
})

app.get('/hello', (req: Request, res: Response) => {
    res.send({data:{'message': `hola ${anon}`}})
})


app.post('/hello', (req: Request, res: Response) => {
    res.send({data:{'message': `hola ${anon}`}})
})


// Ejecutar App y escuchar al Puerto

app.listen(port, () => {
    console.log(`Express corriendo en: http://localhost:${port}` )
})