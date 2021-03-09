function addWithSubCharge(a, b){
   let charges = calculateSubCharge(a) +  calculateSubCharge(b);
   let totalAmount = a + b + charges;
   return totalAmount;
}

function calculateSubCharge(amount){
    return amount <= 10 ? 1 : 2;
}

console.log(addWithSubCharge(40, 2));