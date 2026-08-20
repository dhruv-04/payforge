import { Injectable } from "@nestjs/common";
import { GatewayPaymentDto } from "src/dto/gateway.dto";

@Injectable()
export class GatewayService {

    //mockPaymentProcessor
    async paymentProcessor() {
        const status = ['PENDING', 'SUCCESS', 'FAILED'];
        const randomIndex = Math.floor(Math.random() * status.length);
        return status[randomIndex];
    }


    //function to test the health of the server
    health_check(): string {
        return "Server is running";
    }

    //function to initiate the payment
    async createPayment(gatewayPaymentDto: GatewayPaymentDto) {
        //create a transaction to complete only when status from processor is recevied.
        const status = await this.paymentProcessor();
        let message = "";
        if(status === 'PENDING') message = "Transaction is pending.";
        else if(status === 'SUCCESS') message = "Transaction is successful!";
        else message = "Transaction has failed!";
        return {
            "message": message,
            "status": status
        };
    }
}
