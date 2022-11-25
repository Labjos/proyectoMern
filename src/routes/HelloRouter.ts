import express, { Request, Response } from "express"
import { HelloController } from "@/controller/HelloController";
import { emit } from "process";
import { request } from "http";
import { logInfo } from "@/utils/logger";

// Router from express

let helloRouter = express.Router()


helloRouter.route('/')

        .get(async (req: Request, res: Response ) => {
            let name: any = req?.query?.name
            logInfo(`Query param: ${name}`)
            const controller: HelloController = new HelloController()
            const response = await controller.getMessage(name)
            return res.send(response)

        })


export default helloRouter