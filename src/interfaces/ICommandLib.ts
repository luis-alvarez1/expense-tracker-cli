import { Command } from 'commander';

export interface ICommandLib {
    program: Command;
    setup(): void;
    registerOptions(): void;
}
