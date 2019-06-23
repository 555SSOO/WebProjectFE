<template>
    <div id="app">
        <!--<div v-if="authenticated" id="firstlastname">-->
           <!---->
            <!--&lt;!&ndash;<router-link v-if="authenticated" to="/home" v-on:click.native="logout()" replace>Logout</router-link>&ndash;&gt;-->
        <!--</div>-->

        <div class="usernamediv" v-if="user">
            {{user.firstName}} {{user.lastName}}
        </div>

        <router-view @authenticated="setAuthenticated" @user="setUser"/>

    </div>
</template>

<script>
    import CouponClient from "@/clients/coupon-client.js"
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                user: {
                    firstName: "",
                    lastName: "",
                    privilegeLevel: ""
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            setUser(user) {
                this.user = user;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    .usernamediv{
        text-align:right;
    }
</style>