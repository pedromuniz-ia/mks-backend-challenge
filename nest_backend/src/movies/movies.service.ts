import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from 'models/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';


@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movies)
        private moviesRepository: Repository<Movies>,
    ) {}

    create(movieData: CreateMovieDto): Promise<Movies> {
        const movie = this.moviesRepository.create(movieData);
        return this.moviesRepository.save(movie);
    }

        // Em movies.service.ts
    async findAllMovies(): Promise<Movies[]> {
        return this.moviesRepository.find();
    }

    async findAllByTitle(title: string): Promise<Movies[]> {
        return this.moviesRepository.find({ where: { title: title } });
    }

    async findAllByGenre(genre: string): Promise<Movies[]> {
        return this.moviesRepository.find({ where: { genre: genre } });
    }

    async findAllByYear(year: number): Promise<Movies[]> {
        return this.moviesRepository.find({ where: { releaseYear: year } });
    }

    async findAllByRating(rating: number): Promise<Movies[]> {
        return this.moviesRepository.find({ where: { rating: rating } });
    }

    async findMovieById(id: string): Promise<Movies> | undefined {
        return this.moviesRepository.findOne({ where: { id: Number(id) } });
    }


    update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movies> {
        return this.moviesRepository.save({ id, ...updateMovieDto });
    }

    remove(id: number): Promise<void> {
        return this.moviesRepository.delete(id).then(res => {});
    }
}
