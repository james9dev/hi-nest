import { PartialType } from "@nestjs/mapped-types"
import { IsArray, IsNumber, IsString } from "class-validator"
import { CreateMovieDto } from "./create-movie.dto"

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    
} 