"use strict";
class Product {
    navigateTo() {
        console.log("Navigating to product page");
    }
}
class Cart extends Product {
    navigateTo(url) {
        console.log(url);
    }
}
// const c = new Cart()
// c.navigateTo()
const pro = new Product();
pro.navigateTo();
//# sourceMappingURL=poly.js.map