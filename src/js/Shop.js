import Coupons from "./components/Coupons";

import CouponClient from "@/clients/coupon-client.js"
import ShopClient from "@/clients/shop-client.js"

export default {
    name: "shop",

    components: {
        Coupons
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
    /* created: ovde stavljamo kod koji ce se izvrsiti cim se stranica i komponente ucitaju
     */
    created() {
        CouponClient.loadCoupons(this);
        ShopClient.loadShops(this);
    }
};