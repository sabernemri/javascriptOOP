// document.addEventListener("DOMContentLoaded",()=>{

    // const totalPrix=document.querySelector(".total");
// let totalPrice=0;

// const produits=document.querySelectorAll(".card");

// produits.forEach(produit=>{

//     const unitPrice=parseFloat(produit.querySelector(".unit-price").textContent)
//     const quantityEl=produit.querySelector(".quantity");

//     const BoutonPlus=produit.querySelector(".fa-plus-circle");
//     const BoutonMoin=produit.querySelector(".fa-minus-circle");

    

//     const likeBouton = document.getElementById("likeButton");
// const heartIcone = likeBouton.querySelector(".fa-heart");
//     const suppBouton=produit.querySelector(".fa-trash-alt");



// BoutonPlus.addEventListener("click",()=>{
// let quantity=parseInt(quantityEl.textContent);
// quantityEl.textContent=++quantity;
// totalPrice+=unitPrice;
// totalPrix.textContent=totalPrice;
// })

// BoutonMoin.addEventListener("click",()=>
//     {
//     let quantity=parseInt(quantityEl.textContent);
//     if(quantity>0){
//     quantityEl.textContent=--quantity;
//     totalPrice-=unitPrice;
//     totalPrix.textContent=totalPrice;
// }})

// suppBouton.addEventListener("click",()=>{
//     produit.remove();

// })

// //likeBouton.addEventListener("click",()=>{


// //likeBouton.style.color="red"


// likeBouton.addEventListener("click", () => {
//     if (heartIcone.style.color === "red") {
//         heartIcone.style.color = "black";
//     } else {
//         heartIcone.style.color = "red";
//     }
// })


// })





// });

class produits{
    constructor(idProduit,nomProduit,prixProduit){
    this.idProduit=idProduit;
    this.nomProduit=nomProduit;
    this.prixProduit=prixProduit;
}}

class ElmentP {
    constructor(produits,quantElem){
       
    this.quantElem=quantElem;
    this.produits=produits;
} 
 calcule() {
    return(this.produits.prixProduit*this.quantElem)
    
}
}
class choppingCard{
  constructor(){  this.items=[];}

totalPrix() {
    let s = 0;
    for (let i = 0; i < this.items.length; i++) {
        s += this.items[i].calcule();
    }
    return s;
    }

AjouterElem(produits, quantElem) {
    const item = new ElmentP(produits, quantElem);
    this.items.push(item);
}

suppElem(idProduit) {
    this.items = this.items.filter(item => item.produits.idProduit !== idProduit);
}
afiichage(){
    this.items.forEach(item=>{console.log(`${item.produits.nomProduit} (*${item.quantElem})-${calcule()}`)})
    
    
}


}


// displayCart() {
//     if (this.items.length === 0) {
//         console.log("The cart is empty.");
//         return;
//     }

//     console.log("Shopping Cart Items:");
//     this.items.forEach(item => {
//         console.log(${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)});
//     });
//     console.log(Total: $${this.getTotal().toFixed(2)});
// }
