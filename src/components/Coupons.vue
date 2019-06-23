<template>
  <div>
    <h1>Coupons</h1>
    <table>
      <colgroup>
        <col/>
        <col/>
        <col class="green"/>
        <col class="red"/>
      </colgroup>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Shop</th>
          <th>Dicounted Price</th>
          <th>Original Price</th>
          <th>Discount</th>
          <th>Valid From</th>
          <th>Valid To</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for sluzi da kreira HTML element <tr> za svaki element u nizu coupons-->
        <tr v-bind:key="coupon.id" v-for="coupon in coupons">
          <td>{{ coupon.productName }}</td>
          <td><a :href="'/shop/' + coupon.shop.id">{{ coupon.shop.name }}</a></td>
          <td>{{ coupon.discountedPrice }}</td>
          <td>{{ coupon.originalPrice }}</td>
          <td>{{ coupon.discount }}%</td>
          <td>{{ coupon.validFrom }}</td>
          <td>{{ coupon.validTo }}</td>
          <td id="deleteCoupon">
            <button v-on:click="deleteCoupon(coupon.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="showAllCoupons()">Show all coupons</button>
    <button v-on:click="showOnlyActiveCoupons()">Show only active coupons</button>

  </div>
</template>

<script>
    import CouponClient from "@/clients/coupon-client.js"

export default {
  name: "Coupons",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance Home.vue komponente.
  Ove promenljive mozemo koristiti u template sekciji*/
  props: ["coupons"],

  methods: {

      deleteCoupon(id){
          CouponClient.deleteCoupon(id);
          this.$parent.reloadCoupons();
      },
      showAllCoupons(){
          this.$parent.reloadCoupons();
      },
      showOnlyActiveCoupons(){
          CouponClient.showOnlyActiveCoupons(this.$parent);
      }

  }


};
// import Vue from 'vue'
// new Vue({
//     el: '#deleteCoupon',
//     methods : {
//         deleteCoupon : function(message) {
//             alert(message)
//         }
//     },
// });

</script>

<style scoped>

table {
  border-collapse: collapse;
  margin-bottom: 20px;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0 5px;
}


.red {
  background-color: rgba(255,0,0,.25);
}
.green {
  background-color: rgba(77, 175, 124, 1);
}

</style>