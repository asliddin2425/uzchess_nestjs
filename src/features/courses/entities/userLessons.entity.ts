import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "../../../auth/user/entities/user.entity";
@Entity("userLessons")
export class UserLessons extends BaseModel {
    @Column()
    userId: number;

    @Column() 
    courseLessonId: number;

    @Column({nullable: true})
    stoppedAt: number;

    @Column({type: "boolean", default: false})
    isCompleted: boolean;

    @ManyToOne(() => User, ul => ul.userLessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: User;
}