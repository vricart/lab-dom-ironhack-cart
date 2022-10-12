// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price.innerHTML * quantity;
  // console.log(subtotal)

  const subtotalValue = product.querySelector(".subtotal span");

  subtotalValue.innerHTML = subtotal;
}




function calculateAll() {
  
  const allProducts = document.getElementsByClassName("product");
  const allProductsArr = [...allProducts];
  
  let total = 0;
  
  for (let i = 0; i < allProductsArr.length; i++) {
      updateSubtotal(allProductsArr[i]);
  
      const subtotalAll = allProductsArr[i].querySelector(".subtotal span")
  
      let num = Number(subtotalAll.innerHTML)
      
      total += num;
  }
  
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
  



  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
