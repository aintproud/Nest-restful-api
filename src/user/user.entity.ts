import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export abstract class student
{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', length: 25})
    name: string

    @Column({type:'number'})
    age: number

    @Column({type:'boolean', default:false})
    isProgrammer: boolean
}