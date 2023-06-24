import { PartialType } from '@nestjs/mapped-types';
import { CreateCovidUserDto } from './create-covid-user.dto';

export class UpdateCovidUserDto extends PartialType(CreateCovidUserDto) {}
