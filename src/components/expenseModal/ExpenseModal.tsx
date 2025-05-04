import React, {useState } from "react";
import { BudgetRecord } from "../../types/budgetTypes";

type ExpenseModalProps = {
    budgetOptions: BudgetRecord[],
    tags: string[]
}


const ExpenseModal: React.FC<ExpenseModalProps> = ({budgetOptions, tags})=> {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [tagCollection, setTagCollection] = useState(tags);
    const handleExpenseSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleExpenseSubmit}>
            <label>
                <select className="w-input" value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
                    {budgetOptions.length > 1 ? budgetOptions.map((item, index)=> <option key={index} value={item.id}> {item.title}</option>) : <option>No Collection available</option>}
                </select>
                </label>
            </form>
        </>
    );
}
export default ExpenseModal;