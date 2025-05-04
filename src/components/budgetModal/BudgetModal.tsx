import { useEffect, useState } from "react";
import { categories } from "../../assets/utils/datastructure";
import InputComponent from "./InputComponent";
export type BudgetRecord = {
    id: number,
    title: string,
    value: string
}
type BudgeModalprops = {
    currentMonth: string;
    onsubmit: (budgetCategories: BudgetRecord[])=> void;
}
const BudgetModal: React.FC<BudgeModalprops> = ({onsubmit})=> {
    const [categoryOptions, setCategoryOptions] = useState(categories);
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [budgetCategories, setBudgetCategories] = useState<BudgetRecord[]>([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");
    const [showNewCategoryForm, setshowNewCategoryForm] = useState(false)
    // Handler for adding a custom category
    const handleNewCategorySubmit =(e: React.FormEvent) => {
        e.preventDefault();
        const findCategory = categoryOptions.filter((e)=> e === newCategoryName);
        if (findCategory.length !== 0 || newCategoryName.trim().length < 2) {
            setErrorMsg("Cannot add chosen Category")
            return;
        }
        setCategoryOptions((prev)=>[...prev, newCategoryName]);
        setSelectedCategory(newCategoryName);
        setNewCategoryName("");

    }

    //handler for adding a category to the monthly budget form
    const handleBudetForm = (e: React.FormEvent)=> {
        e.preventDefault();
        const findBudget = budgetCategories.filter((item) => item.title === selectedCategory);
        if (findBudget.length !== 0) {
            setErrorMsg("Category is already selected!")
            return;
        }
        setBudgetCategories((prev)=> [...prev, {id: Math.max(0, ...budgetCategories.map((e) => e.id )) + 1, title: selectedCategory, value: "0"}])
    }

    //handles the values for setting budget limits
    const handleValueChange = (id: number, newValue: string) => {
        setBudgetCategories((prev) =>
          prev.map((f) => (f.id === id ? { ...f, value: newValue } : f))
        );
      };

      //removing a category from a budget
    const handleDeleteBudgetCategory = (title: string)=> {
        setBudgetCategories(budgetCategories.filter((item)=> item.title !== title ))
        

    }
    const handleBudgetSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (budgetCategories.length === 0) {
            setErrorMsg("No categories selected!")
            return;
        }
        onsubmit(budgetCategories);
        setBudgetCategories([])
    }
    useEffect(()=>  {
        setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }))
    },[])
    useEffect(()=> {
        const errorTimeout = setTimeout(() => {
                setErrorMsg("")
        }, 2000);
        return ()=> {
            clearTimeout(errorTimeout)
        }
    }, [errorMsg])
    return (
        <div className="theme-suggestion-container w-card">
            <h2>Add monthly budget for {currentMonth}</h2>
            {errorMsg.length> 2 ?<p>{errorMsg}</p>: <></>}

            {/* Form for adding a category to budget */}
            <form className="w-card" onSubmit={handleBudetForm}>
                <label>
                <select className="w-input" value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
                    {categoryOptions.map((item, index)=> <option key={index} value={item}> {item}</option>)}
                </select>
                </label>
                    
                <button className="w-btn" type="submit">Add Budget category</button>
                {!showNewCategoryForm && <button className="w-btn" type="button" onClick={()=> setshowNewCategoryForm(!showNewCategoryForm)}>Add new category...</button>}
            </form>
            
            {/* < /Form for adding a category to budget  */}

            
            {/* Form for adding a custom category*/}

            {showNewCategoryForm && <form className="w-card" onSubmit={handleNewCategorySubmit }>
                <label htmlFor="">
                        Add a new category
                    <input type="text"
                        className="w-input" 
                        placeholder="Choose a Category name"
                        value={newCategoryName}
                        required
                        onChange={(e)=> setNewCategoryName(e.target.value) }/>
                </label>
                
                <button className="w-btn" type="submit">Add Category</button>
                <button className="w-btn" onClick={()=> setshowNewCategoryForm(!showNewCategoryForm)}>Close</button>
                
            </form>}
            {/* /Form for adding a custom category*/}

            {/* Form for setting max values for each category*/}
            {budgetCategories.length >= 1 && <form className="w-card" onSubmit={handleBudgetSubmit}>
                <h5>Selected Categories for this months budget, set your max budget for each category</h5>
                {budgetCategories.map((item)=> (<InputComponent
                    key={item.id}
                    label={item.title}
                    value={item.value}
                    onChange={(e) => handleValueChange(item.id, e.target.value)}
                    onDelete={()=> handleDeleteBudgetCategory(item.title)}
                />))}
                <button className="w-btn" type="submit">Submit budget</button>
            </form>}
            {/* /Form for setting max values for each category*/}

        </div>
        
    );
}
export default BudgetModal;