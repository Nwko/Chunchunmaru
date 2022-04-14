import { Pagination } from '@discordx/pagination';
import type { CommandInteraction, ContextMenuInteraction } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { Discord, MetadataStorage, Slash, ContextMenu } from 'discordx';

@Discord()
export class help {
    @Slash("help", { description: "Need help? No Worries!" })
    async pages(interaction: CommandInteraction): Promise<void> {
        const commands = MetadataStorage.instance.applicationCommands.map((cmd) => {
            return { description: cmd.description, name: cmd.name };
        });

        const pages = commands.map((cmd, i) => {
            return new MessageEmbed()
                .setColor("#bdd3f5")
                .setFooter({ text: `Page ${i + 1} of ${commands.length}` })
                .setTitle("**Here to help!**")
                .addField("Command", cmd.name)
                .addField("Description", cmd.description);
        });

        const pagination = new Pagination(interaction, pages);
        await pagination.send();
    }
}
