import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductDto {
  @Field()
  name:string;

  @Field()
  image:string;

  @Field()
  price:string
}
