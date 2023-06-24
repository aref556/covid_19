import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CovidUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    no: number;

    @Column()
    annouce_date: Date;

    @Column()
    notified_date: Date;

    @Column()
    age: number;
    
    @Column()
    unit: string;
    
    @Column()
    nationality: string;
    
    @Column()
    province_of_isolation: string;

    @Column()
    risk: string;

    @Column()
    province_of_onset: string;

    @Column()
    district_of_onset: string;

    @Column({ default: true })
    isActive: boolean;
}
