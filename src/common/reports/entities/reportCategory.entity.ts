import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany } from "typeorm";
import { Report } from "./report.entity";

@Entity("reportCategory")
export class ReportCategory extends BaseModel {

    @Column({length: 64})
    title: string;

    @Column()
    order: number;

    @OneToMany(() => Report, report => report.reportCategory)
    reports: Report[];
}