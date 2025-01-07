# Expense Tracker CLI

![License](https://img.shields.io/github/license/luis-alvarez1/expense-tracker-cli)

Expense Tracker CLI is a command-line tool to help you manage your personal expenses. This project is implemented in TypeScript and uses a simple file-based approach to store expenses.

## Features

-   **Add Expense**: Add a new expense with a description and amount.
-   **List Expenses**: List all recorded expenses in a formatted table.
-   **Delete Expense**: Delete an expense by its ID.
-   **Summary**: View a summary of expenses for a specific month or all expenses.

## Installation

1. Clone the repository:
    ```bash
    	git clone https://github.com/luis-alvarez1/expense-tracker-cli.git
    ```
2. Navigate to the project directory:
    ```bash
    	cd expense-tracker-cli
    ```
3. Install dependencies:
    ```bash
    	npm install
    ```
4. Compile TypeScript to JavaScript::

    ```bash
    	npm run build
    ```

5. Install the CLI on your system:

    ```bash
    	npm install -g
    ```

## Usage

Below are the commands you can use with the Expense Tracker CLI:

### Add Expense

To add a new expense:

```
expense-tracker-cli add --description="Lunch" --amount="15.50"
```

### List Expenses

To list all expenses:

```
expense-tracker-cli list
```

### Delete Expense

To delete an expense by ID:

```
expense-tracker-cli delete --id 1
```

### Summary

To view the total expenses:

```
expense-tracker-cli summary
```

To view the total expenses for a specific month (e.g., January):

```
expense-tracker-cli summary --month 1
```

## Project Structre

```
expense-tracker-cli/
├── src/
│   ├── interfaces/
│   │   └── IExpenses.ts
│   │   └── ICommandLib.ts
│   ├── data/
│   │   └── expenses.json
│   ├── CLI/
│   │   └── CLIHandler.ts
│   ├── util/
│   │   └── ActionsHandler.ts
│   │   └── CommanderHandler.ts
│   │   └── ExpensesRepository.ts
│   │   └── options.enum.ts
│   └── index.ts
├── .prettierrc
├── .gitignore
├── LICENSE
├── tsconfig.json
├── package.json
└── README.md
└── yarn.lock
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas for improvement.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

-   Luis Alvarez, Dec. 2024.

https://roadmap.sh/projects/github-user-activity
