import { Expose } from "class-transformer";

export class TermsListDto {
    @Expose()
    content: string;
}