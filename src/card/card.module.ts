import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { cardProviders } from './card.providers';

@Module({
    imports: [DatabaseModule],
    providers: [CardService, ...cardProviders],
    controllers: [CardController],
})
export class CardModule { }
