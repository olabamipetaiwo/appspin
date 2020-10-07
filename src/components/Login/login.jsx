import React,{useState}from "react";
import "../main.scss"


const Login = (props) => {
    const [email,setEmail] = useState(''); 
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email !== '' & email.length > 0) {
            setError('');
            setLoading(true);
            localStorage.setItem("currentUser", email);
            setTimeout(() => {
              props.history.push("/spinner");
              setLoading(false);
            }, 2000);
        }else {
            setError("Please fill in the email value")
        }
        
    }

    return (
        <section className="content">
                <div className="content__box">
                    <h1>Login</h1>
                    <p>Sign in to spin a wheel</p>
                    <form method="POST" action="#">
                        <div className="form__group col">
                            <label htmlFor="email" id="email">Email</label>
                            <input type="email" 
                                   name="email" 
                                   placeholder="Email" 
                                   onChange={e => setEmail(e.target.value)}
                                   required />
                            <p className="error">{error}</p>
                        </div>
                        <button onClick={handleSubmit} type="submit">
                            {loading ? 'Authenticating Credentials': 'Sign In'}
                        </button>
                    </form>
                </div>
        </section>
    )
}

export default Login;
