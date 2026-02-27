import { Expose } from "class-transformer";
import { LoginType } from "src/common/enums/enums";

export class UserListDto {
    @Expose()
    fullName: string;

    @Expose()
    profileImg: string;

    @Expose()
    login: string;
    
    @Expose()
    loginType: LoginType;

    @Expose()
    birthDate: Date;

    @Expose()
    isVerified: boolean;

    @Expose()
    isActive: boolean;
}