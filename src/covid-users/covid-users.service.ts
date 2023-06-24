import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCovidUserDto } from './dto/create-covid-user.dto';
import { UpdateCovidUserDto } from './dto/update-covid-user.dto';
import { CovidUser } from './entities/covid-user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CovidUsersService {
  constructor(
    @InjectRepository(CovidUser)
    private covidUsersRepository: Repository<CovidUser>,
  ) { }

  async create(createCovidUserDto: CreateCovidUserDto) {
    const count = await this.covidUsersRepository.countBy({ no: createCovidUserDto.no });
    if (count > 0) throw new BadRequestException(`This Number Order [${createCovidUserDto.no}] already exists in the System`);

    try {
      let model: CreateCovidUserDto = createCovidUserDto;
      model.annouce_date = new Date();
      model.notified_date = new Date();
      model.age = createCovidUserDto.age ? createCovidUserDto.age : 20;
      model.unit = createCovidUserDto.unit ? createCovidUserDto.unit : "years";
      model.nationality = createCovidUserDto.nationality ? createCovidUserDto.nationality : "thai";
      model.province_of_isolation = createCovidUserDto.province_of_isolation ? createCovidUserDto.province_of_isolation : "Bangkok";
      model.risk = createCovidUserDto.risk ? createCovidUserDto.risk : "checking process";
      model.province_of_onset = createCovidUserDto.province_of_onset ? createCovidUserDto.province_of_onset : "ChiangMai";
      model.district_of_onset = createCovidUserDto.district_of_onset ? createCovidUserDto.district_of_onset : "JomThong";
      return this.covidUsersRepository.save(model);

    } catch (error) {
      throw new BadRequestException(`can't create number order ${createCovidUserDto.no} : `, error.Message);
    }

  }

  findAll(): Promise<CovidUser[]> {
    return this.covidUsersRepository.find();
  }

  findOne(no: number): Promise<CovidUser | null> {
    return this.covidUsersRepository.findOneBy({ no });
  }

  async update(no: number, updateCovidUserDto: UpdateCovidUserDto) {
    try {

      const updated = await this.covidUsersRepository.update({ no: no }, { ...updateCovidUserDto })
      return { "status": `Updated Number Order ${no}` };

    } catch (error) {
      throw new BadRequestException(`can't update number order ${no} : `, error.Message);
    }

  }

  async remove(no: number) {
    try {
      const record = await this.covidUsersRepository.findOneBy({ no });
      await this.covidUsersRepository.delete(record.id);
      return { "status": `Deleted Number Order ${no}` }

    } catch (error) {
      throw new BadRequestException(`can't delete number order ${no} `, error.Message);
    }

  }
}
