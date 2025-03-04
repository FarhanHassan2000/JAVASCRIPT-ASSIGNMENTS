// Question 01
var productId = 102;
var product = null;
for (var i = 0; i < products.length; i++) {
  if (products[i].id === productId) {
    product = products[i];
    break;
  }
}
console.log(product);

// Question 02
var productTitles = "";
for (var i = 0; i < products.length; i++) {
  productTitles += products[i].title + "\n";
}
console.log(productTitles);

// Question 03
var colors = "";
for (var i = 0; i < product.variations.length; i++) {
  colors += product.variations[i].color + "\n";
}
console.log(colors);

// Question 04
var totalQuantity = 0;
for (var i = 0; i < product.variations.length; i++) {
  totalQuantity += product.variations[i].quantity;
}
console.log(`Total Quantity: ${totalQuantity}`);

// Question 05
var lowStockProducts = "";
for (var i = 0; i < products.length; i++) {
  var hasLowStock = false;
  for (var j = 0; j < products[i].variations.length; j++) {
    if (products[i].variations[j].quantity < 2) {
      hasLowStock = true;
      break;
    }
  }
  if (hasLowStock) {
    lowStockProducts += products[i].title + "\n";
  }
}
console.log(lowStockProducts);

// Question 06
var highestRatedProduct = null;
var highestRating = -1;
for (var i = 0; i < products.length; i++) {
  var totalRating = 0;
  for (var j = 0; j < products[i].reviews.length; j++) {
    totalRating += products[i].reviews[j].rating;
  }
  var avgRating = totalRating / products[i].reviews.length;
  if (avgRating > highestRating) {
    highestRating = avgRating;
    highestRatedProduct = products[i].title;
  }
}
console.log(`Highest Rated Product: ${highestRatedProduct}`);

// Question 07
var activeReviews = [];
for (var i = 0; i < product.reviews.length; i++) {
  if (product.reviews[i].status) {
    activeReviews.push(product.reviews[i]);
  }
}
for (var i = 0; i < activeReviews.length; i++) {
  console.log(activeReviews[i]);
}

// Question 08
var mostExpensiveVariations = "";
for (var i = 0; i < products.length; i++) {
  var mostExpensive = products[i].variations[0];
  for (var j = 1; j < products[i].variations.length; j++) {
    if (products[i].variations[j].price > mostExpensive.price) {
      mostExpensive = products[i].variations[j];
    }
  }
  mostExpensiveVariations += `Product ${products[i].id} = ${products[i].title} - ${mostExpensive.color} (${mostExpensive.price})\n`;
}
console.log(mostExpensiveVariations);

/// Question 09
var totalStockValue = 0;
for (var i = 0; i < products.length; i++) {
  for (var j = 0; j < products[i].variations.length; j++) {
    totalStockValue += products[i].variations[j].price * products[i].variations[j].quantity;
  }
}
console.log(`Total Stock Value: ${totalStockValue}`);