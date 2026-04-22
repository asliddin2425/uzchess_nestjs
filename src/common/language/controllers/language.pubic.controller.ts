import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LanguagePublicService } from '../services/language.public.service';
import { LanguagePublicDetailDto } from '../dtos/public/language.public.detail.dto';

@ApiTags('Language- Public')
@Controller('public/language')
export class LanguageControllerPublic {
  constructor(private readonly service: LanguagePublicService) {}

  @Get()
  @ApiOkResponse({ type: () => LanguagePublicDetailDto, isArray: true })
  async findAll(): Promise<LanguagePublicDetailDto[]> {
    const language = await this.service.findAll();
    return language;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => LanguagePublicDetailDto, isArray: true })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LanguagePublicDetailDto> {
    return await this.service.findOne(id);
  }
}
