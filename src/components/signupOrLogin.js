import { useState } from "react";
import { signUp } from "../utils";

const SignupOrLogin = ({ setter }) => {
    const [username, setUsername] = useState(); 
    const [firstname, setFristname] = useState(); 
    const [lastname, setLastname] = useState(); 
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState(); 

    const submitHandler = async(event) => {
        event.preventDefault(); 
        await signUp(username, firstname, lastname, email, password, setter); 

    }

    // const updateUser = (_id) => {
    //     const newUsername = prompt("Enter new Username: ")

    //     Axios.put('http://localhost:5001/update', { newUsername: newUsername, id: id });
    // }

    return (
        <form onSubmit={ submitHandler }>
            <label>
                Username:
                <input onChange = { (event) => setUsername(event.target.value) } />
            </label>
            <br></br>

            <label>
                First Name:
                <input onChange = { (event) => setFristname(event.target.value) } />
            </label>
            <br></br>

            <label>
                Last Name:
                <input onChange = { (event) => setLastname(event.target.value) } />
            </label>
            <br></br>

            <label>
                Email:
                <input type="email" onChange = { (event) => setEmail(event.target.value) } />
            </label>
            <br></br>

            <label>
                Password:
                <input type="password" onChange = { (event) => setPassword(event.target.value) } />
            </label>
            <br></br>
            <button type="submit">
                Click here to signup or login
            </button>
            {/* <button onClick={() => {updateUser(event._id)}}>
                Update
            </button> */}
        </form>
    )
}
export default SignupOrLogin; 


