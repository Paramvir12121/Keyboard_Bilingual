import React, {useState} from "react";
import baseApi from "../../hooks/baseApi";
import FormInput from "../../components/common/FormInput";
import ErrorMessage from "../../components/common/ErrorMessage";


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
                  <FormInput label="Username" type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <FormInput label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <ErrorMessage message={error} />
                  <button type="submit">Login</button>
                  {message}
              </form>
        </div>
    )
}


export default Login;