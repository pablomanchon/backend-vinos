import { Repository } from 'typeorm';
import { Vino } from './vino.entity';
export declare class VinoService {
    private readonly vinoRepository;
    constructor(vinoRepository: Repository<Vino>);
    findAll(): Promise<Vino[]>;
    findOne(id: string): Promise<Vino>;
    create(vino: Vino): Promise<Vino>;
    createAll(vinos: Vino[]): Promise<Vino[]>;
    update(id: string, vino: Vino): Promise<Vino>;
    remove(id: string): Promise<void>;
}
