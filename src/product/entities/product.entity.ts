import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@ObjectType()
@Entity('product')
export class Product {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id:number

  @Field({nullable:true})
  @Column({nullable:true})
  name:string;

  @Field()
  @Column({})
  image:string;

  @Field()
  @Column({})
  price:string;

  @Field()
  @CreateDateColumn({})
  createAt:Date;

  @Field()
  @UpdateDateColumn({nullable:true})
  updateAt:Date;
}
