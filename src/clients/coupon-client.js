const domainUrl = "http://localhost:8080/rest";

let CouponClient = {
    loadCoupons(comp) {
        fetch(domainUrl + "/coupons")
            .then(function (response) {
                return response.json();
            })
            .then(function (couponsVal) {
                comp.coupons = couponsVal;
            });
    },

    addCoupon(coupon, comp) {  
        fetch(domainUrl + "/coupons", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(coupon)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(coupon) {
            comp.coupons = [...comp.coupons, coupon]
          });
      },

    loadCouponsForShop(comp, shopId) {
        fetch(domainUrl + "/coupons/" + shopId)
            .then(function (response) {
                return response.json();
            })
            .then(function (couponsVal) {
                comp.coupons = couponsVal;
            });
    },

    deleteCoupon(couponId) {
        fetch(domainUrl + "/coupons/" + couponId, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then(function(response) {
                return response;
            })
    },

    showOnlyActiveCoupons(comp) {
        fetch(domainUrl + "/coupons/active")
            .then(function (response) {
                return response.json();
            })
            .then(function (couponsVal) {
                comp.coupons = couponsVal;
            });
    }

}


export default CouponClient
