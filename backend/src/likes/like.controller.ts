import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";
import { Like } from "./like.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('likes')
export class likesController {
    constructor(
        private readonly service: Like,
        private readonly topicService: TopicService
    ) {}

    @UseGuards(AuthGuard)
    @Get()
    async findByTopic(@Query() query): Promise<Like[]> {

        if (!query?.topic) {
            throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }

        //Busco o tópico
        const found = await this.topicService.findById(query.topic);

        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.service.findByTopic(found);  
    }
   
}