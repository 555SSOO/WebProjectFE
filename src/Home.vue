<!-- Template je HTML parce koda koje ce biti ubaceno u DOM. 
Posto se ova komponenta renderuje u main.js, ovaj HTML kod ce zavrsiti umetnut u div sa id-jem app.
Template mora da ima samo jedan root HTML element! -->
<template>
    <!-- root element -->
    <div>
        <!-- Coupons tag je zahtev da se na mestu ovog taga izrenderuje template Coupons komponente.
        Ovaj tag je moguc ako se komponenta doda u listu komponenti (components) u skirpt sekciji.
        v-bind:coupons="coupons" znaci da za komponentu Coupons vezujemo promenljivu coupons
        (iz data() u skript zekciji, ovo je pod navodnicima) pod imenom coupons (ime promenljive je posle ':')-->
        <Coupons v-bind:coupons="coupons"/>

        <!-- Na slican nacin umecemo i komponentu AddCoupon (komponenta zaduzena za dodavanje novog kupona).
        v-on:add-coupon="addCoupon" je nacin kako da vezemo addCoupon funkciju na event add-coupon.
        Ukoliko komponenta AddCoupon okine event add-coupon onda ce pozvati fukcija addCoupon koja se nalazi u "methods" -->
        <br/><br/><br/>
        ADD COUPON
        <AddCoupon v-on:add-coupon="addCoupon" v-bind:shops="shops"/>
        <br/><br/><br/>
        ADD SHOP
        <AddShop v-on:add-shop="addShop"/>
        <br/><br/><br/>
        <div v-if="this.$parent.user.privilegeLevel == 'ADMINISTRATOR'">
        ADD USER
        <AddUser v-on:add-user="addUser"/>
        </div>
    </div>
</template>

<script>
    /* Pre nego sto budemo uopste mogli da koristimo komponente u
    template-u moramo da ih importujemo i zaregistrujemo u "components" */
    import Coupons from "./components/Coupons";
    import AddCoupon from "./components/AddCoupon";
    import AddShop from "./components/AddShop";
    import AddUser from "./components/AddUser";

    /* Importovali smo svoja dva modula za klijente. Klijenti ce pozivati BE.
    */
    import CouponClient from "@/clients/coupon-client.js"
    import ShopClient from "@/clients/shop-client.js"
    import UserClient from "@/clients/user-client.js"

    export default {
        name: "home",  // name: Definise ime komponente

        /* components: Lista komponenti. Zaregistruje importovane komponente.
        Ove komponente sada mozemo koristiti u template-u. */
        components: {
            Coupons,
            AddCoupon,
            AddShop,
            AddUser
        },

        /* data: Mora biti funkcija koja vraca objekat.
        Taj objekat ce sadrzati podatke koje ce ova komponenta koristiti.
        Svi podaci zaregistrovani u data sekciji mogu se pristupiti sa this npr. this.coupons */
        data() {
            return {
                coupons: [],
                shops: []
            };
        },

        /* methods: Funkcije dostupne ovoj komponenti cak i u template-u.
        Kao i u data sekciji ovim metodama mozemo pristupiti sa this.*/
        methods: {
            addCoupon(coupon) {
                CouponClient.addCoupon(coupon, this);
            },
            addShop(shop) {
                ShopClient.addShop(shop, this);
            },
            addUser(user) {
                UserClient.addUser(user, this);
            },
            reloadCoupons() {
                CouponClient.loadCoupons(this);
            }
        },
        /* created: ovde stavljamo kod koji ce se izvrsiti cim se stranica i komponente ucitaju
         */
        created() {
            CouponClient.loadCoupons(this);
            ShopClient.loadShops(this);
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
