type RegisterFormProps = {
    registered: (loggedIn: boolean)=> void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({registered})=> {
    return (
        <>
            <form className="w-card theme-suggestion-container">
                <h3>Register</h3>
                <input type="text" className="w-input" placeholder="Användarnamn..." />
                <input type="text" className="w-input" placeholder="Email..." />
                <input type="text" className="w-input" placeholder="Lösenord..." />
                <input type="text" className="w-input" placeholder="Lösenord igen..." />
                

                <button className="w-btn" type="button" onClick={()=> registered(true)}>Login</button>
            </form>
        </>
    );
}
export default RegisterForm;