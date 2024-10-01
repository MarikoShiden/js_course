var services = {
    "Фарбування": "300.00 грн",
    "Стрижка": "60.30 грн",
    "Гоління": "80.44 грн",
    "Миття голови": "100.51 грн",

    price() {
        let totalPrice = 0;
        for (const key in this) {
            if (typeof this[key] !== "function") {
                totalPrice += Number.parseFloat(this[key].slice(0, this[key].indexOf(" "))); 
            }
        }
        return totalPrice;
    },

    minPrice() {
        let minPrice = Infinity;
        for (const key in this) {
            if (minPrice > parseFloat(this[key]) && typeof this[key] !== "function") {
                minPrice = parseFloat(this[key]);
            }
        }
        return minPrice;
    },

    maxPrice() {
        let maxPrice = null;
        for (const key in this) {
            if (maxPrice < parseFloat(this[key]) && typeof this[key] !== "function") {
                maxPrice = parseFloat(this[key]);
            }
        }
        return maxPrice;
    },

};

console.log(services.minPrice());
console.log(services.maxPrice());
console.log(services.price());
    