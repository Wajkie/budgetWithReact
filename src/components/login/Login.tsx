type LoginFormProps = {
    loggedIn: (loggedIn: boolean)=> void;
}

const LoginForm: React.FC<LoginFormProps> = ({loggedIn})=> {
    return (
        <>
            <form className="w-card theme-suggestion-container">
                <h3>Login</h3>
                <input type="text" className="w-input" placeholder="Användarnamn..." />
                <input type="text" className="w-input" placeholder="Lösenord..." />
                

                <button className="w-btn button-group" type="button" onClick={()=> loggedIn(true)}>Login</button>
            </form>
        </>
    );
}
export default LoginForm;