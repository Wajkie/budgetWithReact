

interface DashboardProps {
    userName: string;
    budget: number[];
}
const DashBoard: React.FC<DashboardProps> = ({userName, budget})=> {

        const [total, spent, remaining] = budget;

    
    return (
        <div className="w-card theme-suggestion-container">
            <h2>Welcome back, {userName}!</h2>
                <p>This month's budget: {total}kr</p>
                <p>Total spent: {spent}kr</p>
                <p>Remaining: {remaining}kr</p>
            
            <button className="w-btn">Add expense</button> <button className="w-btn">View full report</button>
            
        </div>
    )
}
export default DashBoard