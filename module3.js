/* You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions. */

const sales = [
  {item: "Laptop", quantity: 2, price: 800},
  {item: "Monitor", quantity: 1, price: 150},
  {item: "Mouse", quantity: 4, price: 25}
];

function calculateTotal(sales) {
	let total = 0;
    for(let i = 0; i < sales.length; i++) {
      total += sales[i].quantity * sales[i].price;
    }
  return total;
}

console.log("Total Sales amount:", calculateTotal(sales));

/* Define an array of ordered items with at least 3 sample entries
Write a function generateReceipt that takes this array as input
Use a loop to iterate through the items and calculate the total for each item and the grand total
Print the receipt in a formatted string */

const myorders = [
	{item: "pizza", quantity: 3, price: 2.25},
  {item: "ice cream", quantity: 2, price: 3.75},
  {item: "gum", quantity: 10, price: 0.50},
]

function generateReciept(orders) {
	 let total = 0;
   let items = [];
   for(let i = 0; i < orders.length; i++) {
		let theItem = {};
     theItem.name = orders[i].item;
		 theItem.cost = orders[i].quantity * orders[i].price;
     items.push(theItem);   
     total += theItem.cost;
   }
   return {items, total};
  }

console.log(generateReciept(myorders));

// The proposed solution 

const orders = [
  { item: "Espresso", quantity: 2, price: 3.5 },
  { item: "Latte", quantity: 3, price: 4.0 },
  { item: "Cappuccino", quantity: 1, price: 4.5 }
];

function generateReceipt(orders) {
  let grandTotal = 0;
  console.log("Receipt:");
  console.log("----------------------");
  for (let i = 0; i < orders.length; i++) {
      const itemTotal = orders[i].quantity * orders[i].price;
      grandTotal += itemTotal;
      console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
  }
  console.log("----------------------");
  console.log(`Grand Total: $${grandTotal}`);
}

generateReceipt(orders);

/* Define an array of sample passwords
Write a function validatePasswords that takes this array as input
Use a loop to iterate through the passwords and check each against the validation criteria
Log whether each password is valid or invalid */

const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];
