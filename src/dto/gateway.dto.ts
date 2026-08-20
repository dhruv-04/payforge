import { IsNotEmpty, IsString, IsNumber  } from "class-validator";

export class GatewayPaymentDto {
    @IsNotEmpty()
    @IsString()
    readonly userId! : string;

    @IsNotEmpty()
    @IsNumber()
    readonly amount!: number;

    @IsNotEmpty()
    @IsString()
    readonly currency!: string;
}