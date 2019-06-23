<template>
    <!-- Koriste v-on odreagovacemo na submit pozivom addCoupon -->
    <form v-on:submit="addShop">

        <input required type="text" v-model="shopName" name="shopName" placeholder="Shop name">
        <input type="submit" value="Create">
    </form>

</template>

<script>
    export default {
        name: "AddShop",
        data() {
            return {
                shopName: ""
            };
        },
        methods: {
            addShop(e) {
                // Sprecavamo default-no ponasanje forme
                e.preventDefault();

                // Kreiramo kupon onako kako ga BE ocekuje na osnovu polja u data() koja su popunjena od strane template-a
                const newShop = {
                    name: this.shopName,
                };

                /* Kreiramo event koji ce isplivati do parent-a sa $emit funkcijom i prosledjujemo mu novokreirani kupon.
                Ovaj event ce se zvati add-coupon. Parent ce uhvatiti ovaj event sa v-on:add-coupon. Ovo radimo jer je parent
                vlasnik svih kupona i parent je taj koji ima logiku za kontaktiranje BE.
                */
                this.$emit("add-shop", newShop);

                this.shopName = "";

                // Sprecavamo default-no ponasanje forme
                return false;
            }
        }
    };
</script>

<style scoped>
</style>