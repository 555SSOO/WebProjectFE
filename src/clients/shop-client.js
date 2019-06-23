const domainUrl = "http://localhost:8080/rest";

let ShopClient = {
    loadShops(comp) {
      fetch(domainUrl + "/shops")
        .then(function(response) {
          return response.json();
        })
        .then(function(shops) {
          comp.shops = shops;
        });
    },
    addShop(shop, comp) {
        fetch(domainUrl + "/shops", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shop)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(shop) {
                comp.shops = [...comp.shops, shop]
            });
    }
}


export default ShopClient
