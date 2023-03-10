import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    getAll(): Movie[] {
        return this.movies
    }

    getOne(id: number): any {
        const movie = this.movies.find(movie => movie.id === id)

        if (movie == null) {
            throw new NotFoundException(`Movie with ID: ${id} not found.`)
        }

        return {code: 200, description: "success", data: movie}
    }

    deleteOne(id: number): boolean {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id)
        return true
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id: number, updateData: UpdateMovieDto): any {
        const movieResult = this.getOne(id)
        this.deleteOne(id)

        const movie = movieResult.data

        this.movies.push({ ...movie, ...updateData })
        
        return {code: 200, description: "success", data: this.movies}
    }
}
