/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, response, Response } from "express";
import helloRouter from "./HelloRouter";
import { logInfo } from "@/utils/logger";


// instanciar el Server

let server = express()

//instance Router... o acceder a Router

let rootRouter = express.Router()

//activacion de Router en ... Api

rootRouter.get('/', (req: Request, res: Response) => {
        logInfo('GET: http://localhost:8080/api/')
// envia hello name
        res.send('Welcome to the MOON API Restful: E+T+N+J+S+M')

})

// Redirections to routes & controllers

server.use('/', rootRouter) // este es /Api
server.use('/hello', helloRouter) // este es /api/hello

export default server
