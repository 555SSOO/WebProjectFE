<template>
    <div>

        <form v-on:submit="login">
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
        </form>


    </div>
</template>
<script>
    import UserClient from "@/clients/user-client.js"
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            async login() {
                if(this.input.username != "" && this.input.password != "") {
                    const data = await UserClient.getUser(this.input.username, this.input.password, this);
                    if( data != null) {
                        console.log(data);
                        this.$emit("user", data);
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>