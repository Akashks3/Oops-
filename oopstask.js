

class Person {
    constructor(name, age, gender, address, email, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

// Example usage:
const person1 = new Person(
    'Alice Johnson',
    28,
    'Female',
    '456 Elm Street, Springfield',
    'alice.johnson@example.com',
    '+1-555-6789'
);

console.log(person1);
console.log(person1.getDetails());


class UberPrice {
    constructor(basePrice, perKilometerRate, taxRate) {
        this.basePrice = basePrice;
        this.perKilometerRate = perKilometerRate;
        this.taxRate = taxRate;
    }

    /**
     * Calculates the total Uber price based on the distance traveled.
     * @param {number} kilometers - Distance traveled in kilometers.
     * @returns {number} - The total price.
     */
    calculatePrice(kilometers) {
        const distanceCost = this.perKilometerRate * kilometers;
        const subtotal = this.basePrice + distanceCost;
        const taxAmount = (this.taxRate / 100) * subtotal;
        const totalPrice = subtotal + taxAmount;
        return totalPrice;
    }
}
const uber = new UberPrice(50, 10, 10); 
const distance = 15; // kilometers
const total = uber.calculatePrice(distance);
console.log(`Total Uber Price for ${distance} km: $${total}`);