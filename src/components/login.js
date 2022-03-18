import { useState } from "react";
import { signup, login } from "../utils";

const Login = ({ userSetter }) => {

	const [username, setUsername] = useState();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState();
	const [signupNotLogin, setSignupNotLogin] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		if(!signupNotLogin || (email && email.includes("@"))){
			try{
				const userObj = { username, email, pass };
				const jsonWebToken = await (signupNotLogin ? signup(userObj) : login(userObj));
				console.log(jsonWebToken);
				userSetter(jsonWebToken);
			}
			catch(error){
				console.log(error);
			}
		}
		else
			alert("Invalid email address.");
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<input onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
				<input onChange={(event) => setPass(event.target.value)} placeholder="Password"/>
				{signupNotLogin && (<input onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>)}
				<button type="submit">Submit</button>
			</form>
			<button onClick={() => setSignupNotLogin(!signupNotLogin)}>{!signupNotLogin ? "Sign up" : "Log in"}</button>
		</>
	);
};

export default Login;