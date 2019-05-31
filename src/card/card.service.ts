import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Card } from './card.entity';
import { CardDto } from './dto/card.dto';
import { CardQueryDto } from './dto/card-query.dto';
import { Sequelize } from 'sequelize-typescript';
const { or, like } = Sequelize.Op;

@Injectable()
export class CardService {
    constructor(
        @Inject('CardRepository')
        private readonly cardRepository: typeof Card,
    ) { }

    async findByCondition(cardQueryDto: CardQueryDto): Promise<CardDto[]> {
        const where = {
            [or]: [
                { stuempno: { [like]: `%${cardQueryDto.stuempno}%` } },
                { custname: { [like]: `%${cardQueryDto.custname}%` } },
            ],
        };
        const cards = await this.cardRepository.findAll<Card>({
            where,
            raw: true,
        });
        return cards;
    }

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
