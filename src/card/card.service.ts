import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Card } from './card.entity';
import { CardDto } from './dto/card.dto';

@Injectable()
export class CardService {
    constructor(
        @Inject('CardRepository')
        private readonly cardRepository: typeof Card,
    ) { }

    async findAllIds(): Promise<string[]> {
        const cards = await this.cardRepository.findAll<Card>({
            attributes: ['stuempno'],
            raw: true,
        });
        return cards.map(card => card.stuempno);
    }

    async findOne(id: string): Promise<CardDto> {
        const card = await this.cardRepository.findByPk<Card>(id);
        if (!card) {
            throw new HttpException('No card found', HttpStatus.NOT_FOUND);
        }
        return new CardDto(card);
    }

    async summary(): Promise<object> {
        const count = await this.cardRepository.count();
        return { count };
    }
}
