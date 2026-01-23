/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address:{
            city: "Hyderabad",
            pincode: 500085
            }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

//creating deep copy of order object
// using structuredClone method
const copiedOrder=structuredClone(order);

//modifying customer.address.city in copied object
copiedOrder.customer.address.city="Bangalore";

//modifying items[0].price in copied object
copiedOrder.items[0].price=65000;

//logging both original and copied objects
console.log("Original Order Object:",order);
console.log("Copied Order Object:",copiedOrder);
//verifying original object remains unchanged
if(order.customer.address.city==="Hyderabad" && order.items[0].price===70000){
    console.log("Original object remains unchanged.");
} else {
    console.log("Original object has been changed.");
}


