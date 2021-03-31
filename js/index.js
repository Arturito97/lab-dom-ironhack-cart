// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText; //Step 1 and 2 - need to be product. to get all the prodcuts in the document
  const quantity = product.querySelector('.quantity input').value; //Step 1 and 2 - same as above
  const totalSum = price*quantity; // step 3
  const subTotal = product.querySelector('.subtotal span') //Step 4
  subTotal.innerText = totalSum; //Step 5
  return totalSum; //Step 5

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 //const singleProduct = document.querySelector('.product');
 //updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here

  let totalPrice = 0;

  const allProducts = document.getElementsByClassName('product'); //getting the elements with class name 'product'
  //to the 'allProducts' variable

  const allProductsArr = [...allProducts]; //Copying the allProducts to a new array
  
  //loop over allProducts array using forEach
   allProductsArr.forEach((prod) => {
     totalPrice += updateSubtotal(prod); // => Callback function
   })                           



  // ITERATION 3
  //... your code goes here

   document.querySelector('#total-value span').innerText = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove(); //parentNode is the parent of the target. And the second parentNode is the parent of the first parentNode. basically it's calling the button of HTML
  //... your code goes here
  calculateAll();
  

}

// ITERATION 5

function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
});
