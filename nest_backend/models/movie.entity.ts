import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    director: string;

    @Column()
    releaseYear: number;

    @Column()
    genre: string;

    @Column({
      type: 'text'
    })
    description: string;

    @Column()
    duration: number;

    @Column({
      type: 'decimal',
      precision: 2,
      scale: 1,
      default: 0.0
    })
    rating: number;

    @Column()
    posterUrl: string;

    @Column()
    releaseDate: Date;
}
