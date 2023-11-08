import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

@Resolver('product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(()=>Product)
  async createProduct(@Args('createProduct') createProductDto: CreateProductDto):Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Query(()=>[Product])
  async findAllProduct():Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(()=>Product)
  async findOneProduct(@Args('id') id: number):Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation(()=>Product)
  updateProduct(@Args('id') id: number, @Args('updateProduct') updateProductDto: UpdateProductDto):Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Mutation(()=>Number)
  removeProduct(@Args('id') id: string):Promise<number> {
    return this.productService.remove(+id);
  }
}
