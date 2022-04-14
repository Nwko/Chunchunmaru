import type { SimpleCommandMessage } from "discordx";
import {
    Discord,
    SimpleCommand
} from 'discordx';

@Discord()
export class hi {
    @SimpleCommand("hi", { aliases: ["hello"] })
    hi(command: SimpleCommandMessage): void {
        command.message.reply(`👋 ${command.message.author}!`);
    }
}
