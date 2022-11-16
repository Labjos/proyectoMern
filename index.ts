import express, { Express, Request, Response } from "express"
import dotenv from 'dotenv'

// configuration the .env file

dotenv.config()

// Create Express App

const app: Express = express()
const port: string | number = process.env.PORT || 8000

// Define the first route

app.get('/', (req: Request, res: Response) => {
    //Send a Hello
    res.send('Welcome to API resful: Expres + TS +  Jest + Swagger + Mongoose')
})

app.get('/Hello', (req: Request, res: Response) => {
    //Send a Hello
    res.send('Welcome to ROUTE: Hola Caracola!')
})

//execute APP and listen Request 

app.listen(port, () => {
     console.log(`Express Server: Running at http://localhost:${port}`)
 } )