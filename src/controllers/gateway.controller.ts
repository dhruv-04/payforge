import { Body, Controller, Get, Post } from "@nestjs/common";
import { GatewayPaymentDto } from "src/dto/gateway.dto";
import { GatewayService } from "src/services/gateway.service";

@Controller()
export class GatewayController {
    constructor(private readonly gatewayService: GatewayService) {}

    @Post("payment")
    createPayment(@Body() gatewayPaymentDto: GatewayPaymentDto) {
        return this.gatewayService.createPayment(gatewayPaymentDto);
    }
    //function to be written later

    @Get()
    health_check(): string {
        return "Server is running.";
    }
}

