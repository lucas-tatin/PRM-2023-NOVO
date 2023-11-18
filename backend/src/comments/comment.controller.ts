import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { TopicService } from "src/topics/topic.service";
import { AuthService } from "src/auth/auth.service";



@UseInterceptors(ClassSerializerInterceptor)
@Controller('comments')
export class CommentController {
    constructor(
        private readonly service: CommentService,
        private readonly topicService: TopicService
    ) {}
    @UseGuards(AuthService)
    @Get()  
    async findAll(@Query() query): Promise<Comment[]> {

        if (!query?.topic) {
            throw new HttpException('Topico não encontrado', HttpStatus.BAD_REQUEST)
        }
            //Busco o tópico do usuário
            const found = await this.topicService.findById(query.topic);

            if (!found) {
                throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST)
            }
            return this.service.findByTopic(found);
        } 
        
    } 
   
    @Post()
    create(@Body() Comment: Comment): Promise<Comment> {
        return this.service.create(Comment);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.delete(found.id);
    }
}