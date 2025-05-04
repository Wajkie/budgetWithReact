
type NavbarProps = {
    loggedIn : boolean
}

const Navbar: React.FC<NavbarProps> = ({loggedIn})=> {
    return (
        <nav className="w-navbar">
          <div className="w-navbar-logo">wBudget</div>
          <div className="w-navbar-links">
            { loggedIn && <>
                <a href="#">Dashboard</a>
                <a href="#">Transactions</a>
                <a href="#">Budgets</a>
                <a href="#">Reports</a>
                <a href="#">Profile</a>
            </>}
            <a href="#">{loggedIn ? "Logout" : "Login"}</a>
          </div>
        </nav>
    );
}
export default Navbar