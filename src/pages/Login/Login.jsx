import "./Login.scss";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ setIsUserLoggedIn }) {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post("http://localhost:8080/api/login", {
                username,
                password,
            });
            if (response.data.token) {
                localStorage.setItem("authToken", response.data.token);
                setIsUserLoggedIn(true);
                navigate('/profile');  
            } else {
                throw new Error('Token not provided in response.');
            }
        } catch (error) {
            console.error("Login failed:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <main className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Log in</button>
                <p className="login-form__footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </main>
    );
}