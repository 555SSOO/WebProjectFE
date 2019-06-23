const domainUrl = "http://localhost:8080/rest";

let UserClient = {

    addUser(user, comp) {
        console.log(JSON.stringify(user));
        fetch(domainUrl + "/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (user) {
                comp.users = [...comp.users, user]
            });
    },

    async getUser(username, password, comp) {
        const response = await fetch(domainUrl + "/users/" + username + "/" + password);
        try {
            return await response.json();
        }
        catch (e) {
            //alert(e);
        }
    }
}


export default UserClient
