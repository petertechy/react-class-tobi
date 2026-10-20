import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()
    const handleSubmit = () =>{
        console.log("yesssss")
        navigate('/about')
    }
  return (
    <div>
        <h3>Login Page</h3>
        <input type="email" placeholder="enter your email"/>
        <input type="password" placeholder="enter your password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LoginForm