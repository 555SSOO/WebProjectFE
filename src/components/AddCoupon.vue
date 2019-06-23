<template>
    <!-- Koriste v-on odreagovacemo na submit pozivom addCoupon -->
    <form v-on:submit="addCoupon">

        <!-- v-model nam sluzi da vezemo promenljivu za input -->
        <select v-model="selectedShop" required>

            <!-- sa :value keyword-om oznacavamo da ce vrednost selectedShop promenljive biti ceo shop a ne samo shop.name kao sto bi bilo po default-u.  -->
            <option v-bind:key="shop.id" v-for="shop in shops" :value="shop">{{shop.name}}</option>
        </select>

        <input required type="text" v-model="productName" name="productName" placeholder="Product name">

        <!-- v-model.number forsiramo da input bude broj a ne string -->
        <input required
                type="number"
                step="0.01"
                v-model.number="originalPrice"
                name="originalPrice"
                placeholder="Enter original price"
        >

        <input required
                type="number"
                step="0.01"
                v-model.number="discountedPrice"
                name="discountedPrice"
                placeholder="Enter discounted price"
        >

        <input required
                type="date"
                name="validFrom"
                v-model="validFrom"
                placeholder="Enter valid from date"
        >

        <input
                type="date"
                name="validTo"
                v-model="validTo"
                placeholder="Enter valid to date"
        >

        <input type="submit" value="Create">
    </form>
</template>

<script>
    export default {
        name: "AddCoupon",

        /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
        Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance Home.vue komponente.
        Ove promenljive mozemo koristiti u template sekciji*/
        props: ["shops"],
        data() {
            return {
                selectedShop: {},
                productName: "",
                originalPrice: 0,
                discountedPrice: 0,
                validFrom: null,
                validTo: null
            };
        },
        methods: {
            addCoupon(e) {
                // Sprecavamo default-no ponasanje forme
                e.preventDefault();

                // Kreiramo kupon onako kako ga BE ocekuje na osnovu polja u data() koja su popunjena od strane template-a
                const newCoupon = {
                    shop: this.selectedShop,
                    productName: this.productName,
                    originalPrice: this.originalPrice,
                    discountedPrice: this.discountedPrice,
                    validFrom: this.validFrom,
                    validTo: this.validTo
                };

                /* Kreiramo event koji ce isplivati do parent-a sa $emit funkcijom i prosledjujemo mu novokreirani kupon.
                Ovaj event ce se zvati add-coupon. Parent ce uhvatiti ovaj event sa v-on:add-coupon. Ovo radimo jer je parent
                vlasnik svih kupona i parent je taj koji ima logiku za kontaktiranje BE.
                */
                this.$emit("add-coupon", newCoupon);

                // Vracamo sve vrednosti na staro
                this.shop = this.shops[0];
                this.productName = "";
                this.originalPrice = 0;
                this.discountedPrice = 0;
                this.validFrom = null;
                this.validTo = null;

                // Sprecavamo default-no ponasanje forme
                return false;
            }
        }
    };
</script>

<style scoped>
</style>