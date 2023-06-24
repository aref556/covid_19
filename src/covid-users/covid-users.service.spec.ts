import { Test, TestingModule } from '@nestjs/testing';
import { CovidUsersService } from './covid-users.service';

describe('CovidUsersService', () => {
  let service: CovidUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CovidUsersService],
    }).compile();

    service = module.get<CovidUsersService>(CovidUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
