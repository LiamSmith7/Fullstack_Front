exports.getToken = () => {
    const token = localStorage.getItem("token");
    console.log("Getting token: ");
    console.log(token);
    return token === "null" || token === "undefined" || token === undefined || token === null ? null : token;
}

exports.signup = async (userObj) => {
    console.log("Attempting signup");
    try{
        const response = await fetch(process.env.REACT_APP_REST_API + "user",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        const jwt = await response.json();
        //return 0;
        return jwt;
    }
    catch(error){
        console.log(error);
    }
}

exports.loginToken = async () => {
    const token = this.getToken();
    if (token == null) return; // Checks if token exists. Returns early if not.

    console.log("Attempting token login");
    try{
        const response = await fetch(process.env.REACT_APP_REST_API + "user",{
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        console.log(error);
    } 
}

exports.login = async (userObj) => {
    console.log("Attempting credentials login");
    try{
        const response = await fetch(process.env.REACT_APP_REST_API + "login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        const jwt = await response.json();
        return jwt;
    }
    catch(error){
        console.log(error);
    }
}

exports.updateUser = async (updates) => {
    const token = this.getToken();
    if (token == null) return; // Checks if token exists. Returns early if not.

    console.log("Attempting user update");
    try{
        const response = await fetch(process.env.REACT_APP_REST_API + "user", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        });
        await response.json();
        return response.status === 200;
    }
    catch(error){
        console.log(error);
    }
}

exports.remove = async () => {
    const token = this.getToken();
    if (token == null) return; // Checks if token exists. Returns early if not.

    console.log("Attempting user deletion");
    try{
        const response = await fetch(process.env.REACT_APP_REST_API + "user",{
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        await response.json();
        return response.status === 200;
    }
    catch(error){
        console.log(error);
    }
}