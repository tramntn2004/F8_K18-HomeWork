let products = [
  { id: 1, name: "A", price: 100, remaining: 10 },
  { id: 2, name: "B", price: 200, remaining: 5 },
];
let orders = [];
let nextOrderId = 1;

function createOrder(productId, orderQuantity) {
  if (productId == null || orderQuantity == null) {
    console.log("ProductId and OrderQuantity must not be null")
  }
  let product = null
  for (let i= 0; i< products.length; i++) {
    if (products[i].id === productId) {
      product = products[i]
      break
    }
  }
  if (product === null) {
    console.log("Product not found")
  }
  if (product.remaining < orderQuantity) {
    console.log("out of stock");
    return;
  }
  let newOrder = {
    id: nextOrderId,
    productId: productId,
    quantity: orderQuantity
  };
  nextOrderId++;
  orders.push(newOrder);
  product.remaining -= orderQuantity;
  return newOrder;
}

function updateOrder(orderId, quantity) {
  let order = null;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      order = orders[i];
      break;
    }
  }
  if (order === null) {
    console.log("Order not found");
  }
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === order.productId) {
      product = products[i];
      break;
    }
  }
  if (product === null) {
    console.log("Product not found");
  }
  let diff = quantity - order.quantity;
  if (diff > 0 && product.remaining < diff) {
    console.log("out of stock");
    return;
  }
  product.remaining -= diff;
  order.quantity = quantity;
  if (product.remaining < 0) {
    product.remaining = 0;
  }
  return order;
}

function deleteOrder(orderId) {
  let index = -1;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    console.log("not found");
  }
  let order = orders[index];
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === order.productId) {
      products[i].remaining += order.quantity;
      break;
    }
  }
  orders.splice(index, 1);
  return true;
}



