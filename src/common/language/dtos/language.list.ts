import { Expose } from "class-transformer";

export class LanguageListDto {
    @Expose()
    title: string;

    @Expose()
    code: string;
}