import { Controller, Delete, Get, Param, Post, Put, Patch, Body, Query, Req, Res } from '@nestjs/common';
import { get } from 'http';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movidesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.movidesService.getAll()
    }

    @Get("/:id")
    getOne(@Param("id") id: number): any {
        return this.movidesService.getOne(id)
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        console.log(movieData)
        return this.movidesService.create(movieData)
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return this.movidesService.deleteOne(id)
    }

    @Patch("/:id")
    path(@Param("id") id: number, @Body() updateData: UpdateMovieDto) {
        return this.movidesService.update(id, updateData)
    }

    

}
