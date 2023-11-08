import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Args, Mutation,Query, Resolver } from '@nestjs/graphql';
import { Category } from './entities/category.entity';

@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(()=>Category)
  async create(@Args('create') createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Query(()=>[Category])
  async findAll():Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Query(()=>Category)
  async findOne(@Args('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(()=>Category)
  async update(@Args('id') id: number, @Args() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Mutation(()=>Number)
  async remove(@Args('id') id: number) {
    return this.categoryService.remove(id);
  }
}
