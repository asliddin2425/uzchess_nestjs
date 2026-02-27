import { Expose } from "class-transformer";

export class DifficultyListDto {
    @Expose()
    title: string;

    @Expose()
    icon: string;
}