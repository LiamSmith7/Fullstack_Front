import { useState, useEffect } from "react";
import { loginToken, getToken } from "./utils";
import Login from "./components/login";
import Home from "./components/home";

import "./App.css";

const App = () => {
	const [user, setLoggedInUser] = useState();

	//myStorage = window.localStorage;
	//localStorage.setItem('myCat', 'Tom');
	//const cat = localStorage.getItem('myCat');
	//localStorage.removeItem('myCat');

	const setUser = (userInfo = {user: null, token: null}) => {
		localStorage.setItem("token", userInfo.token);
		setLoggedInUser(userInfo.user);
	}

	useEffect(() => {
		loginToken();
	}, [user]);

	const test = () => {
		alert(localStorage.getItem("token"));
	}

	const logout = () => {
		setUser();
	}

	return (
		<div className="App">
			<button onClick={test}>Test</button>
			{getToken() == null ? <Login userSetter={setUser}/> : <Home logout={logout}/>}
		</div>
	);
	
};

export default App;