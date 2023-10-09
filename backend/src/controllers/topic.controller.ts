import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, HttpCode } from "@nestjs/common";
import { Topic } from "src/entities/Topic.entity";
import { TopicService } from "src/services/Topic.service";

@Controller('Topics')
export class TopicController {
    constructor(private readonly service: TopicService) {}

    @Get()
    findAll(): Promise<Topic[]> {
        return this.service.findAll();
    }
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        const found = this.service.findById(id);
        if (!found){
            throw new HttpException("Topic not found", HttpStatus.NOT_FOUND)
        }
        return found;
    }
    @Post()
    create(@Body() Topic: Topic): Promise<Topic> {
        return this.service.create(Topic);
    }
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = await this.service.findById(id)
        if (!found){
            throw new HttpException("Topic not found", HttpStatus.NOT_FOUND)
        }
        return this.service.delete(found.id);
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() Topic: Topic): Promise<Topic>{
        const found = await this.service.findById(id);
        if (!found){
            throw new HttpException("Topic not found", HttpStatus.NOT_FOUND)
        }
        return this.service.update(found.id, Topic);
    }
}