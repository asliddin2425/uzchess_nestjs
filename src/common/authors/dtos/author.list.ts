import { Expose } from "class-transformer";

export class AuthorListDto {
    @Expose()
    fullName: string;
}