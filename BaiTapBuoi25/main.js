const products = [
  { id: 1, name: 'iPhone', price: 2000 },
  { id: 2, name: 'Samsung', price: 1500 },
  { id: 3, name: 'Xiaomi', price: 1000 },
  { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 }
    ]
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 }
    ]
  }
]

function FindProduct(products, orders) {
  let maxRevenue = 0;
  let topProduct = null;
  for (let product of products) {
    let totalQuantity = 0;
    for (let order of orders) {
      for (let item of order.items) {
        if (item.productId === product.id) {
          totalQuantity += item.quantity;
        }
      }
    }
    const revenue = totalQuantity * product.price;
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      topProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        revenue: revenue
      };
    }
  }
  return topProduct;
}

