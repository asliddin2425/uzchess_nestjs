import { OtpType } from "src/common/enums/enums";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "../user/entities/user.entity";
@Entity("otpCodes")
export class OtpCodes extends BaseModel {
    @Column()
    userId: number;

    @Column({length: 6})
    code: string;

    @Column({type: "timestamp"})
    date: Date

    @Column({type: "enum", enum: OtpType})
    type: OtpType;

    @ManyToOne(() => User, u => u.otpCodes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: User;
}