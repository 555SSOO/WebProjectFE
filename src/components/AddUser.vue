<template>
    <form v-on:submit="addUser">

        <input required type="text" v-model="username" name="username" placeholder="username">
        <input required type="text" v-model="password" name="password" placeholder="password">
        <input required type="text" v-model="firstName" name="firstName" placeholder="firstName">
        <input required type="text" v-model="lastName" name="lastName" placeholder="lastName">
        <select v-model="privilege" required>
            <!-- sa :value keyword-om oznacavamo da ce vrednost selectedShop promenljive biti ceo shop a ne samo shop.name kao sto bi bilo po default-u.  -->
            <option value="ADMINISTRATOR">Administrator</option>
            <option value="OPERATOR">Operator</option>
        </select>
        <input type="submit" value="Create">
    </form>

</template>

<script>
    export default {
        name: "AddUser",
        data() {
            return {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                privilege: ""
            };
        },
        methods: {
            addUser(e) {
                e.preventDefault();
                const newUser = {
                    username: this.username,
                    password: this.password,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    privilegeLevel: this.privilege
                };

                this.$emit("add-user", newUser);
                this.username = "";
                this.password = "";
                this.firstName = "";
                this.lastName = "";
                this.privilege = "";
                return false;
            }
        }
    };
</script>
