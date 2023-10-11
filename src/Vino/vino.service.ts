import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vino } from './vino.entity';

@Injectable()
export class VinoService {
  constructor(
    @InjectRepository(Vino)
    private readonly vinoRepository: Repository<Vino>,
  ) {}

  async findAll(): Promise<Vino[]> {
    return this.vinoRepository.find();
  }

  async findOne(id: string): Promise<Vino> {
    const vino = await this.vinoRepository.findOne({
      where: { id },
      relations: ['imagenes'],
    });

    if (!vino) {
      throw new NotFoundException(`Vino con ID ${id} no encontrado.`);
    }

    return vino;
  }

  async create(vino: Vino): Promise<Vino> {
    return this.vinoRepository.save(vino);
  }

  async createAll(vinos: Vino[]): Promise<Vino[]> {
    return this.vinoRepository.save(vinos);
  }

  async update(id: string, vino: Vino): Promise<Vino> {
    await this.findOne(id);

    return this.vinoRepository.save(vino);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);

    await this.vinoRepository.delete(id);
  }
}
