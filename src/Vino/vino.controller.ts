import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { VinoService } from './vino.service';
import { Vino } from './vino.entity';

@Controller('/vinos')
export class VinoController {
  constructor(private readonly vinoService: VinoService) {}

  @Get()
  findAll(): Promise<Vino[]> {
    return this.vinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Vino> {
    return this.vinoService.findOne(id);
  }

  @Post('/create')
  create(@Body() vino: Vino): Promise<Vino> {
    return this.vinoService.create(vino);
  }

  @Post('/createAll')
  createAll(@Body() vinos: Vino[]): Promise<Vino[]> {
    return this.vinoService.createAll(vinos);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() vino: Vino): Promise<Vino> {
    return this.vinoService.update(id, vino);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.vinoService.remove(id);
  }
}
