import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@UseGuards(JwtAuthGuard)  // Garante que todos os endpoints exigem autenticação
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    create(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.create(createMovieDto);
    }

    @Get()
    findAll() {
        return this.moviesService.findAllMovies();
    }

    @Get('title/:title')
    findAllByTitle(@Param('title') title: string) {
        return this.moviesService.findAllByTitle(title);
    }
    
    @Get('genre/:genre')
    findAllByGenre(@Param('genre') genre: string) {
        return this.moviesService.findAllByGenre(genre);
    }

    @Get('year/:year')
    findAllByYear(@Param('year') year: number) {
        return this.moviesService.findAllByYear(year);
    }

    @Get('rating/:rating')
    findAllByRating(@Param('rating') rating: number) {
        return this.moviesService.findAllByRating(rating);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moviesService.findMovieById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.update(+id, updateMovieDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moviesService.remove(+id);
    }
}
