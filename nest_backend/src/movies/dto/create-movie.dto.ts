export class CreateMovieDto {
    readonly title: string;
    readonly director: string;
    readonly releaseYear: number;
    readonly genre: string;
    readonly description: string;
    readonly duration: number;
    readonly rating: number;
    readonly posteUrl: string;
    readonly releaseDate: Date;
}
