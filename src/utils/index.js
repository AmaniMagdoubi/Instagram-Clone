export const signUp = async (username, firstname, lastname, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/users", 
        {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "userName": username, 
                "firstName": firstname,
                "lastName": lastname, 
                "email": email, 
                "password": password
            }) 
        }); 

        const data = await response.json();
        console.log(data); 
        console.log(data.savedUser.userName);  
        // show that user has logged in - brougt down 3 levels 
        setter(data.savedUser.userName); 

    } catch (error) {
        console.log(error); 
    }
}

export const readUsers = async (setter) => {
    try {
        // completing the same code as Insomnia app 
        const response = await fetch("http://localhost:5001/listUsers", 
        {
            method: "GET", 
            headers: {"Content-Type": "application/json"},
            
        }); 

        const data = await response.json(); 
        console.log(data.users)
        setter(data.users)
    } catch (error) {
        console.log(error)
    }
}

