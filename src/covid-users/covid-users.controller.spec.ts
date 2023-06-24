import { Test, TestingModule } from '@nestjs/testing';
import { CovidUsersController } from './covid-users.controller';
import { CovidUsersService } from './covid-users.service';

describe('CovidUsersController', () => {
  let controller: CovidUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CovidUsersController],
      providers: [CovidUsersService],
    }).compile();

    controller = module.get<CovidUsersController>(CovidUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
