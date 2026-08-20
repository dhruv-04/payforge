import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class GatewayPaymentDto {
    @IsNotEmpty()
    @IsNumber()
    readonly amount!: number;

    @IsNotEmpty()
    @IsString()
    readonly currency!: string;
}