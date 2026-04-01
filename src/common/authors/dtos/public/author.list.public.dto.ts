import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class AuthorPublicListDto {
    @Expose()
    @ApiProperty()
    id: number
    
    @Expose()
    @ApiProperty()
    fullName: string;
}