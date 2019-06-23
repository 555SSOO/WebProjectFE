<template>
    <div>
        <Coupons v-bind:coupons="coupons"/>

    </div>
</template>
<script>
    import Coupons from "./components/Coupons";

    import CouponClient from "@/clients/coupon-client.js"
    import ShopClient from "@/clients/shop-client.js"

    export default {
        name: "app",

        components: {
            Coupons
        },
        data() {
            return {
                coupons: [],
                shops: []
            };
        },
        created() {
            CouponClient.loadCouponsForShop(this, window.location.href.split("/")[4]);
            // CouponClient.loadCoupons(this);
            ShopClient.loadShops(this);
        }
    };
</script>