"use strict"
let productViews = new WeakMap();
let cartItems = new WeakSet();
function incrementProductViews(productId){
    productViews.set(productId,(productViews.get(productId)||0)+1);
    console.log(`product id ${productId.productId} is viewed for ${productViews.get(productId)}`)
  

}


function addToCart(productId){
    if(cartItems.has(productId)){
        console.log("item is already in the cart");
    }
    else cartItems.add({productId});
}
let obj1={"productId":"123"}
incrementProductViews(obj1); // Product ID 123 is viewed for the first time
incrementProductViews(obj1); // Product ID 123 is viewed for the second time

addToCart(obj1); // "Product added to cart"
addToCart(obj1); // "Product already in cart"























