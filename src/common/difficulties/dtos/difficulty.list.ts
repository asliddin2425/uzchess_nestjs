import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class DifficultyListDto {
    
    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    icon: string;
}