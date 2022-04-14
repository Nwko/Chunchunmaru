var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pagination } from '@discordx/pagination';
import { MessageEmbed } from 'discord.js';
import { Discord, MetadataStorage, Slash } from 'discordx';
let help = class help {
    async pages(interaction) {
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
};
__decorate([
    Slash("help", { description: "Need help? No Worries!" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], help.prototype, "pages", null);
help = __decorate([
    Discord()
], help);
export { help };
