import "./Signup.scss";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const name = event.target.name.value;
        const password = event.target.password.value;

        try {
            await axios.post("http://localhost:8080/api/signup", {
                username,
                name,
                password,
            });

            navigate('/login');
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    return (
        <main className="signup-page">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Sign Up</button>
                <p className="signup-form__footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </main>
    );
}
