import EventHandlerInterface from "../../@shared/event-hadler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLog2WhenCustomerIsCreatedHandler
    implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: CustomerCreatedEvent): void {
        console.log("Esse é o segundo console.log do evento: CustomerCreated")
    }
}