import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title: string

  @Column()
  author: string

  @Column()
  coverImageUrl: string

  @Column()
  pageCount: number

  @Column()
  publisher: string

  @Column("text")
  synopsis: string
}