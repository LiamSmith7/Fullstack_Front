import { updateUser, remove } from "../utils";
import { useState } from "react";

const UserSettings = ({backFunction, logoutFunction, test}) => {

    const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

    const changeSettings = async (e) => {
        e.preventDefault();

        let updateObj = {};
        if(username !== "") updateObj.username = username;
        if(pass !== "") updateObj.pass = pass;
        if(email !== "") updateObj.email = email;
        
        const result = await updateUser(updateObj);
    }

    const deleteHandler = async () => {
        const result = await remove();
        if(result) logoutFunction();
    }

    return (
        <>
            <form onSubmit={changeSettings}>
				<input onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
				<input onChange={(event) => setPass(event.target.value)} placeholder="Password"/>
				<input onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
				<button type="submit">Submit</button>
			</form>
            <button onClick={() => backFunction(false)}>Back to images</button>
            <button onClick={deleteHandler}>Delete account</button>
        </>
    );
}

export default UserSettings;