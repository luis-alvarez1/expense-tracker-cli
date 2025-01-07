import { Command } from 'commander';
import { ICommandLib } from '../interfaces/ICommandLib.js';
import { ActionsHandler } from './ActionsHandler.js';
import { OptionsEnum } from './options.enum.js';

export class CommanderHandler implements ICommandLib {
    program: Command;
    actionsHandler: ActionsHandler;

    constructor() {
        this.program = new Command();
        this.actionsHandler = new ActionsHandler();
    }

    setup() {
        this.program.version('1.0.0').description('Expense Tracker CLI');
    }

    registerOptions() {
        // Add expense
        this.program
            .command(OptionsEnum.ADD)
            .description('Add a new expense')
            .requiredOption(
                '-d, --description <description>',
                'Expense description'
            )
            .requiredOption('-a, --amount <amount>', 'Expense amount')
            .action(this.actionsHandler.add);

        // List expenses
        this.program
            .command(OptionsEnum.LIST)
            .description('List expenses')
            .action(this.actionsHandler.list);

        // Delete expense
        this.program
            .command(OptionsEnum.DELETE)
            .description('Delete an expense')
            .requiredOption('--id <id>', 'Expense ID')
            .action(this.actionsHandler.delete);

        // Summmary expenses
        this.program
            .command(OptionsEnum.SUMMARY)
            .description('Summary of expenses')
            .option('--month <month>', 'Filter by month')
            .action(this.actionsHandler.summary);

        // Parse input data
        this.program.parse(process.argv);
    }
}
