import chalk from 'chalk';
import { IExpenses } from '../interfaces/IExpenses.js';
import { ExpensesRepository } from './ExpensesRepository.js';

export class ActionsHandler {
    expensesRepository: ExpensesRepository;

    constructor() {
        this.expensesRepository = new ExpensesRepository();

        // bind functions to use them with callbacks
        this.add = this.add.bind(this);
        this.list = this.list.bind(this);
        this.delete = this.delete.bind(this);
        this.summary = this.summary.bind(this);
    }

    add(options: { description: string; amount: string }) {
        const expense = {
            date: new Date().toISOString().split('T')[0],
            description: options.description,
            amount: parseFloat(options.amount),
        };

        this.expensesRepository.saveExpense(expense);

        console.log(
            chalk.greenBright(
                `Expense added successfully (ID: ${
                    this.expensesRepository.getLastExpense()?.id
                })`
            )
        );
    }

    list() {
        const expenses = this.expensesRepository.loadExpenses();

        const header = '# ID Date       Description          Amount';
        console.log(chalk.blueBright(header));

        expenses.forEach((expense) => {
            console.log(this.rowFormat(expense));
        });
    }

    delete({ id }: { id: string }) {
        let expenses = this.expensesRepository.loadExpenses();
        expenses = expenses.filter((e) => e.id !== parseInt(id));

        this.expensesRepository.saveExpenses(expenses);
    }

    summary({ month }: { month: string }) {
        let expenses = this.expensesRepository.loadExpenses();

        if (month) {
            expenses = expenses.filter(
                (e) => new Date(e.date).getMonth() + 1 === parseInt(month)
            );
        }

        let total: number = 0;

        expenses.forEach((e) => {
            total += e.amount;
        });
        const message = month
            ? chalk.cyanBright(`Total expenses for month ${month}: $${total}`)
            : chalk.cyanBright(`Total expenses: $${total}`);
        console.log(message);
    }

    private rowFormat(expense: IExpenses) {
        const id = String(expense.id).padEnd(4, ' ');
        const date = expense.date.padEnd(10, ' ');
        const description = expense.description.padEnd(20, ' ');
        const amount = `$${String(expense.amount).padEnd(6, ' ')}`;
        return `${id} ${date} ${description} ${amount}`;
    }
}
