import React, {useState} from "react";
import baseApi from "../../hooks/baseApi";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = baseApi();
            const response = await api.post('/auth/login', {username, password}, {withCredentials: true});
            if (response.data) {
                console.log(response.data);
                setMessage('Login successful');
            }
        } catch (error) {
            console.error(error);
            setError('Invalid email or password');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                {error}
                {message}
            </form>
        </div>
    )
}


export default Login;