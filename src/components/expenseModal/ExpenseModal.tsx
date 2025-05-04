import React, {useState } from "react";
import { BudgetRecord, CategoryRecord } from "../../types/budgetTypes";

type ExpenseModalProps = {
    budgetOptions: BudgetRecord[];
    tags: string[];
}


const ExpenseModal: React.FC<ExpenseModalProps> = ({budgetOptions, tags})=> {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [tagCollection, setTagCollection] = useState(tags);
    const [selectedTag, setSelectedTag] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("0");
    const [description, setDescription] = useState("");
    const [expenseCollection, setExpenseCollection] = useState<CategoryRecord[]>([]);
    const handleExpenseSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExpense: CategoryRecord = {
            id: Math.floor(Math.random() * 10000),
            category: selectedCategory,
            description: description,
            value: expenseAmount,
        }
        setExpenseCollection((prev)=> [...prev, newExpense])
    }

    return (
        <div className="w-card theme-suggestion-container">
            <h3>Select a budget category for expense registration</h3>
            <form onSubmit={handleExpenseSubmit} className="w-card">
                <label>
                    <span>Selected category:</span>
                    <select className="w-input" value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
                        {budgetOptions.length > 0 ? budgetOptions.map((item, index)=> <option key={index} value={item.title}> {item.title}</option>) : <option>No Collection available</option>}
                    </select>
                    
                </label>
                <label>
                        <span>Choose a tag for the expense</span>
                    <select className="w-input" value={selectedTag} onChange={(e)=> setSelectedTag(e.target.value)}>
                        {tagCollection.length > 1 ? tagCollection.map((item, index)=> <option key={index} value={item}> {item}</option>) : <option>No Collection available</option>}
                    </select>
                </label>
                <label>
                    <span>Choose amount:</span>
                    <input
                        className="w-input"
                        type="number"
                        value={expenseAmount}
                        required
                        min={1}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        style={{ marginRight: "0.5rem" }}
                        /> 
                </label>
                <br />
                <label>
                    <span>Description:</span>
                    <input
                        className="w-input"
                        type="text"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ marginRight: "0.5rem" }}
                        /> 
                </label>
                <p>Preview: <span>Adding expense in category: {selectedCategory}</span>. <span>Chosen tag is: {selectedTag}. </span> Amount: {expenseAmount}</p>
                <button className="w-btn" type="submit">Add expense</button>
            </form>
            
            {expenseCollection.length > 0 && 
            <div className="w-card">
                <h4>Added expenses:</h4>
                <ul> {expenseCollection.map((item)=> 
                    <li key={item.id} style={{display: "flex", justifyContent: "space-evenly", padding: "0.5rem"}}>
                        <span>Category: {item.category}. </span>
                        <span>Description: {item.description}. </span>
                        <span>Amount: {item.value}. </span>
                        <span>Tag: {item.category}. </span>
                    </li>)}
                </ul>
            </ div>
            }
        </div>
    );
}
export default ExpenseModal;