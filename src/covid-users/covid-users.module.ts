import { Module } from '@nestjs/common';
import { CovidUsersService } from './covid-users.service';
import { CovidUsersController } from './covid-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CovidUser } from './entities/covid-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CovidUser])],
  controllers: [CovidUsersController],
  providers: [CovidUsersService]
})
export class CovidUsersModule {}
