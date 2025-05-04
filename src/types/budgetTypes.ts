export type BudgetRecord = {
    id: number;
    title: string;
    value: string;
};

export type CategoryRecord = {
    id: number;
    category: string;
    description: string;
    tag?: string;
    value: string;
};

export interface BudgetCollection {
    category: BudgetRecord;
    expenses: CategoryRecord[];
}
/**
 * visualized data structure for BudgetCollection
 * const newBudgetCollection = {
 * id: string (Selected Month)
 * expenseLimits: BudgetRecords[]
 * budgetLimit : BudgetRecords[].map((record)=> record.value)
 * usage: CategoryRecords[].map((record)=> record.value )
 * budgetStatus: budgetlimit - usage
 * }
 * 
 */