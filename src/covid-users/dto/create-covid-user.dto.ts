import { IsNotEmpty } from "class-validator";

export class CreateCovidUserDto {
    id?: number;

    @IsNotEmpty()
    no: number;

    annouce_date: Date;
    notified_date: Date;
    age: number;
    unit: string;
    nationality: string;
    province_of_isolation: string;
    risk: string;
    province_of_onset: string;
    district_of_onset: string;
    isActive?: boolean;
}
