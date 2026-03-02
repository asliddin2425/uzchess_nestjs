import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { LoginType } from "src/common/enums/enums";

export class UserListDto {
    @Expose()
    @ApiProperty()
    fullName: string;

    @Expose()
    @ApiProperty()
    profileImg: string;

    @Expose()
    @ApiProperty()
    login: string;
    
    @Expose()
    @ApiProperty()
    loginType: LoginType;

    @Expose()
    @ApiProperty()
    birthDate: Date;

    @Expose()
    @ApiProperty()
    isVerified: boolean;

    @Expose()
    @ApiProperty()
    isActive: boolean;
}