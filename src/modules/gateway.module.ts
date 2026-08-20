import { Module } from "@nestjs/common";
import { GatewayController } from "src/controllers/gateway.controller";
import { GatewayService } from "src/services/gateway.service";

@Module({
    imports: [],
    controllers: [GatewayController],
    providers: [GatewayService],
})
export class GatewayModule {}