import { CommanderHandler } from '../util/CommanderHandler.js';

export class CLIHandler {
    commanderHandler: CommanderHandler;
    constructor() {
        this.commanderHandler = new CommanderHandler();
    }
    run() {
        this.commanderHandler.setup();
        this.commanderHandler.registerOptions();
    }
}
