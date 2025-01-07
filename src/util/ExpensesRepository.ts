import fs from 'fs';
import { CreateExpenseDto, IExpenses } from '../interfaces/IExpenses.js';

export class ExpensesRepository {
    FILE_PATH = './src/data/expenses.json';

    saveExpenses(expenses: IExpenses[]) {
        fs.writeFileSync(this.FILE_PATH, JSON.stringify(expenses, null, 2));
    }

    saveExpense(expense: CreateExpenseDto) {
        const expenses = this.loadExpenses();
        expenses.push({ ...expense, id: expenses.length + 1 });
        this.saveExpenses(expenses);
    }

    loadExpenses(): IExpenses[] {
        if (fs.existsSync(this.FILE_PATH)) {
            const data = fs.readFileSync(this.FILE_PATH, 'utf-8');
            return JSON.parse(data);
        }
        return [];
    }

    getLastExpense(): IExpenses | undefined {
        const expenses = this.loadExpenses();
        return expenses.at(-1);
    }
}
