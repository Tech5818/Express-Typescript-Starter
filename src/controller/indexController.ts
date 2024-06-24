import { IndexService } from "@src/service";
import { Response } from "express";
import { Body, Controller, Get, JsonController, Post, Res } from "routing-controllers";
import { Service } from "typedi";

@JsonController()
@Service()
export class IndexController {
    constructor(private indexService: IndexService) {}

    @Post("/")
    async createUser(@Body() body: {name: string}, @Res() res: Response) {
        console.log(body);
        
        const user = await this.indexService.createUser(body.name)

        return res.status(201).json(user)
    }

    @Get("/test")
    async test(@Res() res: Response) {
        return res.json({success: true})
    }
}