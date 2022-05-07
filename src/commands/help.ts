import { Pagination } from '@discordx/pagination';
import type { CommandInteraction } from 'discord.js';
import { MessageEmbed, Guild } from 'discord.js';
import { Discord, MetadataStorage, Slash } from 'discordx';

@Discord()
export class help {
    @Slash("help", { description: "Need help? No Worries! (Probably :D)" })
    async pages(interaction: CommandInteraction): Promise<void> {
        const commands = MetadataStorage.instance.applicationCommands.map((cmd) => {
            return { description: cmd.description, name: cmd.name };
        });

        const main = commands.map((cmd, i) => {
            return new MessageEmbed()
                .setColor("#bdd3f5")
                .setFooter({ text: `Page ${i + 1} of ${commands.length}` })
                .setTitle("**Here to help! :D**")
                .addField("Command", cmd.name)
                .addField("Description", cmd.description);
        });

        const pagination = new Pagination(interaction, main);
        await pagination.send();
    }
}
