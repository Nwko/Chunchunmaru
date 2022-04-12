import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class MessageDevlte {
  @On("messageDelete")
  onMessageDelete([message]: ArgsOf<"messageDelete">, client: Client): void {
    console.log("Message Deleted", client.user?.username, message.content);
  }
}

@Discord()
export class messageDeleteBulk {
  @On("messageDeleteBulk")
  onMessageDeleteBulk(
    [messageDeleteBulk]: ArgsOf<"messageDeleteBulk">,
    client: Client
  ): void {
    console.log(
      "Message Deleted Bulk",
      client.user?.username,
      messageDeleteBulk.size
    );
  }
}
