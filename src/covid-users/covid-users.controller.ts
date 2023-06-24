import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CovidUsersService } from './covid-users.service';
import { CreateCovidUserDto } from './dto/create-covid-user.dto';
import { UpdateCovidUserDto } from './dto/update-covid-user.dto';

@Controller('covid-users')
export class CovidUsersController {
  constructor(private readonly covidUsersService: CovidUsersService) {}

  @Post()
  create(@Body() createCovidUserDto: CreateCovidUserDto) {
    return this.covidUsersService.create(createCovidUserDto);
  }

  @Get()
  findAll() {
    return this.covidUsersService.findAll();
  }

  @Get(':no')
  findOne(@Param('no') no: string) {
    return this.covidUsersService.findOne(+no);
  }

  @Patch(':no')
  update(@Param('no') no: string, @Body() updateCovidUserDto: UpdateCovidUserDto) {
    return this.covidUsersService.update(+no, updateCovidUserDto);
  }

  @Delete(':no')
  remove(@Param('no') no: string) {
    return this.covidUsersService.remove(+no);
  }
}
