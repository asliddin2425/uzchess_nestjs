import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AuthorPublicService } from '../services/author.public.service';
import { AuthorPublicListDto } from '../dtos/public/author.list.public.dto';
@ApiTags('Author- Public')
@Controller('public/author')
export class AuthorControllerPublic {
  constructor(private readonly service: AuthorPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => AuthorPublicListDto, isArray: true })
  async findAll(): Promise<AuthorPublicListDto[]> {
    const author = await this.service.findAll();
    return author;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => AuthorPublicListDto, isArray: true })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AuthorPublicListDto> {
    return await this.service.findOne(id);
  }
}
