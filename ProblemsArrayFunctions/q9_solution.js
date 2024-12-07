const sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 1, date: "2023-05-01" },
    { id: 2, product: "Smartphone", category: "Electronics", price: 699.99, quantity: 2, date: "2023-05-02" },
    { id: 3, product: "Headphones", category: "Electronics", price: 199.99, quantity: 3, date: "2023-05-02" },
    { id: 4, product: "Running Shoes", category: "Sports", price: 89.99, quantity: 1, date: "2023-05-04" },
    { id: 5, product: "Coffee Maker", category: "Home", price: 79.99, quantity: 1, date: "2023-05-01" },
    { id: 6, product: "Yoga Mat", category: "Sports", price: 29.99, quantity: 2, date: "2023-05-04" },
    { id: 7, product: "Blender", category: "Home", price: 39.99, quantity: 1, date: "2023-05-02" },
    { id: 8, product: "Watch", category: "Electronics", price: 299.99, quantity: 1, date: "2023-05-01" },
    { id: 9, product: "T-shirt", category: "Clothing", price: 19.99, quantity: 3, date: "2023-05-05" },
    { id: 10, product: "Backpack", category: "Accessories", price: 49.99, quantity: 1, date: "2023-05-05" }
  ];

// Q9. Map to date and date total, reduce to group by date, then find maximum.

let dailyData = sales.map((item)=>{
    return {
        "date":item.date,
        "total":item.price*item.quantity
    }
})
//console.log(dailyData)

let dateGroupData = dailyData.reduce((acc,item)=>{
    if(!acc[item.date]){
        acc[item.date]=0;
    }
    acc[item.date]+=item.total;
    return acc
},{})

dateGroupData = Object.entries(dateGroupData);
console.log(dateGroupData)

let maxRevenueDetails = dateGroupData.reduce((acc,[date,price])=>{

    if(acc.price<price){
        return{
            date,
            price
        }
    }
    return acc

},{
  "date":"",
  "price":0  
})

console.log(maxRevenueDetails)

