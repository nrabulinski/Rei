import Command from "../../types/Command";
import { CommandMessage } from "../../extensions/Message";

import SubCommandManager from "../../types/SubCommandManager";
import { constructSubCmd } from "../../types/SubCommand";

import Set from "./scoresaber/set";
import User from "./scoresaber/user";
import Gains from "./scoresaber/gains";

export default class ScoreSaber extends Command {
  private scm = new SubCommandManager(constructSubCmd([Set, User, Gains]));

  constructor() {
    super({
      aliases: ["sc"],
    });
  }

  public async run(message: CommandMessage, args: string[]) {
    await this.scm.runSubCommand(message, args);
  }
}