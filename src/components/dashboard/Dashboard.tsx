import { defaultTags } from "../../assets/utils/datastructure";
import { BudgetRecord } from "../../types/budgetTypes";
import ExpenseModal from "../expenseModal/ExpenseModal";

interface DashboardProps {
    userName: string;
    budget: number[];
    budgetOptions: BudgetRecord[];
}
const DashBoard: React.FC<DashboardProps> = ({userName, budget, budgetOptions})=> {

        const [total, spent, remaining] = budget;

    
    return (
        <div className="w-card theme-suggestion-container">
            <h2>Welcome back, {userName}!</h2>
                <p>This month's budget: {total}kr</p>
                <p>Total spent: {spent}kr</p>
                <p>Remaining: {remaining}kr</p>
            
            <button className="w-btn">Add expense</button> <button className="w-btn">View full report</button>
            <ExpenseModal  tags={defaultTags} budgetOptions={budgetOptions}/>
        </div>
    )
}
export default DashBoard