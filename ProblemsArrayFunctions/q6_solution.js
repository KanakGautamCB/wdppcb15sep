const sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 1, date: "2023-05-01" },
    { id: 2, product: "Smartphone", category: "Electronics", price: 699.99, quantity: 2, date: "2023-05-02" },
    { id: 3, product: "Headphones", category: "Electronics", price: 199.99, quantity: 3, date: "2023-05-03" },
    { id: 4, product: "Running Shoes", category: "Sports", price: 89.99, quantity: 1, date: "2023-05-04" },
    { id: 5, product: "Coffee Maker", category: "Home", price: 79.99, quantity: 1, date: "2023-05-05" },
    { id: 6, product: "Yoga Mat", category: "Sports", price: 29.99, quantity: 2, date: "2023-05-06" },
    { id: 7, product: "Blender", category: "Home", price: 39.99, quantity: 1, date: "2023-05-07" },
    { id: 8, product: "Watch", category: "Electronics", price: 299.99, quantity: 1, date: "2023-05-08" },
    { id: 9, product: "T-shirt", category: "Clothing", price: 19.99, quantity: 3, date: "2023-05-09" },
    { id: 10, product: "Backpack", category: "Accessories", price: 49.99, quantity: 1, date: "2023-05-10" }
  ];


//  Q6. Filter electronics, map to sale totals, reduce to sum.

// let electronicsItem = sales.filter((item)=>{
//     return item.category=="Electronics"
// })

// //console.log(electronicsItem)

// let electronicsItemSaleTotals = electronicsItem.map((item)=>{
//     return item.price*item.quantity
// })

// //console.log(electronicsItemSaleTotals)

// let totalEletronicSale = electronicsItemSaleTotals.reduce((acc,item)=>{
//     return acc+=item
// },0)

let totalEletronicSale = sales.filter((item)=>{
    return item.category=="Electronics"
}).map((item)=>{
    return item.price*item.quantity
}).reduce((acc,item)=>{
    return acc+=item
},0)

console.log(totalEletronicSale)