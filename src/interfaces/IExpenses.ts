export interface IExpenses {
    id: number;
    date: string;
    description: string;
    amount: number;
}

export interface CreateExpenseDto {
    date: string;
    description: string;
    amount: number;
}
