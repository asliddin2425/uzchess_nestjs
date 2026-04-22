import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseSectionService } from '../services/courseSection.service';
import { CourseSectionListDto } from '../dtos/courseSection.list';
import { CourseSectionCreateDto } from '../dtos/courseSection.create';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('courseSection')
@UseGuards(AuthGuard)
export class CourseSectionController {
  constructor(private readonly service: CourseSectionService) {}

  @Get()
  @ApiOkResponse({ type: CourseSectionListDto, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CourseSectionListDto })
  async getOne(@Param('id') id: number) {
    return await this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: CourseSectionCreateDto })
  async create(@Body() payload: CourseSectionCreateDto) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
