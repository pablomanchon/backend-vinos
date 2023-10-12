import { VinoService } from './vino.service';
import { Vino } from './vino.entity';
export declare class VinoController {
    private readonly vinoService;
    constructor(vinoService: VinoService);
    findAll(): Promise<Vino[]>;
    findOne(id: string): Promise<Vino>;
    create(vino: Vino): Promise<Vino>;
    createAll(vinos: Vino[]): Promise<Vino[]>;
    update(id: string, vino: Vino): Promise<Vino>;
    remove(id: string): Promise<void>;
}
